import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analitics = () => {
  return (
    <div className="w-full py-16 px-4 bg-white ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
            perferendis? Quisquam in fugiat adipisci, neque rerum tempore iste
            aliquam! Expedita esse culpa sed. Nesciunt quam provident vel
            commodi laborum rerum!
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Analitics;
