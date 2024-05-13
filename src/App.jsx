import React from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./components/Details";

function App() {
  const { search, pathname } = useLocation();
  console.log("search: ", search);
  console.log("path Name: ", pathname);
  return (
    <>
      {(pathname != "/" || search.length > 0) && (
        <Link
          to="/"
          className="bg-red-200 px-4 py-2 absolute top-[2%] left-[18%]"
        >
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
