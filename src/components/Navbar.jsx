import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../utils/Context";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);
  const [navOpen, setNavOpen] = useState(false);
  const [products] = useContext(productContext);

  // in .reduce we pass two parameter first one is accumulator and second value is the current value in accumulator we keep a value
  let distinctCategory = products.reduce(
    (acc, cv) => [...acc, cv.category],
    []
  );

  distinctCategory = [...new Set(distinctCategory)]; // this is to filter out the unique element collection

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.6)`;
  };

  const backColor = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},100)`;
  };

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
      if (window.innerWidth >= 600) {
        setNavOpen(true); // On large screens, always keep the navbar open
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run this effect only once

  return (
    <>
      {isSmallScreen ? (
        <>
          <span onClick={handleNavToggle}>
            <GiHamburgerMenu />
          </span>
          {navOpen && (
            <nav className="w-screen  sm:relative h-full bg-zinc-100 flex flex-col items-center pt-5  ">
              <Link
                to="/create"
                className="px-5 py-3 bg-blue-500 mb-3 text-white"
              >
                Create
              </Link>

              <h1 className="w-[80%] font-bold">Categories</h1>
              <hr className="w-[80%] border-blue-800" />
              <div className=" w-[80%] mt-4">
                {distinctCategory.map((item, index) => (
                  <Link
                    key={index}
                    to={`/?category=${item}`}
                    className={` mb-3 flex gap-2 items-center p-2 bg-zinc-600 text-white`}
                  >
                    <span
                      style={{ backgroundColor: color() }}
                      className={`w-[15px]  h-[15px]  rounded-full bg-blue-200 block`}
                    ></span>
                    {item}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </>
      ) : (
        <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5  ">
          <Link to="/create" className="px-5 py-3 bg-blue-500 mb-3 text-white">
            {" "}
            Create
          </Link>

          <h1 className="w-[80%] font-bold">Categories</h1>
          <hr className="w-[80%] border-blue-800" />
          <div className=" w-[80%] mt-4">
            {distinctCategory.map((item, index) => (
              <Link
                key={index}
                to={`/?category=${item}`}
                className={` mb-3 flex gap-2 items-center p-2 bg-zinc-600 text-white`}
              >
                <span
                  style={{ backgroundColor: color() }}
                  className={`w-[15px]  h-[15px]  rounded-full bg-blue-200 block`}
                ></span>
                {item}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
