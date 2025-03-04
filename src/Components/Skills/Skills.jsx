import React from "react";
import "./Skills.css";

const skillsData = [
  {
    name: "Java",
    image: "/skillsIcons/java_logo.png",
    experience: "18 Months",
  },
  {
    name: "Python",
    image: "/skillsIcons/python_logo.png",
    experience: "6 Months",
  },
  {
    name: "React Js",
    image: "/skillsIcons/react_logo.png",
    experience: "16 Months",
  },
  {
    name: "Spring Boot",
    image: "/skillsIcons/springboot_logo.png",
    experience: "18 Months",
  },
  {
    name: "Docker",
    image: "/skillsIcons/docker_logo.png",
    experience: "10 Months",
  },
  {
    name: "Java Script",
    image: "/skillsIcons/javascript_logo.png",
    experience: "18 Months",
  },
  {
    name: "Git/Github",
    image: "/skillsIcons/github_logo.png",
    experience: "18 Months",
  },
  {
    name: "MySql",
    image: "/skillsIcons/Mysql_logo.png",
    experience: "20 Months",
  },
  {
    name: "Html5",
    image: "/skillsIcons/html_logo.png",
    experience: "20 Months",
  },
  {
    name: "DSA",
    image: "/skillsIcons/dsa_logo.png",
    experience: "20 Months",
  },
  {
    name: "C++ & C",
    image: "/skillsIcons/c++_c_logo.png",
    experience: "18 Months",
  },
  {
    name: "CSS3",
    image: "/skillsIcons/CSS.jpg",
    experience: "20 Months",
  },
  {
    name: "Bootstrap5",
    image: "/skillsIcons/bootstrap_logo.png",
    experience: "19 Months",
  },
  {
    name: "Tailwind CSS",
    image: "/skillsIcons/tailwind_logo.png",
    experience: "8 Months",
  },
];

function Skills() {
  const handleClick = () => {
    window.location.href = "https://github.com/Krishnakantsh";
  };

  return (
    <div className="flex flex-col h-fit  py-1 gap-7 mt-15 rounded-2xl my-20 ">
      <h1 className=" text-2xl md:text-3xl lg:text-5xl   text-green-400  font-bold" >Skills & Work Experience In Technologies</h1>

      <div  className="flex flex-col lg:flex-row   h-fit  py-1 gap-7 mt-5 rounded-2xl my-20 " >
        <div className=" flex flex-col justify-between gap-10  items-center lg:items-end h-fit w-full lg:w-1/3  relative  ">
          
          <div className=" hidden lg:flex  h-100 w-150 absolute animationBox "></div>

          <div className=" flex flex-col justify-center items-center text-2xl  md:text-4xl lg:text-2xl gap-5 font-bold w-[100%] h-[45vw]  lg:w-[25vw] lg:h-[20vw]  glassEffect   ">
            <h1   >1.5+ Years</h1>
            <h1>Experience Of All</h1>
            <h1>Technologies</h1>
          </div>
       
          <div className=" flex flex-wrap justify-between items-start text-sm  lg:text-sm md:gap-3  gap-1.5 lg:gap-4.5 p-5 font-bold lg:w-[25vw] lg:min-h-[20vw]  glassEffect   ">
            <h1 className=" text-4xl lg:text-2xl text-white font-semibold mb-5 ">
              Java Specific Technologies
            </h1>
            <h4>Core Java</h4>
            <h4>JSTL</h4>
            <h4>Spring Boot</h4>
            <h4>Hibernate</h4>
            <h4>React Js</h4>
            <h4>Redux</h4>
            <h4>Version Control</h4>
            <h4>MySql</h4>
            <h4>MongoDB</h4>
            <h4>JWT</h4>
            <h4>Servlet</h4>
            <h4>Authentication</h4>
            <h4>Authorization</h4>
            <h4>DSA</h4>
            <h4>Deployment</h4>
            <h4>Spring IOC</h4>
            <h4>Spring Data Jpa</h4>
            <h4>Spring Security</h4>
            <h4>Thymeleaf - Template Engine</h4>
            <h4>Axios</h4>
            <h4>JSP - Java Server Page</h4>

            <h4>REST APIs</h4>
            <h4>Docker - Containerization</h4>
          </div>
        </div>

        <div className=" flex justify-center items-start flex-wrap h-fit w-full lg:w-2/3 lg:px-5 gap-5 lg:gap-10 ">
          {skillsData.map((data) => (
            <div
            key={data.name}
              className=" flex flex-col  justify-between items-center p-5   w-[90vw] md:w-[16vw] lg:w-[12vw] 
  h-fit md:h-[22vw] lg:h-[15vw] rounded-2xl  "
              style={{
                boxShadow:
                  "inset -6px -10px 10px rgba(255,255,255,0.5) , inset 2px 2px 10px rgba(255,255,255,0.5) ",
              }}
            >
              <div className=" flex justify-center items-center h-35 lg:h-25 w-fit   skillsCardImageDiv">
                <img
                  className=" h-full w-fit object-cover object-top  "
                  src={data.image}
                  alt="skillsImage"
                />
              </div >
             <div> <h1 className=" font-semibold text-2xl lg:text-xl text-orange-400 ">
                {data.name}
              </h1>
              <h3 className=" font-light text-lg text-green-400 ">
                {data.experience}
              </h3></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
