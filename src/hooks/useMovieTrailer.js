import { useDispatch } from "react-redux";
import { API_CONSTANTS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer=({movieId})=>{
    console.log(movieId, 'movie id')
    const dispatch=useDispatch()
    const getMovieVideo = async () => {
        console.log(movieId, 'inside function')
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_CONSTANTS
      );
  
      const json = await data.json();
  
  
      const trailerFilterVideo = json.results.filter(
        (video) => video.type == "Trailer"
      );
      const trailerVideo = trailerFilterVideo.length
        ? trailerFilterVideo[0]
        : json.results[0];
  
        dispatch(addTrailerVideo(trailerVideo))
    };
    useEffect(() => {
      getMovieVideo();
    }, []);
}

export default useMovieTrailer;