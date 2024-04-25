import React, { useEffect, useState } from "react";
import movieApi from "../../api/movieApi";
import { Link } from "react-router-dom";

function MovieFeature(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movie2 = await movieApi.getAll();
        setData(movie2.movie);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };
    fetchMovie();
  }, []);
  console.log(data);

  // console.log(data.country?.id);
  return (
    <div className="mt-6">
      <div className="flex items-center max-w-full m-5">
        <div className="w-auto h-96 border border-gray-300 rounded-md object-cover ">
          <img
            className="w-full h-full object-fill "
            src={data.thumb_url}
            alt={data.slug}
          />
        </div>
        <div className="p-8">
          <h1 className="mb-3">{data.name}</h1>
          <Link to={`/xem-phim/${data.slug}`}>
            <button className="btn mb-3">Xem ngay</button>
          </Link>
          <p className="text-xl text-gray-600 mb-3">
            {/* Ngày cập nhật: {data.created} */}
          </p>
          <p className="text-xl text-gray-600 mb-3">
            Diễn viên:
            {data.actor?.join(", ")}
          </p>
          <p className="text-xl text-gray-600 mb-3">
            Số tập: {data.episode_current} / {data.episode_total}
          </p>
          <p className="text-xl text-gray-600 mb-3">
            Trạng thái:
            {data.episode_current == data.episode_total
              ? " Hoàn thành"
              : " Chưa hoàn thành"}
          </p>
          <p className="text-xl text-gray-600 mb-3">
            Năm sản xuất: {data.year}
          </p>
          <p className="text-xl text-gray-600 mb-3">
            Quốc gia:
            <>
              {data.country?.map((country) => {
                const countryName = country.name;
                return countryName;
              })}
            </>
          </p>
          <p className="text-xl text-gray-600 mb-3">
            Thể loại:{" "}
            {data.category?.map((category) => category.name).join(", ")}
          </p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold">{data.name}</h2>
        <p className="mt-2 text-xl">{data.content}</p>
      </div>
    </div>
  );
}

export default MovieFeature;
