import React from 'react'
import { Sparkle } from "lucide-react";
import { MoveRight } from "lucide-react";

const navbar = () => {
  return (
    <div>
      <div className="">
        <div className="bg-gray-400/30 flex justify-between rounded-full text-white  py-3 text-lg ">
          {" "}
          <h2 className="flex pl-4 items-center justify-center font-semibold gap-2 hover:cursor-crosshair">
            <span className="bg-black rounded-full p-1 ">
              <Sparkle />
            </span>
            Medtronic
          </h2>
          <div className="flex justify-between gap-9 ">
            <h2 className="hover:underline duration-300 ease-in-out hover:text-red-500 cursor-pointer">
              Home
            </h2>
            <h2 className="hover:underline duration-300 ease-in-out hover:text-red-500 cursor-pointer">
              Features
            </h2>
            <h2 className="hover:underline duration-300 ease-in-out hover:text-red-500 cursor-pointer">
              About us
            </h2>
            <h2 className="hover:underline duration-300 ease-in-out hover:text-red-500 cursor-pointer">
              Trainers
            </h2>
            <h2 className="hover:underline duration-300 ease-in-out hover:text-red-500 cursor-pointer">
              Testimonials
            </h2>
          </div>
          <div className="flex gap-5 pr-7 font-semibold">
            <button className=" hover:bg-red-500 duration-200 hover:scale-110 hover:text-white rounded-full px-5 cursor-pointer">
              Login
            </button>
            <button className="flex justify-center items-center bg-white rounded-full text-black px-2 py-1 hover:scale-110 duration-200 hover:bg-red-500 hover:text-white">
              Sign up <MoveRight size={16} strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default navbar
