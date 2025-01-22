import React from "react";


const Products = ({ props }) => {
  const { title, price, description, image, category, rating } = props;



//   const handleclick=()=>{

//   }
  return (
    <div className=" section bg-blue-200 m-5 p-5 w-1/5  ">
      <h1 className="font-bold">{title}</h1>

<div className="flex justify-center m-2 p-2">

<img src={image} alt="" width="100px" className="" />
</div>
      
      {/* <h1>{price}</h1>

      <h1>{description}</h1>
      <h1>{category}</h1>
      <h1>{rating?.rate}</h1>
      <h1>{rating?.count}</h1> */}

      <button className="bg-blue-800 m-2 p-2 border border-spacing-2 text-white "  >
        View details
      </button>
    </div>
  );
};

export default Products;
