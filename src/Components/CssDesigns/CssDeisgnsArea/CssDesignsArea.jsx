import React from "react";
import Project1 from "../Project1/Project1.jsx";
import { Button } from "@mui/material";
import { Store } from "../../Store/Store.js";
import CodeViewer from "../../CodeViewer/CodeViewer";
import Project2 from "../Project2/Project2.jsx";
import Project3 from "../Project3/Project3.jsx";



function CssDesignsArea() {

  const dataStore = [
    {
      data:Store[0].project1,
      videourl:'/Videos/project1V.mp4',
      component:<Project1/>
    },
    {
      data:Store[1].project2,
      videourl:'/Videos/project2vv.mp4',
      component:<Project2/>
    },
    {
      data:Store[2].project3,
      videourl:'/Videos/projectvv3.mp4',
      component:<Project3/>
    },
  ]


 

  return (
    <div className=" flex flex-col justify-between items-center my-5 py-1 w-full min-h-[10vw] ">
      <h1 className=" lg:text-5xl md:text-lg sm:text-sm font-bold text-green-400 hover:text-amber-300  ">
        Our Some Usable Template
      </h1>
    

     {
      dataStore.map((e)=>
        <div className=" flex flex-col  w-full h-fit   mt-5  rounded-lg">
      <div className=" grid grid-cols-2 w-full  gap-10 p-5">
        <div
          className="flex justify-center items-center h-[15vw] w-full  rounded-3xl p-10 "
          style={{
            boxShadow:
              "inset -3px -3px 20px rgb(255,255,255),  inset 1px 1px  10px rgba(255,255,255,0.6)",
          }}
        >
          {e.component}
        </div>
        <div
          className="flex justify-center items-start h-[15vw]  rounded-3xl p-10  pt-12"
          style={{
            boxShadow:
              "inset -3px -3px 20px rgb(255,255,255),  inset 0 0  5px rgba(255,255,255,0.6)",
          }}
        >
          <video
            src={e.videourl}
            autoPlay
            muted
            loop
            className="w-[35vw] h-[10vw] object-cover"
          />
        </div>
      </div>

      <div className="  flex justify-center items-start flex-col w-full  mt-5 px-5   rounded-lg  ">
        <CodeViewer data={e.data} />
      </div>
    </div>
      
      
      )
     }



    </div>
  );
}

export default CssDesignsArea;
