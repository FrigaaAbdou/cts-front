import { apiRequest } from "@/lib/api/client";

export type AdminCalendarContext = "general" | "campaign";
export type AdminCalendarScope = {
  context?: AdminCalendarContext;
  campaignCode?: string | null;
};

function createAdminHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
  };
}

function appendCalendarScope(
  params: URLSearchParams,
  scope?: AdminCalendarScope,
) {
  if (scope?.context) {
    params.set("context", scope.context);
  }

  if (scope?.campaignCode) {
    params.set("campaignCode", scope.campaignCode);
  }
}

export type AdminCalendarDayStatus =
  | "available"
  | "full"
  | "closed"
  | "empty";

export type AdminCalendarMonthDay = {
  date: string;
  appointmentCount: number;
  openSlots: number;
  fullSlots: number;
  blockedSlots: number;
  closedSlots: number;
  status: AdminCalendarDayStatus;
};

export type AdminCalendarDaySlot = {
  value: string;
  label: string;
  capacity: number;
  reservedCount: number;
  remainingCapacity: number;
  status: "open" | "full" | "closed" | "blocked";
  source: "template" | "override";
  overrideId: string | null;
  reason: string | null;
};

export type AdminCalendarDayClosureType = "generic" | "day_off" | "holiday";

export type AdminCalendarTemplateItem = {
  id: string;
  campaignCode: string | null;
  daysOfWeek: number[];
  startTime: string;
  endTime: string;
  intervalMinutes: 15 | 30 | 45 | 60;
  capacity: number;
  isActive: boolean;
  donationTypes: Array<"whole_blood" | "plasma" | "platelets">;
};

export type AdminCalendarCampaignSelectorItem = {
  code: string;
  title: string;
  startDate: string;
  endDate: string;
  operationalStatus: "scheduled" | "ongoing";
};

export type AdminCalendarSlotPayload = {
  date: string;
  time: string;
  capacity: number;
  status: "open" | "full" | "closed" | "blocked";
  reason?: string;
  campaignCode?: string;
};

export type AdminCalendarSlotUpdatePayload = Partial<
  Omit<AdminCalendarSlotPayload, "date">
>;

type AdminCalendarMonthResponse = {
  data: {
    month: string;
    days: AdminCalendarMonthDay[];
  };
};

type AdminCalendarDayResponse = {
  data: {
    date: string;
    slots: AdminCalendarDaySlot[];
    summary: {
      totalSlots: number;
      openSlots: number;
      fullSlots: number;
      blockedSlots: number;
      closedSlots: number;
      appointmentCount: number;
      dayClosureType: AdminCalendarDayClosureType | null;
    };
  };
};

type AdminCalendarTemplatesResponse = {
  data: {
    items: AdminCalendarTemplateItem[];
  };
};

type AdminCalendarCampaignSelectorResponse = {
  data: {
    items: AdminCalendarCampaignSelectorItem[];
  };
};

type AdminCalendarSlotMutationResponse = {
  data: {
    item: {
      id: string;
      date: string;
      time: string;
      capacity: number;
      status: "open" | "full" | "closed" | "blocked";
      reason: string;
      campaignCode: string | null;
    };
  };
};

type AdminCalendarDayActionResponse = {
  data: {
    date: string;
    status: "open" | "closed";
    affectedSlots?: number;
    removedOverrides?: number;
    closureType?: AdminCalendarDayClosureType;
  };
};

export async function getAdminCalendarMonth(
  token: string,
  month: string,
  scope?: AdminCalendarScope,
) {
  const params = new URLSearchParams({ month });
  appendCalendarScope(params, scope);

  const payload = await apiRequest<AdminCalendarMonthResponse>(
    `/api/admin/calendar/month?${params.toString()}`,
    {
      headers: createAdminHeaders(token),
    },
  );

  return payload.data;
}

