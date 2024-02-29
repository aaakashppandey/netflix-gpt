import { useDispatch } from "react-redux";
import { API_CONSTANTS } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopratedMovies=()=>{
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_CONSTANTS
      );
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results))
    };
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
}

export default useTopratedMovies;