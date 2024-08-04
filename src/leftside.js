import React, { useState } from "react";
import './leftside.css'
import Mood from "./mood";
import Tone from "./tone";
import Gender from "./gender";
import { tab } from "@testing-library/user-event/dist/tab";


function LeftSide(props) {
  const [activeTab, setActiveTab] = useState("");
  function HandleonClick(tab) {
      setActiveTab(tab)
  }
  return (
      <div className="leftside">
        <Mood isactive={activeTab == 'Mood'} onClick={tab=>HandleonClick(tab)} onClicks={filter=>props.onFilterSelected(filter)}></Mood>
        <hr></hr>
        <Tone isactive={activeTab == 'Tone'} onClick={tab=>HandleonClick(tab)}></Tone>
        <hr></hr>
        <Gender isactive={activeTab == 'Gender'} onClick={tab=>HandleonClick(tab)}></Gender>
        <hr></hr>
      </div>
  );

}

export default LeftSide