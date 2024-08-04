import React, { useState } from "react";
import './rightside.css';
import Profession from "./profession";
import Age from "./age";
import Industry from "./industry";

function RightSide() {
  const [activeTab, setActiveTab] = useState("");
  function HandleonClick(tab) {
      setActiveTab(tab)
  }
  return(
    <div className="rightside">
      <Profession isactive={activeTab == 'Profession'} onClick={tab=>HandleonClick(tab)}></Profession>
      <hr></hr>
      <Age isactive={activeTab == 'Age'} onClick={tab=>HandleonClick(tab)}></Age>
      <hr></hr>
      <Industry isactive={activeTab == 'Industry'} onClick={tab=>HandleonClick(tab)}></Industry>
      <hr></hr>
    </div>
  );
}

export default RightSide