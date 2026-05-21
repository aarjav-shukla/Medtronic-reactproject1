import React from 'react'
import { Activity } from 'lucide-react';
import { CirclePlay } from 'lucide-react';
const right = () => {
  return (
    <div className=" w-2/5 flex items-center justify-center pr-8">
      <div className="bg-[url(https://images.unsplash.com/photo-1687180948607-9ba1dd045e10?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover w-full h-150 rounded-4xl py-5  flex items-end ">
        <div className=" text-white w-50 h-40 rounded-3xl backdrop-blur-sm p-4 ml-90 ">
          {" "}
          <h2 className="font-semibold text-xl mb-7 backdrop-blur-sm">
            View Patient <br />
            Stories
          </h2>
          <div className="flex items-center">
            <div className="flex mr-5">
              <Activity size={40} strokeWidth={4} />
              <Activity size={40} strokeWidth={4} />
            </div>
            <CirclePlay size={50} strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default right
