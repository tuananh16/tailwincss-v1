import MoviesData from "./MovieData";
import MovieCard from "./MovieCard";

const Index = () => {
  return (
    <div>
      <h3 className="border-b border-primary mt-12 mb-6 pb-4">Trending</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12 ">
        {MoviesData.map((movie, index) => {
          return <MovieCard key={index} movieIndex={index} />;
        })}
      </div>
      <div className="flex justify-center">
        <button className="btn hover:scale-25 transition ease-out duration-500">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Index;