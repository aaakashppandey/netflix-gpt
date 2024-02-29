import { moviePoster } from "../utils/constant";

const MovieCards=({poster_id})=>{
return (
    <div className="w-48 pr-4">
        <img src={moviePoster + poster_id}  alt="Movie poster"/>
    </div>
)
}

export default MovieCards;