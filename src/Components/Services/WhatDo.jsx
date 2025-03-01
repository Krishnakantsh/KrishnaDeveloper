import React from 'react'
import './WhatDo.css'
import CodeIcon from '@mui/icons-material/Code';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import ComputerIcon from '@mui/icons-material/Computer';
import Diversity2Icon from '@mui/icons-material/Diversity2';

const cardData = [
  {
    icon:<CodeIcon/>,
    name:'Software Development',
    details:'We provide more scalable software for any type of businesses. Clients can grow their business by using uor software.'
  },
  {
    icon:<DeveloperBoardIcon/>,
    name:'Web Development',
    details:'Business consulting consul us to a provide expert advice businesses Each one showcases my approach and dedication to detail, creativity'
  },
  {
    icon:<ComputerIcon/>,
    name:'UI/UX Design',
    details:'Each one showcases my approach and dedication to detail, creativity Each one showcases my approach and dedication to detail, creativity'
  },
  {
    icon:<Diversity2Icon/>,
    name:'Social Media Handling',
    details:'We are expert in grow business through the social media marketing. And several businesses are connected with us and get profit of our expertise.'
  },
]

function WhatDo() {
  return (
    <div  className='flex h-fit flex-col w-full  pt-5  lg:mt-25 mb-10 '  >
         <h1 className='font-bold  text-center text-5xl  ' style={{ color:"rgb(0,255,0)"  }}  >What I Provide For You</h1>
         <div  className=' w-full h-fit pt-15 whatDo_card_container  gap-10'  >
             {
              cardData.map((e) => 
                <div className=' flex flex-col h-[15vw]  rounded-3xl  ' style={{  boxShadow:"0px 0px 12px rgba(255,255,255,0.345) ,-0px -0px 12px rgba(255,255,255, 0.345) " , background:"rgb(16,16,16,0.344)"  }}  >
                   <div className='flex w-full h-1/2  rounded-3xl justify-start p-5  gap-10 ' > 
                       <div className=' flex justify-center items-center font-semibold text-lg  h-18 w-18 rounded-full text-black' style={{ background:"rgb(0,255,0)" , boxShadow:"0 0 15px rgb(0,255,0)" }} >
                          {e.icon}
                       </div>
                       <div className=' flex justify-center items-center h-full w-fit text-3xl text-bl '  >{e.name}</div>
                   </div>
                   <div className='flex justify-center font-light opacity-50 items-start  text-start p-5 ' >
                       <p>{e.details}</p>
                   </div>
                </div>
              )
             }
         </div>

    </div>
  )
}

export default WhatDo