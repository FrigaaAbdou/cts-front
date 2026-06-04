import { MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

import { StatusBadge, type AdminStatusBadgeValue } from "@/components/admin/shared/StatusBadge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { AdminAppointmentListItem } from "@/lib/api/adminAppointmentsApi";

function getQuickStatusActions(status: AdminStatusBadgeValue) {
  if (status === "pending") {
    return ["confirmed", "rejected"] as const;
  }

  if (status === "confirmed") {
    return ["completed", "cancelled"] as const;
  }

  return [] as const;
}

export function AppointmentsTable({
  locale,
  copy,
  items,
  selectedIds,
  allVisibleSelected,
  someVisibleSelected,
  isMutating,
  onUpdateStatus,
  onToggleSelection,
  onToggleSelectAll,
}: {
  locale: "fr" | "ar";
  copy: {
    selectRow: string;
    selectAll: string;
    donor: string;
    slot: string;
    campaign: string;
    donationType: string;
    status: string;
    actions: string;
    viewDetail: string;
    statusLabels: Record<AdminStatusBadgeValue, string>;
    emptyCampaign: string;
    donationTypes: Record<"whole_blood" | "plasma" | "platelets", string>;
  };
  items: AdminAppointmentListItem[];
  selectedIds: string[];
  allVisibleSelected: boolean;
  someVisibleSelected: boolean;
  isMutating: boolean;
  onUpdateStatus: (id: string, status: AdminStatusBadgeValue) => void;
  onToggleSelection: (id: string, checked: boolean) => void;
  onToggleSelectAll: (checked: boolean) => void;
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-12">
            <Checkbox
              aria-label={copy.selectAll}
              checked={allVisibleSelected ? true : someVisibleSelected ? "indeterminate" : false}
              onCheckedChange={(checked) => onToggleSelectAll(checked === true)}
            />
          </TableHead>
          <TableHead>{copy.donor}</TableHead>
          <TableHead>{copy.slot}</TableHead>
          <TableHead>{copy.campaign}</TableHead>
          <TableHead>{copy.donationType}</TableHead>
          <TableHead>{copy.status}</TableHead>
          <TableHead className="w-[70px] text-right">{copy.actions}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => {
          const quickActions = getQuickStatusActions(item.status);

          return (
            <TableRow key={item.id}>
              <TableCell>
                <Checkbox
                  aria-label={`${copy.selectRow} ${item.donor.firstName} ${item.donor.lastName}`}
                  checked={selectedIds.includes(item.id)}
                  disabled={isMutating}
                  onCheckedChange={(checked) => onToggleSelection(item.id, checked === true)}
                />
              </TableCell>
              <TableCell>
                <div>
                  <p className="font-medium text-slate-900">
                    {item.donor.firstName} {item.donor.lastName}
                  </p>
                  <p className="text-xs text-slate-500">{item.donor.phone}</p>
                </div>
              </TableCell>
              <TableCell className="text-slate-700">
                {item.appointmentDate} - {item.appointmentTime}
              </TableCell>
              <TableCell className="text-slate-700">
                {item.campaignCode ?? copy.emptyCampaign}
              </TableCell>
              <TableCell className="text-slate-700">
                {copy.donationTypes[item.donationType as keyof typeof copy.donationTypes] ??
                  item.donationType}
              </TableCell>
              <TableCell>
                <StatusBadge status={item.status} locale={locale} />
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      className="rounded-xl"
                      disabled={isMutating}
                    >
                      <MoreHorizontal />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-56 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl"
                  >
                    <DropdownMenuItem asChild className="rounded-xl px-3 py-2">
                      <Link to={`/admin/appointments/${item.id}`}>{copy.viewDetail}</Link>
                    </DropdownMenuItem>
                    {quickActions.map((status) => (
                      <DropdownMenuItem
                        key={status}
                        className="rounded-xl px-3 py-2"
                        onSelect={() => onUpdateStatus(item.id, status)}
                      >
                        {copy.statusLabels[status]}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
