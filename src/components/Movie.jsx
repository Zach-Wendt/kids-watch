import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import axios from "axios";

import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Movie = ({ item, fetchURL }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();
  
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movies, setMovies] = useState([]);


  const movieID = doc(db, "users", `${user?.email}`);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

//console.log fetchURL
  console.log(fetchURL)

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (item) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(item?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch(() => console.log("Temporarily Unavailable"));
    }
  };

  //console.log(item);
  console.log(item.title);

  console.log(handleClick)
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title}
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-black/80">
          <button
            onClick={() => handleClick(item)}
            className="bg-black/80 text-white w-full h-full opacity-40"
          >
            <p className="text-xs md:text-sm font-bold flex justify-center items-center h-1/4 text-center opacity-40">
              {trailerUrl ? "Close" : "Trailer"}
            </p>
          </button>
        </div>
        <p 
        onClick={saveShow}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export const handleError = function() {
  const html = `
  <div class="error">
      <div class="error__text">
          <p class="error__heading">Error:</p>
          <p class="error__description">Can't find trailer, please try another title!</p>
      </div>
  </div>
  `
  const body = document.querySelector('body');
  body.insertAdjacentHTML('afterbegin', html);
  const error = body.querySelector('.error');
  error.classList.add('fade-in');

  setTimeout(function() {
      // error.classList.remove('fade-in');
      error.classList.add('fade-out');
      setTimeout(function() {
          error.remove();
      }, 500)
  }, 2500)
}

export default Movie;
