import React from 'react';
import Single from "../assets/single.png";
import Double from '../assets/double.png'
import Triple from "../assets/triple.png";

const Cards = () => {
    return (
      <div className="bg-white w-full py-[10rem] px-4">
        <div className="max-w-[1240px] m-auto grid md:grid-cols-3 grid-col gap-8">
          <div className="w-full md:0 mt-[80px] shadow-xl flex flex-col hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Single}
              alt=""
            />
            <h2 className="text-2xl font-bold text-center py-8">Single user</h2>
            <p className="text-4xl font-bold text-center">$149</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500 GB storage</p>
              <p className="py-2 border-b mx-8 mt-8">1 garanted user</p>
              <p className="py-2 border-b mx-8 mt-8">Send up to 2 GB</p>
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Start Trial
            </button>
          </div>
          <div className="w-full md:0 mt-[80px] bg-gray-100 shadow-xl md:my-[8px]  flex flex-col hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] "
              src={Double}
              alt=""
            />
            <h2 className="text-2xl font-bold text-center py-8">Single user</h2>
            <p className="text-4xl font-bold text-center">$149</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500 GB storage</p>
              <p className="py-2 border-b mx-8 mt-8">1 garanted user</p>
              <p className="py-2 border-b mx-8 mt-8">Send up to 2 GB</p>
            </div>
            <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Start Trial
            </button>
          </div>
          <div className="w-full shadow-xl md:0 mt-[80px] flex flex-col hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Triple}
              alt=""
            />
            <h2 className="text-2xl font-bold text-center py-8">Single user</h2>
            <p className="text-4xl font-bold text-center">$149</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500 GB storage</p>
              <p className="py-2 border-b mx-8 mt-8">1 garanted user</p>
              <p className="py-2 border-b mx-8 mt-8">Send up to 2 GB</p>
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    );
}

export default Cards;
