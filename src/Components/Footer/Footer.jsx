import React from 'react'
import SocialLinks from '../SocialIcons/SocialLinks'

function Footer() {
  return (
    <>
    <div  className=' grid md:grid-cols-1 lg:grid-cols-[1fr_3fr]  w-full md:gap-20  lg:gap-5 h-fit lg:h-[20vw] mt-20 '  >
      <div className='hidden  md:flex flex-col justify-start items-start w-full h-full'  >
        <div className=' flex flex-col md:flex-row w-full justify-between md:justify-start items-center md:items-start gap-5  '  >
            <div className=' flex justify-start items-center h-25 md:h-30 lg:h-18 w-25 md:w-30 lg:w-18 rounded-full '  style={{  boxShadow: "0 0 15px rgba(255,255,255,0.8)" }}  >
              <img   className='  h-full w-full  object-cover object-top rounded-full '  src="/krishnaProfile.png" alt="profileimg" />
            </div>
            <div className=' flex justify-center items-center md:h-30  lg:h-15 w-fit text-2xl md:text-5xl lg:text-2xl font-semibold' >Krishna Sharma</div>
            </div>
        <div  className=' mt-10' >
           <SocialLinks  size={70} />
        </div>
      </div>    

      <div  className=' flex  flex-col md:flex-row justify-between items-start gap-10  pb-5' > 
      <div className=' flex flex-col justify-between  md:items-start  lg:pl-40 gap-5  w-full h-fit  ' >
        <h1 className=' text-2xl text-green-500 font-semibold  '  >QUICK LINK</h1>
        <h2>About</h2>
        <h2>Portfolio</h2>
        <h2>Services</h2>
        <h2>Blog</h2>
        <h2>Contact</h2>
      </div>    
      <div className=' flex flex-col  lg:justify-between items-center lg:pl-40 gap-5  w-full h-fit '  >
        <h1 className=' text-2xl text-green-500 font-semibold  ' >RESOURCES</h1>
        <h2>Authentication</h2>
        <h2>System Status</h2>
        <h2>Terms of Service</h2>
        <h2>Pricing</h2>
        <h2>Over Right</h2>
      </div>  
      <div className=' flex flex-col justify-between  md:items-end  lg:pl-40 gap-5  w-full h-fit '  >
        <h1 className=' text-2xl text-green-500 font-semibold  '  >DEVELOPRES</h1>
        <h2>Documentation</h2>
        <h2>Authentication</h2>
        <h2>API Reference</h2>
        <h2>Support</h2>
        <h2>Open Source</h2>
      </div>
      </div>

    </div>


    <div  className=' flex justify-center items-center border border-l-0 border-r-0 border-t-green-400   p-10 w-full h-fit '   >
         <h2 className=' text-xl' style={{ textShadow:"0 0 15px rgb(255,255,255)"  }} > © <span  className='text-green-500 '  style={{ textShadow:"0 0 25px rgb(0,255,0)"  }}  >2025</span> All Right Reserved by Krishna Developer </h2>
    </div>
    </>
  )
}

export default Footer