export async function getAdminCalendarDay(
  token: string,
  date: string,
  scope?: AdminCalendarScope,
) {
  const params = new URLSearchParams({ date });
  appendCalendarScope(params, scope);

  const payload = await apiRequest<AdminCalendarDayResponse>(
    `/api/admin/calendar/day?${params.toString()}`,
    {
      headers: createAdminHeaders(token),
    },
  );

  return payload.data;
}

export async function listAdminCalendarCampaignSelectorItems(token: string) {
  const payload = await apiRequest<AdminCalendarCampaignSelectorResponse>(
    "/api/admin/campaigns/calendar-selector",
    {
      headers: createAdminHeaders(token),
    },
  );

  return payload.data.items;
}

export async function listAdminCalendarTemplates(
  token: string,
  scope?: AdminCalendarScope,
) {
  const params = new URLSearchParams();
  appendCalendarScope(params, scope);

  const payload = await apiRequest<AdminCalendarTemplatesResponse>(
    `/api/admin/calendar/templates${params.toString() ? `?${params.toString()}` : ""}`,
    {
      headers: createAdminHeaders(token),
    },
  );

  return payload.data.items;
}

export async function replaceAdminCalendarTemplates(
  token: string,
  items: Array<{
    daysOfWeek: number[];
    startTime: string;
    endTime: string;
    intervalMinutes: 15 | 30 | 45 | 60;
    capacity: number;
    isActive: boolean;
    donationTypes?: Array<"whole_blood" | "plasma" | "platelets">;
  }>,
  scope?: AdminCalendarScope,
) {
  const params = new URLSearchParams();
  appendCalendarScope(params, scope);

  const payload = await apiRequest<AdminCalendarTemplatesResponse>(
    `/api/admin/calendar/templates${params.toString() ? `?${params.toString()}` : ""}`,
    {
      method: "PUT",
      headers: createAdminHeaders(token),
      body: JSON.stringify({ items }),
    },
  );

  return payload.data.items;
}

export async function createAdminCalendarSlot(
  token: string,
  payload: AdminCalendarSlotPayload,
  scope?: AdminCalendarScope,
) {
  const params = new URLSearchParams();
  appendCalendarScope(params, scope);

  const response = await apiRequest<AdminCalendarSlotMutationResponse>(
    `/api/admin/calendar/slots${params.toString() ? `?${params.toString()}` : ""}`,
    {
      method: "POST",
      headers: createAdminHeaders(token),
      body: JSON.stringify(payload),
    },
  );

  return response.data.item;
}

export async function updateAdminCalendarSlot(
  token: string,
  id: string,
  payload: AdminCalendarSlotUpdatePayload,
  scope?: AdminCalendarScope,
) {
  const params = new URLSearchParams();
  appendCalendarScope(params, scope);

  const response = await apiRequest<AdminCalendarSlotMutationResponse>(
    `/api/admin/calendar/slots/${id}${params.toString() ? `?${params.toString()}` : ""}`,
    {
      method: "PATCH",
      headers: createAdminHeaders(token),
      body: JSON.stringify(payload),
    },
  );

  return response.data.item;
}

export async function closeAdminCalendarDay(
  token: string,
  payload: { date: string; reason?: string; closureType?: AdminCalendarDayClosureType },
  scope?: AdminCalendarScope,
) {
  const params = new URLSearchParams();
  appendCalendarScope(params, scope);

  const response = await apiRequest<AdminCalendarDayActionResponse>(
    `/api/admin/calendar/day/close${params.toString() ? `?${params.toString()}` : ""}`,
    {
      method: "POST",
      headers: createAdminHeaders(token),
      body: JSON.stringify(payload),
    },
  );

  return response.data;
}

export async function reopenAdminCalendarDay(
  token: string,
  payload: { date: string },
  scope?: AdminCalendarScope,
) {
  const params = new URLSearchParams();
  appendCalendarScope(params, scope);

  const response = await apiRequest<AdminCalendarDayActionResponse>(
    `/api/admin/calendar/day/reopen${params.toString() ? `?${params.toString()}` : ""}`,
    {
      method: "POST",
      headers: createAdminHeaders(token),
      body: JSON.stringify(payload),
    },
  );

  return response.data;
}
