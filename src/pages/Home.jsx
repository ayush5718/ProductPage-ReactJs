import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";
import axios from "../utils/Axios";
import { productContext } from "../utils/Context";
import Loading from "../components/Loading";

function Home() {
  const location = useLocation();
  const [products] = useContext(productContext);
  // const products = JSON.parse(localStorage.getItem("products"));
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setFilteredProducts] = useState(null);

  // const getProductsByCategory = async () => {
  //   try {
  //     const { data } = await axios.get(`products/category/${category}`);
  //     setFilteredProducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (!filteredProducts || category == "undefined") {
      setFilteredProducts(products);
    }
    if (category != "undefined") {
      // getProductsByCategory();
      setFilteredProducts(products.filter((e) => e.category == category));
    }
  }, [category, products]);

  return products ? (
    <>
      <div className="w-screen h-screen flex">
        <Navbar />
        <div className=" w-[85%] h-full md:bg-zinc-200  flex flex-wrap  md:p-12 p-4 gap-2 md:overflow-x-hidden md:overflow-y-auto ">
          {filteredProducts &&
            filteredProducts.map((item, index) => (
              <Card key={index} data={item} />
            ))}
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
