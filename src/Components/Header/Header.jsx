import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Header.css";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const fileurl = "/krishnaResume.pdf"

function Header({ scrollToSection, heroRef, projectsRef, contactRef,latestRef }) {
  const [open, setOpen] = React.useState(false);

 
  //  download resume concept 
  const downLoadResume = (url) => {
    console.log("Download button clicked!"); // Check if this logs
    console.log("Download URL:", url); 
  
    const a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", "krishnaResume.pdf");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const iconsData = [
    {
      icon: <HomeOutlinedIcon />,
      name: "Home",
      link:"heroRef"
    },
    {
      icon: <LibraryBooksOutlinedIcon />,
      name: "Projects",
      link:"projectsRef"
    },
    {
      icon: <CollectionsBookmarkOutlinedIcon />,
      name: "Latest Work",
       link:"latestRef"
    },
    {
      icon: <LinkedInIcon />,
      name: "Linked",
    },
    {
      icon: <GitHubIcon />,
      name: "Github",
    },
    {
      icon: <LocalPhoneOutlinedIcon />,
      name: "Contact",
       link:"contactRef"
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {iconsData.map((e) => (
 
          <ListItem  onClick={() => scrollToSection(`${e.link}`)}  key={e.name} disablePadding>
            <ListItemButton sx={{ marginTop: "2vw" }}>
              <ListItemIcon sx={{ fontSize: 40, color: "rgb(255,255,255)" }}>
                {React.cloneElement(e.icon, { sx: { fontSize: 40 } })}
              </ListItemIcon>
              <ListItemText
                primary={e.name}
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "24px",
                    fontWeight: "bold",
                    marginLeft: "5vw",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
            <Button

              onClick={()=> downLoadResume(fileurl) }
              variant="contained"
              sx={{
                color: "rgb(255,255,255)",
                fontWeight: "700",
                whiteSpace:"nowrap",
                fontSize:"2vw",
                marginTop:"2vw"
              }}
            >
              Download Resume
            </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div  className=" flex justify-between  items-center align-middle h-fit w-full p-2 z-50  header ">
      <div className=" flex justify-between  items-center  w-fit gap-5 lg:p-2  ">
        <div className="lg:ml-4 sm:h-15 sm:w-15 lg:h-18   h-20 w-20  lg:w-18 flex  rounded-full  shadow-md shadow-amber-50">
          <a
            href="#"
            className=" h-full w-full border object-cover object-top rounded-full shadow-2xl "
          >
            <img
              alt="profileimg"
              src="/krishnaProfile.png"
              className="h-full w-full object-cover object-top rounded-full shadow-2xl"
            />
          </a>
        </div>
        <div className="flex  justify-center items-center  font-semibold h-full w-fit ">
          <h1 className=" text-2xl  lg:text-4xl  "  >Krishna</h1>
        </div>
      </div>
      <div className="hidden  lg:flex h-full p-1 ">
        <ul className="flex md:gap-8  xl:gap-10 text-bold text-lg   md:text-lg ">
          <li
          >  
            <a href="#" onClick={() => scrollToSection(heroRef)}  >Home</a>
          </li>
          <li>
            <a href="# " onClick={() => scrollToSection(projectsRef)}   >Projects</a>
          </li>
          <li className="  hidden lg:block ">
            <a href="#"   onClick={() => scrollToSection(latestRef)} >Latest Work</a>
          </li>
          <li>
            <a href="https://github.com/Krishnakantsh">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/krishna-kant-sharma-developer92">Linkedin</a>
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection(contactRef)}   >Contact</a>
          </li>
        </ul>
      </div>
      <div className="hidden sm:block ">
        <Button

          onClick={()=> downLoadResume(fileurl) }
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
      <div className="   lg:hidden " onClick={toggleDrawer(true)}>
        <MenuOpenIcon sx={{ fontSize: "8vw" }} />
      </div>

      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "rgba(255,255,255,0.2)", // Change to your desired color
            color: "rgb(255,255,255)", // Optional: Change text color for better contrast
            width: 400, // Optional: Set drawer width
            backdropFilter: "blur(10px)",
            borderRight: "2px solid rgb(255,255,255)",
            borderTopRightRadius: "25px",
            borderBottomRightRadius: "25px",
            boxShadow: "1px 0 10px rgb(255,255,255)",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default Header;
