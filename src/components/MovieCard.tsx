import { Star } from "lucide-react";

export interface MovieCardProps {
  imageUrl: string;
  title: string;
  imdRating: number;
  description: string;
}
const MovieCard = ({
  imageUrl,
  title,
  imdRating,
  description,
}: MovieCardProps) => {
  return (
    <div className="w-[300px] h-[400px] rounded-md shadow bg-white ">
      {/* image */}
      <div>
        <img
          src={imageUrl}
          alt="movie image"
          className="w-full h-[200px] object-cover rounded-tl-md rounded-tr-md"
        />
      </div>

      {/* title */}

      <h1 className="text-3xl text-[#dc354b] text-center font-semibold">
        {title}
      </h1>
      {/* description */}

      <div className="p-2">
        <span className="font-bold">(2025)</span>
        <br />
        <span className="text-muted-foreground">{description}</span>
      </div>

      {/* imd rating */}

      <div className="flex items-center px-2">
        <span className="text-yellow-500 font-extrabold w-full">
          IMD Rating
        </span>
        <span className="flex text-2xl text-yellow-600 items-center">
          {imdRating} <Star className="text-yellow-400" />
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
