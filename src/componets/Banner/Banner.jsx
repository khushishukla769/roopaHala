import React, { useState, useEffect, useContext } from "react";
import { API_KEY, imageUrl } from "../../Constants/Constance";
import axios from "../../axios";
import { PopUpContext } from "../../Context/moviePopUpContext";
import { Fade } from "react-reveal";
import StarRatings from "react-star-ratings";
import MoviePopUp from "../PopUp/MoviePopUp";
import usePlayMovie from "../../CustomHooks/usePlayMovie";
import { FaPlayCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function Banner(props) {
  const { showModal, setShowModal } = useContext(PopUpContext);
  const { playMovie } = usePlayMovie();

  const [movie, setMovie] = useState([]);
  const [moviePopupInfo, setMoviePopupInfo] = useState({});
  const [urlId, setUrlId] = useState("");

  function getWindowSize() {
    const { innerWidth: width } = window;
    return {
      width
    }
  }

  const [windowSeize, setWindowSeize] = useState(getWindowSize())


  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovie(
        response.data.results.sort(function (a, b) {
          return 0.5 - Math.random();
        })[0]
      );
      console.log(movie);
    });

    function handleWindowResize() {
      setWindowSeize(getWindowSize())
    }

    window.addEventListener('resize', handleWindowResize)

  }, []);

  const handleMoviePopup = (movieInfo) => {
    setMoviePopupInfo(movieInfo);
    setShowModal(true);

    axios
      .get(`/movie/${movieInfo.id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((responce) => {
        console.log(responce.data);
        if (responce.data.results.length !== 0) {
          setUrlId(responce.data.results[0]);
        } else {
          console.log("Array Emptey");
        }
      });
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(90deg, hsl(0deg 0% 7% / 91%) 0%, hsl(0deg 0% 0% / 0%) 35%, hsl(220deg 26% 44% / 0%) 100%), url(${movie
            ? imageUrl + movie.backdrop_path
            : ""
            })`,
        }}
        className="h-[50rem] md:h-[55rem] 3xl:h-[63rem] bg-cover bg-center object-contain grid items-center"
      >
        <div className="ml-36 mr-2 sm:mr-0 sm:ml-36 mt-[75%] sm:mt-60">
          <Fade bottom>
            {movie.title || movie.name ? (
              <>
                <h1 className="text-white text-3xl font-semibold text-center mb-5 py-2 sm:text-left sm:text-5xl pl-3 md:text-6xl lg:w-2/3 xl:w-1/2 sm:font-bold drop-shadow-lg">
                  {movie.title || movie.name}
                </h1>
              </>
            ) : (
              <div className="grid justify-center sm:justify-start">
                <div className="animate-pulse w-72 ml-4 sm:ml-0 sm:w-96 py-5 mb-7 xl:py-7 xl:w-45rem bg-neutral-900 rounded-md"></div>
              </div>
            )}


            <div className="flex">
              <div className=" hidden sm:flex justify-center sm:justify-start ml-2">
                {movie.vote_average ? (
                  <h1 className="flex text-white text-xl drop-shadow-lg 2xl:text-lg">
                    <div className="-mt-1">
                      <StarRatings
                        rating={movie.vote_average / 2}
                        starRatedColor="red"
                        numberOfStars={5}
                        name="rating"
                        starDimension="1.1rem"
                        starSpacing="0.2rem"
                      />
                    </div>
                  </h1>
                ) : null}
              </div>
              <div className="ml-2 hidden sm:flex justify-center sm:justify-start">
                {movie.release_date || movie.first_air_date ? (
                  <h1 className="flex text-white text-base font-bold drop-shadow-lg">
                    {movie.release_date || movie.first_air_date}
                  </h1>
                ) : null}
              </div>
              {movie.id && (
                <h1 className="hidden sm:flex text-white px-2 bg-[#1e1e1e89] border-2 border-stone-600 rounded ml-2">
                  HD
                </h1>
              )}
            </div>

            <div className="mt-3 mb-4">
              {movie.overview ? (
                <>
                  <h1 className="text-white text-xl drop-shadow-xl  text-center line-clamp-2 sm:line-clamp-3 sm:text-left w-full md:w-4/5 lg:w-8/12/2 lg:text-xl xl:w-5/12 2xl:text-2xl">
                    {movie.overview}
                  </h1>
                </>
              ) : (
                <>
                  <div className="grid justify-center md:justify-start">
                    <div className="animate-pulse w-80 sm:w-40rem md:w-45rem py-1 mb-3 xl:w-70rem xl:py-2 bg-neutral-900 rounded-md"></div>
                    <div className="animate-pulse w-80 sm:w-40rem md:w-45rem py-1 mb-3 xl:w-70rem xl:py-2 bg-neutral-900 rounded-md"></div>
                    <div className="animate-pulse w-80 sm:w-40rem md:w-45rem py-1 mb-7 xl:w-70rem xl:py-2 bg-neutral-900 rounded-md"></div>
                  </div>
                </>
              )}
            </div>

            <div className="flex justify-center sm:justify-start">
              {movie.id ? (
                <>
                  <button
                    onClick={() => playMovie(movie)}
                    className="bg-greyButton h-14 w-[141px] transition duration-500 ease-in-out shadow-2xl flex items-center gap-2 mb-3 mr-3
                       text-base sm:text-xl font-semibold text-black px-6 sm:px-8 rounded-xl font-museo"
                  >
                    <FaPlayCircle className="w-5 h-5" />
                    Play
                  </button>

                  <button
                    onClick={() => handleMoviePopup(movie)}
                    className="bg-lightGray flex items-center shadow-2xl mb-3 mr-3 text-base sm:text-xl font-semibold text-white hover:bg-white
                     hover:text-black transition duration-500 ease-in-out py-2 px-8 rounded-xl font-museo"
                  >
                    More Info
                  </button>
                  <button
                    className="bg-lightGray flex items-center shadow-2xl mb-3 text-base sm:text-xl font-semibold text-white hover:bg-white
                    hover:text-black transition duration-500 ease-in-out py-2 px-8 rounded-xl"
                  >
                    <FaPlus className="h-5 w-5" />
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="bg-greyButton h-14 w-[141px] transition duration-500 ease-in-out shadow-2xl flex items-center gap-2 mb-3 mr-3
                       text-base sm:text-xl font-semibold text-black px-6 sm:px-8 rounded-xl font-museo"
                  >
                    <FaPlayCircle className="w-5 h-5" />
                    Play
                  </button>
                  <button className="bg-lightGray flex items-center shadow-2xl mb-3 mr-3 text-base sm:text-xl font-semibold text-white hover:bg-white
                     hover:text-black transition duration-500 ease-in-out py-2 px-8 rounded-xl font-museo"
                  >
                    More Info
                  </button>
                  <button
                    className="bg-lightGray flex items-center shadow-2xl mb-3 text-base sm:text-xl font-semibold text-white hover:bg-white
                    hover:text-black transition duration-500 ease-in-out py-2 px-8 rounded-xl"
                  >
                    <FaPlus className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
          </Fade>
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(hsl(0deg 0% 0% / 0%), hsl(0deg 0% 0% / 38%), hsl(0deg 0% 7%))",
          }}
          className="h-80 mt-auto "
        ></div>
      </div>

      {showModal ? <MoviePopUp data1={moviePopupInfo} data2={urlId} /> : null}
    </>
  );
}

export default Banner;
