import React from 'react'
import { Star } from 'lucide-react';

const right = () => {
  return (
    <div className="w-1/3 h-150 flex items-end">
      <div className="bg-gray-600/30 w-100 h-80  mb-6 rounded-3xl hover:bg-gray-600/20 duration-200 hover:scale-105  cursor-pointer ">
        <div className="p-5 flex items-center gap-4 ">
          <div className="flex ">
            <div className="w-15 h-15 rounded-full overflow-hidden object-contain border-2 border-white">
              <img
                src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3N8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
            <div className="w-15 h-15 rounded-full overflow-hidden object-contain border-2 border-white -ml-3">
              <img
                src="https://plus.unsplash.com/premium_photo-1731499365772-15a4edfe53c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div className="w-15 h-15 rounded-full overflow-hidden object-contain border-2 border-white -ml-3">
              <img
                src="https://images.unsplash.com/photo-1619539465730-fea9ebf950f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
          </div>
          <button className="bg-gray-500/40 rounded-full px-5 py-3 text-white  hover:bg-red-500 duration-200 hover:scale-110 hover:text-white rounded-full px-5 cursor-pointer">
            Plus 26k
          </button>
          <h2 className="text-white underline">Trusted!</h2>
        </div>
        <div className="p-5">
          {" "}
          <h3 className="text-white font-semibold pb-5 border-b-2 border-gray-300/20">
            The perfect organizer <br />
            and developer for dream agency{" "}
          </h3>
        </div>
        <div className="flex px-5">
          <h1 className="flex text-7xl font-bold text-white">
            4.9{" "}
            <span className="text-white">
              <Star size={16} strokeWidth={2} />
            </span>
          </h1>
          <h2 className="text-white flex items-end ml-40">[RATING]</h2>
        </div>
      </div>
    </div>
  );
}

export default right
