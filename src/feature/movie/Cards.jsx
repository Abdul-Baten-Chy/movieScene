import { getAllMovies } from "@/data/data";
import Card from "@/feature/movie/Card";

function Cards() {
  const movies = getAllMovies();
  return (
    <div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
