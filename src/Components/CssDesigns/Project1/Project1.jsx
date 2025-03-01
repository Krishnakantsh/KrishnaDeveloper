import React , { useState } from 'react'
import './Project1.css';
import { IonIcon } from "@ionic/react";
import { homeOutline, personOutline, chatbubbleOutline, cameraOutline, settingsOutline } from "ionicons/icons";

function Project1() {

  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: homeOutline, text: "Home" },
    { icon: personOutline, text: "Profile" },
    { icon: chatbubbleOutline, text: "Message" },
    { icon: cameraOutline, text: "Photos" },
    { icon: settingsOutline, text: "Setting" },
  ];

  return (
    <nav className="mt-5  navigation ">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className={activeIndex === index ? "active" : ""} onClick={() => setActiveIndex(index)}>
            <a href="#">
              <span className="icon"><IonIcon icon={item.icon} /></span>
              <span className="text">{item.text}</span>
            </a>
          </li>
        ))}
        <div className="indicator" style={{ transform: `translateX(calc(var(--item-width) * ${activeIndex}))` }}></div>
      </ul>
    </nav>
  );
}

export default Project1




