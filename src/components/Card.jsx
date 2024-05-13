import React from "react";
import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <>
      <Link
        to={`/details/${data.id}`}
        className="card  md:w-[18%]  md:min-w-0 min-w-full p-3 m-2 h-[35vh] bg-white flex flex-col  justify-center items-center"
      >
        <div
          className="img hover:scale-105 duration-200 w-full h-full bg-no-repeat bg-contain bg-center"
          style={{
            backgroundImage: `url(${data?.image})`,
          }}
        ></div>

        <h1 className="text-xs md:text-lg">{data?.title}.</h1>
      </Link>
    </>
  );
}

export default Card;
