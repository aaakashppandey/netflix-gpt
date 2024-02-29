import { background_url } from "../utils/constant";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch=()=>{
return (
    <div>
        <div className="absolute -z-10">
        <img
          src={background_url}
          alt="background"
        />
      </div>
        <GptSearchBar />
        <GptMovieSuggestion />
    </div>
)
}

export default GptSearch;