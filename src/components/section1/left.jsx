import React from 'react'
import { MoveRight } from "lucide-react";
import { CircleDot } from "lucide-react";

const left = () => {
  return (
    <div className="w-2/3 h-150  lg:flex flex-col justify-between">
      <div className="mt-3">
        <h2 className="text-white text-xl font-sans">Daily Fitness Guide</h2>
        <h1 className="text-white text-6xl mt-4 font-semibold leading-20">
          Meditation changes <br />
          Your Lifestyle
        </h1>
        <button className="bg-white flex items-center py-3 px-4 mt-12 rounded-full gap-2 font-semibold active:bg-red-800 hover:bg-red-500 duration-200 hover:scale-110 hover:text-white">
          Get in touch{" "}
          <span className="bg-gray-400 rounded-full p-1 ">
            <MoveRight size={25} strokeWidth={1.5} />
          </span>
        </button>
      </div>
      <div className="flex items-center mb-6">
        <h2 className="text-white font-semibold text-xl mr-6">Popular tags</h2>
        <button className="flex bg-gray-500 rounded-full items-center px-4 py-3 font-semibold text-white gap-2  hover:bg-red-500 duration-200 hover:scale-110 hover:text-white active:bg-red-800 cursor-pointer  ">
          {" "}
          <span>
            <CircleDot size={16} strokeWidth={1.25} />
          </span>
          New Fitness
        </button>
        <button className="flex bg-gray-500 rounded-full items-center px-4 py-3 font-semibold text-white gap-2 -ml-2  hover:bg-red-500 duration-200 hover:scale-110 hover:text-white
        active:bg-red-800 cursor-pointer">
          {" "}
          <span>
            <CircleDot size={16} strokeWidth={1.25} />
          </span>
          Health Goal
        </button>
        <button className="flex bg-gray-500 rounded-full items-center px-4 py-3 font-semibold text-white gap-2 -ml-2  hover:bg-red-500 duration-200 hover:scale-110 hover:text-white
        active:bg-red-800 cursor-pointer">
          {" "}
          <span>
            <CircleDot size={16} strokeWidth={1.25} />
          </span>
          Fit Goal
        </button>
      </div>
    </div>
  );
}

export default left
