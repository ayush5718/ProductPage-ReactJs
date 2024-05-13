import React, { createContext, useEffect, useState } from "react";
import Axios from "./Axios";
export const productContext = createContext();

const Context = (props) => {
  const [products, setProducts] = useState([]);

  const getproducts = async () => {
    try {
      const { data } = await Axios("/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);
  return (
    <productContext.Provider value={[products, setProducts]}>
      {props.children}
    </productContext.Provider>
  );
};
export default Context;
