import React from 'react'
import { Omega } from 'lucide-react'
import { Component } from 'lucide-react';
import { Pi } from 'lucide-react';
const left = () => {
  return (
    <div className="text-white py-6 pl-22 w-3/5">
      <h1 className="text-7xl font-semibold mb-20">
        Your Life for Greater <br />
        Self Of Yoga
      </h1>
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-5">
          <div className="bg-pink-300 p-3 rounded-2xl text-black">
            <Omega size={20} strokeWidth={4} />
          </div>
          <div className="text-xl w-140  pb-5 border-b-2 border-gray-400/30">
            {" "}
            <h2 className="font-semibold">Expert Instructors</h2>
            <p className="font-light text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              dolorum eos veritatis fugit assumenda! Voluptatibus quo iusto
              magni adipisci quod.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 ">
          <div className="bg-green-300 p-3 rounded-2xl text-black">
            <Component size={20} strokeWidth={4} />
          </div>
          <div className="text-xl w-140  pb-5 border-b-2 border-gray-400/30 ">
            {" "}
            <h2 className="font-semibold">Expert Instructors</h2>
            <p className="font-light text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              dolorum eos veritatis fugit assumenda! Voluptatibus quo iusto
              magni adipisci quod.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="bg-cyan-300 p-3 rounded-2xl text-black">
            <Pi size={20} strokeWidth={4} />
          </div>
          <div className="text-xl w-140">
            {" "}
            <h2 className="font-semibold">Expert Instructors</h2>
            <p className="font-light text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              dolorum eos veritatis fugit assumenda! Voluptatibus quo iusto
              magni adipisci quod.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default left
