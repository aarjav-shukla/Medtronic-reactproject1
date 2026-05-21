import React from "react";
import { MoveUpRight } from "lucide-react";
const top1 = () => {
  return (
    <div className="text-white border-b-2 pb-20 border-gray-100/10">
      <h1 className="text-5xl text-center pt-30 font-bold font-mono pb-20">
        {" "}
        Start Your Journey Today
      </h1>
      <div className=" flex gap-10 items-center justify-center">
        <div
          className="bg-[url(https://images.unsplash.com/photo-1518708909080-704599b19972?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lZGl0YXRpb258ZW58MHx8MHx8fDA%3D)] bg-cover  w-70 h-90 
         rounded-3xl flex flex-col justify-between py-2 px-1"
        >
          <div className="h-10 w-10 bg-black/50 rounded-full p-3 ml-55">
            <MoveUpRight size={16} strokeWidth={1.25} />
          </div>
          <div className="  rounded-3xl p-5 backdrop-blur-sm">
            {" "}
            <h2 className="font-bold text-lg text-white ">
              Improved Flexibility
            </h2>
            <p className="text-white text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique, aspernatur.
            </p>
          </div>
        </div>
        <div
          className="bg-[url(https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D)] bg-cover  w-70 h-90 
         rounded-3xl flex flex-col justify-between py-2 px-1"
        >
          <div className="h-10 w-10 bg-black/50 rounded-full p-3 ml-55">
            <MoveUpRight size={16} strokeWidth={1.25} />
          </div>
          <div className="  rounded-3xl p-5 backdrop-blur-sm">
            {" "}
            <h2 className="font-bold text-lg text-white ">Stress Reduction</h2>
            <p className="text-white text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique, aspernatur.
            </p>
          </div>
        </div>
        <div
          className="bg-[url(https://images.unsplash.com/photo-1554244933-d876deb6b2ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lZGl0YXRpb258ZW58MHx8MHx8fDA%3D)] bg-cover  w-70 h-90 
         rounded-3xl flex flex-col justify-between py-2 px-1"
        >
          <div className="h-10 w-10 bg-black/50 rounded-full p-3 ml-55">
            <MoveUpRight size={16} strokeWidth={1.25} />
          </div>
          <div className="  rounded-3xl p-5 backdrop-blur-sm">
            {" "}
            <h2 className="font-bold text-lg text-white ">
              Improved Flexibility
            </h2>
            <p className="text-white text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique, aspernatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default top1;
