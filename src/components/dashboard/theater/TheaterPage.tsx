import { RedirectBtn } from "@/components/ActionBtn/RedirectBtn";
import { DataTable } from "@/components/ui/data-table";
import { dummyTheaters } from "@/lib/constants";
import { TheaterColumn } from "./theaterColumn";

export const DashboardTheaterPage = () => {
  return (
    <div className="space-y-6 p-3">
      <div className="flex justify-between items-center bg-white rounded-2xl p-4">
        <h1 className="text-indigo-900 font-bold text-xl">
          Theater ({dummyTheaters.length})
        </h1>
        <RedirectBtn
          url="/dashboard/theater/create/new"
          className="bg-indigo-500 hover:bg-indigo-500/60"
        >
          Add Theater
        </RedirectBtn>
      </div>
      <DataTable columns={TheaterColumn} data={dummyTheaters} />
    </div>
  );
};
