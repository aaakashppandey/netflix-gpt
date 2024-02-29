import { useSelector } from "react-redux";
import MovieList from "./MoviesList";

const SecondaryContainer = () => {
  const movieList = useSelector((store) => store.movies?.nowPlayingMovies);
  const topRated = useSelector((store) => store.movies?.topRatedMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);

  return (
    <div className="bg-black">
      <div className="-mt-60 relative z-20">
        <MovieList title={"Now Playing"} movieList={movieList} />
        <MovieList title={"Popular"} movieList={popularMovies} />
        <MovieList title={"Top Rated"} movieList={topRated} />
        <MovieList title={"Trending"} movieList={movieList} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
