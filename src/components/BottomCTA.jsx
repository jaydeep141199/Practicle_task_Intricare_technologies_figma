import React from "react";
import "../assets/styles/BottomCTA.scss";
import hoursIcon from "../assets/images/hours.png";

const BottomCTA = () => {
  return (
    <div className="cta-container ">
      <button className="cta-button">Start Using LeadCRM Now</button>
      <img src={hoursIcon} alt="Hours Icon" width={250} height={250} className="hours-icon" />
    </div>
  );
};

export default BottomCTA;
