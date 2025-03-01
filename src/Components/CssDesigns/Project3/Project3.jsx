import React, { useState } from 'react'
import { IonIcon } from "@ionic/react";
import { powerOutline } from "ionicons/icons";
import "./Project3.css";



export default function Project3() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label>
      <input
        type="checkbox"
        name="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <div className="icon3">
        <div className="shadow"></div>
        <div className="iconBx">
          <IonIcon icon={powerOutline} />
        </div>
      </div>
    </label>
  );
}
