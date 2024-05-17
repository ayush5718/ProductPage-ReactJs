import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../utils/Context";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useContext(productContext);
  const filterDataWithId = products.filter((item) => item.id == id);
  console.log(filterDataWithId);

  const handleNavigate = () => {
    navigate(-1);
  };
  const deleteProductHandler = () => {
    const filteredProduct = products.filter((product) => product.id != id);
    setProducts(filteredProduct);
    localStorage.setItem("products", JSON.stringify(filteredProduct));
    navigate("/");
  };
  return (
    <>
      <div className="flex sm:flex-row flex-col md:p-[8%] md:w-[80%]  h-full m-auto  justify-center items-center gap-20">
        <img
          className="md:w-[30%] w-[50%] object-contain"
          src={filterDataWithId[0].image}
          alt=""
        />
        <div className="flex flex-col gap-2 p-12    w-full ">
          <h1 className="md:text-4xl">{filterDataWithId[0].title}</h1>
          <h2 className="text-zinc-400">{filterDataWithId[0].category}</h2>
          <h2>₹ {filterDataWithId[0].price}</h2>
          <h2>{filterDataWithId[0].description}</h2>
          <div className="mt-4">
            <span className="px-5 py-2 bg-blue-600 hover:bg-blue-400 transition-all mr-2 text-white cursor-pointer">
              Edit
            </span>
            <button
              onClick={deleteProductHandler}
              className="px-5 py-2 bg-red-600 hover:bg-red-400 transition-all mr-2 text-white cursor-pointer"
            >
              Delete
            </button>
          </div>
          <button
            onClick={handleNavigate}
            className="bg-red-300 px-4 py-2 w-32 mt-5"
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
}

export default Details;
