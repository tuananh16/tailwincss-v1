// import MoviesData from "./MovieData";
import MovieCard from "./MovieCard";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const Index = ({MoviesData}) => {
  return (
    <div>
      <h3 className="border-b border-primary mt-12 mb-6 pb-4">Trending</h3>
      <Slide slidesToScroll={3} slidesToShow={4} indicators={false}>
        {MoviesData?.map((movie, index) => (
          <MovieCard key={index} movie={movie}   />
        ))}
      </Slide>

      <div className="flex justify-center mt-8">
        <button className="btn hover:scale-105 transition ease-out duration-500">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Index;
