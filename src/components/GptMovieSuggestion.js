import { useSelector } from "react-redux";
import MovieList from "./MoviesList";
const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  console.log(gpt, "gpt");
  const { movieResults, movieNames } = gpt;
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black bg-opacity-70 text-white">
      {movieNames.map((name, index) => (
        <MovieList key={index} title={name} movieList={movieResults[index].results} />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
