import React from "react";
import Button from "@mui/material/Button";
import './Header.css'

function Header() {
  return (
    <div className=" flex justify-between items-center align-middle h-fit w-full p-2 z-50  header ">
      <div  className=" flex justify-between items-center w-fit gap-5 p-2 " >
        <div className="ml-4 h-20 w-20  flex lg:ml-0 rounded-full shadow-amber-50 ">
          <a href="#">
            <img
              alt="profileimg"
              src="krishnaProfile.png"
              className="h-20 w-20 object-cover object-top rounded-full shadow-2xl"
            />
          </a>
        </div>
         <div className="flex justify-center items-center lg:text-4xl font-semibold h-full w-fit ">
           Krishna
        </div>
      </div>
      <div className="flex h-full p-1" >
        <ul className="flex gap-10 text-bold text-lg " >
          <li >
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Latest Work</a>
          </li>
          <li>
            <a href="">Github</a>
          </li>
          <li>
            <a href="">Linkedin</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <Button
          variant="contained"
          sx={{
            bgcolor: "rgb(255,0,0) ",
            color: "rgb(255,255,255)",
            fontWeight: "700",
          }}
        >
          Download Resume
        </Button>
      </div>
    </div>
  );
}

export default Header;
