import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
    return (
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#00df9a] text-xl font-bold p-2">
            GROW WITH DATA ANALILYTICS
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            Grow with data.
          </h1>
          <div className="flex items-center justify-center">
            <p className="md:text-5xl sm:text-4xl text-xl px-2 font-bold">
              Fast, flexible financing for
            </p>
            <Typed
              className="md:text-5xl sm:text-4xl px-2 md:pl-4 pl-2 text-gray-500 text-xl font-bold"
              strings={["BTS", "BTB", "SASS"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-500 mt-1">
            Monitor your data analitics to increase revenue for BTB, BTC & SASS
            platform
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[#00df9864]">
            Get started
          </button>
        </div>
      </div>
    );
}

export default Hero;
