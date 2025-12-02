import MovieCard from "./components/MovieCard";
import { movies } from "./lib/constants";

export const MovieSection = () => {
  return (
    <section className="bg-[#99c5ea]/30 h-full flex-1">
      <div className="text-center mt-4">
        <h1 className="text-[#dc354b] text-2xl md:text-4xl">
          Recommended Movies
        </h1>
      </div>
      <br />
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {movies.map((movie) => (
          <MovieCard key={movie.imageUrl} {...movie} />
        ))}
      </div>
    </section>
  );
};
