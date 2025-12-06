import type { Theater } from "@/lib/type";
import type { ColumnDef } from "@tanstack/react-table";

export const TheaterColumn: ColumnDef<Theater>[] = [
  {
    accessorKey: "name",
    header: "Theater Name",
  },
  {
    accessorKey: "location",
    header: "Address",
  },
  {
    accessorKey: "createdAt",
    header: "CreatedAt",
  },
];
