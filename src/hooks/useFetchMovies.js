import { useDispatch } from "react-redux";
import { API_CONSTANTS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useFetchMovies=()=>{
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_CONSTANTS
      );
      const json = await data.json();
      console.log(json);
      dispatch(addNowPlayingMovies(json.results))
    };
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
}

export default useFetchMovies;