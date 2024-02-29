import Header from "./Header";
import useFetchMovies from "../hooks/useFetchMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from "../hooks/useTopratedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptComponent = useSelector((store) => store.gpt.showGptSearch);
  useFetchMovies();
  usePopularMovies();
  useTopratedMovies();
  return (
    <div>
      <Header />
      {showGptComponent ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    
    </div>
  );
};

export default Browse;
