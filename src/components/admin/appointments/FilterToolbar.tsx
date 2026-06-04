import { Search } from "lucide-react";

import type { AdminStatusBadgeValue } from "@/components/admin/shared/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type AppointmentFiltersValue = {
  search: string;
  status: AdminStatusBadgeValue | "all";
  donationType: "whole_blood" | "plasma" | "platelets" | "all";
  campaignCode: string;
  pageSize: "10" | "20" | "50";
};

export function AppointmentFilterToolbar({
  copy,
  value,
  campaigns,
  isLoading,
  onChange,
  onReset,
}: {
  copy: {
    searchPlaceholder: string;
    statusPlaceholder: string;
    donationTypePlaceholder: string;
    campaignPlaceholder: string;
    allStatuses: string;
    allDonationTypes: string;
    allCampaigns: string;
    pageSizeLabel: string;
    reset: string;
    statuses: Record<AdminStatusBadgeValue, string>;
    donationTypes: Record<"whole_blood" | "plasma" | "platelets", string>;
  };
  value: AppointmentFiltersValue;
  campaigns: Array<{ code: string; label: string }>;
  isLoading: boolean;
  onChange: (next: AppointmentFiltersValue) => void;
  onReset: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50/50 p-4">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          <Input
            value={value.search}
            onChange={(event) =>
              onChange({
                ...value,
                search: event.target.value,
              })
            }
            placeholder={copy.searchPlaceholder}
            disabled={isLoading}
            className="h-11 rounded-2xl border-slate-200 bg-white pl-10"
          />
        </div>

        <div className="xl:ml-auto">
          <Button
            type="button"
            variant="outline"
            className="h-11 w-full rounded-2xl border-slate-200 bg-white text-slate-700 xl:w-auto"
            disabled={isLoading}
            onClick={onReset}
          >
            {copy.reset}
          </Button>
        </div>
      </div>

      <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_140px]">
        <Select
          value={value.status}
          onValueChange={(nextValue) =>
            onChange({
              ...value,
              status: nextValue as AppointmentFiltersValue["status"],
            })
          }
          disabled={isLoading}
        >
          <SelectTrigger
            aria-label={copy.statusPlaceholder}
            className="h-11 rounded-2xl border-slate-200 bg-white"
          >
            <SelectValue placeholder={copy.statusPlaceholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{copy.allStatuses}</SelectItem>
            <SelectItem value="pending">{copy.statuses.pending}</SelectItem>
            <SelectItem value="confirmed">{copy.statuses.confirmed}</SelectItem>
            <SelectItem value="rejected">{copy.statuses.rejected}</SelectItem>
            <SelectItem value="completed">{copy.statuses.completed}</SelectItem>
            <SelectItem value="cancelled">{copy.statuses.cancelled}</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={value.campaignCode || "all"}
          onValueChange={(nextValue) =>
            onChange({
              ...value,
              campaignCode: nextValue === "all" ? "" : nextValue,
            })
          }
          disabled={isLoading}
        >
          <SelectTrigger
            aria-label={copy.campaignPlaceholder}
            className="h-11 rounded-2xl border-slate-200 bg-white"
          >
            <SelectValue placeholder={copy.campaignPlaceholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{copy.allCampaigns}</SelectItem>
            {campaigns.map((campaign) => (
              <SelectItem key={campaign.code} value={campaign.code}>
                {campaign.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={value.donationType}
          onValueChange={(nextValue) =>
            onChange({
              ...value,
              donationType: nextValue as AppointmentFiltersValue["donationType"],
            })
          }
          disabled={isLoading}
        >
          <SelectTrigger
            aria-label={copy.donationTypePlaceholder}
            className="h-11 rounded-2xl border-slate-200 bg-white"
          >
            <SelectValue placeholder={copy.donationTypePlaceholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{copy.allDonationTypes}</SelectItem>
            <SelectItem value="whole_blood">{copy.donationTypes.whole_blood}</SelectItem>
            <SelectItem value="plasma">{copy.donationTypes.plasma}</SelectItem>
            <SelectItem value="platelets">{copy.donationTypes.platelets}</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={value.pageSize}
          onValueChange={(nextValue) =>
            onChange({
              ...value,
              pageSize: nextValue as AppointmentFiltersValue["pageSize"],
            })
          }
          disabled={isLoading}
        >
          <SelectTrigger
            aria-label={copy.pageSizeLabel}
            className="h-11 rounded-2xl border-slate-200 bg-white"
          >
            <SelectValue placeholder={copy.pageSizeLabel} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10 / page</SelectItem>
            <SelectItem value="20">20 / page</SelectItem>
            <SelectItem value="50">50 / page</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
