import { DataTable } from "@/components/ui/data-table";
import { UserColumn } from "./userColumn";
import { dummyUsers } from "@/lib/constants";

export const DashboardUserPage = () => {
  return (
    <div className="space-y-6 p-3">
      <div className="flex justify-between items-center bg-white rounded-2xl p-4">
        <h1 className="text-indigo-900 font-bold text-xl">
          Users({dummyUsers.length})
        </h1>
      </div>
      <DataTable columns={UserColumn} data={dummyUsers} />
    </div>
  );
};
