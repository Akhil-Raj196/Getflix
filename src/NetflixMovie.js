import { useEffect, useState } from "react";
import Slider from "react-slick";
import Navbar from "./Navbar";

const NetflixMovie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=3df15c9&s=robot&type=movie&page=1`
      );
      const data = await response.json();
      if (data.Search) setMovies(data.Search);
      else setMovies([]);
    } catch (err) {
      console.error("Error fetching movies:", err);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // default for large screens
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // screens <= 1024px
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768, // screens <= 768px
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480, // screens <= 480px (mobile)
        settings: { slidesToShow: 1 },
      },
    ],
  };


  // Custom Arrow Components
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 -right-5 z-10 cursor-pointer text-white text-3xl"
        onClick={onClick}
      >
        ➡
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 -left-5 z-10 cursor-pointer text-white text-3xl"
        onClick={onClick}
      >
        ⬅
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative px-6 py-24">
      <Navbar />
      <h1 className="text-4xl font-bold mb-6">Welcome to Netflix Movies 🎬</h1>

      {loading ? (
        <p className="text-gray-400">Loading movies...</p>
      ) : movies.length > 0 ? (
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.imdbID} className="px-1">
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition">
                {movie.Poster && movie.Poster !== "N/A" ? (
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <div className="w-full h-64 flex items-center justify-center bg-gray-700 text-gray-400">
                    No Image
                  </div>
                )}
                <div className="p-3">
                  <h2 className="text-lg font-semibold truncate">{movie.Title}</h2>
                  <p className="text-sm text-gray-400">{movie.Year || "N/A"}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-gray-400">No movies found.</p>
      )}
    </div>
  );
};

export default NetflixMovie;
