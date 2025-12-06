import type { Movie } from "@/lib/type";
import type { ColumnDef } from "@tanstack/react-table";

export const MovieColumn: ColumnDef<Movie>[] = [
  {
    accessorKey: "name",
    header: "Movie Name",
  },
  {
    header: "Image",
    cell: ({ row }) => {
      return (
        <img
          src={row.original.imageUrl}
          alt="movie image"
          className="size-12"
        />
      );
    },
  },
  {
    accessorKey: "duration",
    header: "Duration",
  },
  {
    accessorKey: "releaseDate",
    header: "ReleaseDate",
  },
  {
    accessorKey: "imdRating",
    header: "IMD Rating",
  },
];
