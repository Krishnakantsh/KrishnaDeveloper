import React, { useEffect, useState } from 'react'

import './HeroSection.css'
import SocialLinks from '../SocialIcons/SocialLinks';



function HeroSection() {

    const words = ["Software Developer", "Web Developer", "UI/UX Designer" , "Social Marketing"];
    const colors =['rgb(255,0,0)' , 'rgb(23,141,241)', 'rgb(0,255,0)', 'orange']
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 6000); // Change text every 6 seconds
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, []);



  return (
    <div  className='flex justify-between items-center align-middle h-[40vw] w-full p-4 mt-10 ' >
         <div className="heroLeft w-1/2  h-fit flex flex-col gap-3 text-start ">
          <p className='font-semibold text-blue-500 text-lg  ' >WELCOME TO MY WORLD</p>
          <h1 className='font-bold  lg:text-6xl mt-6 ' >I'm Krishna</h1>
          <h1 className='font-bold  lg:text-6xl  ' >A <span 
          id='animated-text' 
          style={{ color: colors[index] }}
          >{words[index]}</span> </h1>
          <h5 className='text-lg lg:mt-6 font-light opacity-70 mb-5' >A personal portfolio is a collection of your work, achievements, and skills that highlights your abilities and professional growth.</h5>

        <SocialLinks  size={50}  />

         </div>
         <div className=" flex justify-end items-center h-full w-1/2  heroRight">
             <div className=' flex justify-center items-center w-2/3 h-full   rounded-2xl bg-[rgb(32,32,32)] heroRightOuter myBorder ' >
                <div className=' flex justify-center items-center w-full h-full heroRightInner '  >
                     <img  src="krishnaProfile.png" alt="profileImg" className=' h-full w-full object-cover object-top   ' />
                     
                </div>
             </div>
         </div>
    </div>
  )
}

export default HeroSection