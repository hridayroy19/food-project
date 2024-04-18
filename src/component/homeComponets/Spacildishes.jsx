/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft  } from "react-icons/fa6";
import Cards from "./Cards";


const SpecialDishes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/menu")
      .then((res) => res.json())
      .then((data) => {
        const specials = data.filter((item) => item.category === "popular");
        // console.log(specials)
        setRecipes(specials);
      });
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 my-20 relative">
       <div className='text-left'>
            <p className='text-red uppercase tracking-wide font-semibold text-lg'>Customer Favorites</p>
            <h2 className='text-4xl md:text-5xl md:leading-snug font-bold my-2'>Popular Catagories</h2>
        </div>
      <div  className="overflow-hidden grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10 space-x-5">
        {recipes?.map((item, i) => (
          <Cards item={item} key={i}/>
        ))}
      </div>
    </div>
  );
};

export default SpecialDishes;
