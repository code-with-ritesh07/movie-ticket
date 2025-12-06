import { dummyMovies, movies } from "@/lib/constants";
import { RedirectBtn } from "../../ActionBtn/RedirectBtn";
import { DataTable } from "../../ui/data-table";
import { MovieColumn } from "./movieColumn";

export const DashboardMoviePage = () => {
  return (
    <div className="space-y-6 p-3">
      <div className="flex justify-between items-center bg-white rounded-2xl p-4">
        <h1 className="text-indigo-900 font-bold text-xl">
          Movies ({movies.length})
        </h1>
        <RedirectBtn
          url="/dashboard/movie/create/new"
          className="bg-indigo-500 hover:bg-indigo-500/60"
        >
          Add Movie
        </RedirectBtn>
      </div>
      <DataTable columns={MovieColumn} data={dummyMovies} />
    </div>
  );
};
