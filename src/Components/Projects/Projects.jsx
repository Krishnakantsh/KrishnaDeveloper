import React from "react";
import "./Projects.css";
import { Button } from "@mui/material";

const projectCardData = [
  {
    name:"StarLife Bank",
    duration:"54 Days",
    contribution:"Self",
    Frontend:"Thymeleaf, Bootstrap5, CSS3, JavaScript, HTML5",
    Backend:"Java, Spring Boot etc..",
    Status:"Completed",
    imgurl:'https://themes-park.net/product/html/reeni/assets/images/latest-portfolio/portfoli-img-4.jpg'
  },
  {
    name:"Shopi.com",
    duration:"32 Days",
    contribution:"Self",
    Frontend:"React Js, Tailwind, CSS3, JavaScript, HTML5",
    Backend:"Java, Spring Boot , Razorpay etc..",
    Status:"Completed",
    imgurl:'https://themes-park.net/product/html/reeni/assets/images/latest-portfolio/portfoli-img-2.jpg'
  },
  {
    name:"Timer ",
    duration:"9 Days",
    contribution:"Self",
    Frontend:"Bootstrap5, CSS3, JavaScript, HTML5",
    Backend:"Javascript",
    Status:"Completed",
    imgurl:'https://themes-park.net/product/html/reeni/assets/images/latest-portfolio/portfoli-img-1.jpg'
  },
  {
    name:"Krishna Builder",
    duration:"3 Days",
    contribution:"Self",
    Frontend:"React Js, Bootstrap5, CSS3, JavaScript, HTML5",
    Backend:"",
    Status:"Completed",
    imgurl:'https://themes-park.net/product/html/reeni/assets/images/latest-portfolio/portfoli-img-3.jpg'
  }
]

function Projects() {

  return (
    <div className=" flex flex-col justify-between items-center h-fit w-full  p-5 mt-20 gap-5">
      <h1 className="font-bold  text-center text-5xl pt-5 " style={{ color:"rgb(0,255,0)"  }}   >
        Our Projects
      </h1>
      <h3 className="font-semibold  text-center text-3xl text-white pt-5 ">
        Transforming Ideas into Implementation
      </h3>
      <p className="font-light  text-center text-xl text-white opacity-50 w-1/2 ">
        Business consulting consultants provide expert advice and guida
        businesses to help them improve their performance, efficiency, and
        organizational
      </p>

      <div className="w-full h-fit gap-8 mt-15  projectsContainer">
        {projectCardData.map((e) => (
          <div className="  h-[45vw]  projectsCard  ">
            <div className="flex justify-center items-center  w-full h-7/10  p-5 rounded-2xl imageDiv">
               <img src={e.imgurl} alt="projectImage" className="  h-full w-full object-cover object-top rounded-2xl "    />
            </div>
            <div className="flex w-full h-3/10 p-5 projectDetailsDiv ">
              <div className=" flex flex-col gap-1.5 w-2/3 text-sm justify-between items-center projectDetailsDivLeft ">
                <h2 className=""  >
                  <span>Project Name </span>
                  <span>:</span>
                  <span>{e.name}</span>
                </h2>
                <h2>
                  <span>Project Duration </span>
                  <span>:</span>
                  <span>{e.duration}</span>
                </h2>
                <h2>
                  <span>Contribution </span>
                  <span>:</span>
                  <span>{e.contribution}</span>
                </h2>
                <h2>
                  <span>Frontend </span>
                  <span>:</span>
                  <span>{e.Frontend}</span>
                </h2>
                <h2>
                  <span>Backend </span>
                  <span>:</span>
                  <span>{e.Backend}</span>
                </h2>
                <h2>
                  <span>Status </span>
                  <span>:</span>
                  <span>{e.Status}</span>
                </h2>
              </div>
              <div className="flex flex-col h-full w-1/3 justify-between  items-center py-5 projectDetailsDivRight">
                <Button
                  variant="outlined"
                  className=" rounded-2xl "
                  sx={{
                    bgcolor: "rgb(0,0,0) ",
                    color: "rgb(255,255,255)",
                    fontWeight: "700",
                    width:"80%",
                    boxShadow:"0 0 15px rgba(255,255,255,0.45)",
                    border:"1px solid rgba(255,255,255,0.6)",
                    borderRadius:"5px"
                    
                  }}
                >
                   Live Preview  
                </Button>
                <Button
                  variant="outlined"
                  className=" rounded-2xl  hover:border-white hover:border-2  "
                  sx={{
                    bgcolor: "rgb(0,0,0) ",
                    color: "rgb(255,255,255)",
                    fontWeight: "700",
                    width:"80%",
                    boxShadow:" 0 0 15px rgba(255,255,255,0.45)",
                    border:"1px solid white",
                    borderRadius:"5px"
                  }}
                >
                   Git Repository  
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
