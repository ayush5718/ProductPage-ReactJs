import React, { useContext, useState } from "react";
import { productContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(productContext);
  const [productData, setProductData] = useState({
    id: nanoid(),
    image: "",
    title: "",
    category: "",
    price: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      productData.title.trim().length < 5 ||
      productData.image.trim().length < 5 ||
      productData.category.trim().length < 5 ||
      productData.price.trim().length < 1 ||
      productData.description.trim().length < 5
    ) {
      alert("Must fill all the field");
    }

    console.log(productData);
    localStorage.setItem(
      "products",
      JSON.stringify([...products, productData])
    );
    setProducts([...products, productData]);
    console.log(products);

    const fromComponent = "Create"; // You can change this to whatever identifier you want

    // Set the state to navigate with
    const nextState = {
      from: fromComponent,
    };
    navigate("/", { state: nextState });
  };
  return (
    <>
      <form
        className="w-screen h-screen p-[5%] flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <h1 className="md:w-1/2 md:text-5xl mt-10 sm:mt-0 text-xl mb-5 font-semibold text-red-400">
          Add New Product
        </h1>

        <input
          type="url"
          placeholder="Image Link"
          name="imageUrl"
          className="md:w-1/2 w-full text-xl p-2 rounded bg-zinc-100 mb-5"
          onChange={(e) =>
            setProductData({ ...productData, image: e.target.value })
          }
          value={productData.image}
        />
        <input
          type="text"
          name="title"
          placeholder="title"
          className="md:w-1/2 w-full text-xl p-2 rounded bg-zinc-100 mb-5"
          onChange={(e) =>
            setProductData({ ...productData, title: e.target.value })
          }
          value={productData.title}
        />
        <div className=" md:w-[50%] w-full flex justify-between">
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="w-[48%] text-xl p-2 rounded bg-zinc-100 mb-5"
            onChange={(e) =>
              setProductData({ ...productData, category: e.target.value })
            }
            value={productData.category}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-[48%] text-xl p-2 rounded bg-zinc-100 mb-5"
            onChange={(e) =>
              setProductData({ ...productData, price: e.target.value })
            }
            value={productData.price}
          />
        </div>

        <textarea
          name="description"
          id=""
          rows="10"
          placeholder="Enter description of the products"
          className="md:w-1/2 w-full text-xl p-2 rounded bg-zinc-100 mb-5"
          onChange={(e) =>
            setProductData({ ...productData, description: e.target.value })
          }
          value={productData.description}
        ></textarea>
        <div className="md:w-1/2 w-full">
          <button className="border rounded px-5 py-3 border-blue-400  text-blue-400 hover:bg-blue-400 hover:text-white cursor-pointer">
            Add new Product
          </button>
        </div>
      </form>
    </>
  );
};

export default Create;
