import React from "react";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  const { title, price, description, image, category, rating } = products;

  return (
    <div className=" section bg-blue-200 m-5 p-5 w-1/5  ">
      <h1 className="font-bold">{title}</h1>

      <div className="flex justify-center m-2 p-2">
        <img src={image} alt="" width="100px" className="" />
      </div>


      <Link to={`/product/${products.id}`}>

        <button className="bg-blue-800 m-2 p-2 border border-spacing-2 text-white rounded-md ">
          View details
        </button>
       </Link> 
    </div>
  );
};

export default Products;
