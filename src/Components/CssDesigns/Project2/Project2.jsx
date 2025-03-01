
import React , { useState } from 'react'
import './Project2.css';
import { IonIcon } from "@ionic/react";

import { homeOutline, personOutline, chatbubbleOutline, cameraOutline, settingsOutline } from "ionicons/icons";

function Project2() {

  const [activeIndex, setActiveIndex] = useState(0);

  const menuItemss = [
    { iconn: homeOutline, text: "Home" },
    { iconn: personOutline, text: "Profile" },
    { iconn: chatbubbleOutline, text: "Message" },
    { iconn: cameraOutline, text: "Photos" },
    { iconn: settingsOutline, text: "Setting" },
  ];

  return (
    <nav className="navigation2  m-10 ">
      <ul>
        {menuItemss.map((item, index) => (
          <li key={index} className={activeIndex === index ? "active" : ""} onClick={() => setActiveIndex(index)}>
            <a href="#">
              <span className="icon"><IonIcon icon={item.iconn} /></span>
              <span className="text">{item.text}</span>
            </a>
          </li>
        ))}
        <div className="indicator2" style={{ transform: `translateX(calc(var(--item-width) * ${activeIndex}))` }}></div>
      </ul>
    </nav>
  );
}

export default Project2




