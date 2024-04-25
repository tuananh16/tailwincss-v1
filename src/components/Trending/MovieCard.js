import { BiTime } from "react-icons/bi";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { name, slug, poster_url, year } = movie;

  return (
    <Link to={`/phim/${slug}`}>
      <div className="card ml-1 mr-1">
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "300px",
            overflow: "hidden",
          }}
        >
          <img
            src={poster_url}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt={name}
          />
        </div>
        <div className="p-4 text-white">
          <h4 className="movie-title truncate">{name}</h4>
          <p className="movie-title truncate">{slug}</p>
        </div>
        <div className="badge flex justify-end items-center text-white p-2">
          <BiTime />
          <p className="ml-2">{year}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
