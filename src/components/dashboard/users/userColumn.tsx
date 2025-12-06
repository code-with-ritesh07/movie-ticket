import type { User } from "@/lib/type";
import type { ColumnDef } from "@tanstack/react-table";

export const UserColumn: ColumnDef<User>[] = [
  {
    accessorKey: "fullName",
    header: "User Name",
  },
  {
    accessorKey: "email",
    header: "Address",
  },
  {
    accessorKey: "mobileNumber",
    header: "Phone Number #",
  },
];
