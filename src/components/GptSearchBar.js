import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_CONSTANTS } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSearchSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const suggestion = useRef(null);

  const handleMovieSuggestion = async () => {
    console.log(suggestion.current.value);
    //Make an API call to get open results
    let gptQuery =
      "Act as a movie recommendation system an suggest movies for the query : " +
      suggestion.current.value +
      ". Only give results for 5 movie names, comma separated as shown in the example: Gadar, Don, Hulchul, Dhoom, Dhoom2";
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const moviesArray = chatCompletion.choices[0].message.content.split(", ");
    const searchMovies = moviesArray.map((movie) => fetchMovieTmdb(movie));
    const tmdbmovies = await Promise.all(searchMovies);
    dispatch(
      addGptMovieResult({ movieNames: moviesArray, movieResults: tmdbmovies })
    );
    // For each movie call tmdb search api
  };

  const fetchMovieTmdb = async (name) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
      API_CONSTANTS
    );

    const json = await data.json();
    // console.log(json);
    return json;
  };

  return (
    <div className="pt-[10%] flex  justify-center ">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={suggestion}
          type="text"
          className="p-2 m-2 rounded-md col-span-9"
          placeholder={lang[langKey].placeholder}
        />
        <button
          onClick={handleMovieSuggestion}
          type="submit"
          className="py-2 px-4 m-4 bg-red-700 rounded-md col-span-3 text-white"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
