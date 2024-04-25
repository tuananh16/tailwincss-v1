import "./App.css";
import Nav from "./components/Nav/index";
// import AuthButtons from "./components/AuthButtons/index";
import Header from "./components/Header/index";
import Trending from "./components/Trending/index";
import { useEffect, useState } from "react";
import trendingApi from "./api/trendingApi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieFeature from "./components/Moive";
import WatchMovie from "./components/Moive/watchMovie";


function App() {
  const [movieTrending, setMovieTrending] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const params = {
          _limit: 10,
        };
        const trendingMovies = (await trendingApi.getAll(params)).items;

        // console.log(trendingMovies.items);
        setMovieTrending(trendingMovies);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
        // Handle error (e.g., show error message)
      }
    };
    fetchMovie();
  }, []);
  // console.log(movieTrending);

  return (
    <BrowserRouter>
      <div className="grid md:grid-cols-5">
        <Nav />
        <main className="px-12 py-6 md:col-span-4 bg-cyan-50">
          {/* <AuthButtons /> */}
          <Header />
          <Routes>
            <Route path="/" element={<Trending MoviesData={movieTrending} />} />
            <Route path="/phim/*" element={<MovieFeature />} />
            <Route path="/xem-phim/*" element={<WatchMovie />} />

            {/* <Route path={`/phim/${slug}`} element={<MovieFeature />} /> */}

            {/* <Trending MoviesData={movieTrending} /> */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
