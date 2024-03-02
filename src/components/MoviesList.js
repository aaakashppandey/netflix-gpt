import MovieCards from "./MovieCards";

const MovieList = ({ title, movieList }) => {
  console.log(title, movieList, "list");
  if (movieList == null) return null;
  return (
    <div className="p-4 text-white">
      <h1 className="text-3xl py-6">{title}</h1>

      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movieList &&
            movieList.map((movie, index) => {
              return <MovieCards key={index} poster_id={movie.poster_path} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
