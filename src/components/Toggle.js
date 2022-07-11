import React, { useState } from "react";

function Toggle() {
const [click, setClick] = useState('Off')

function handleClick() {
  setClick(click => click === "Off" ? 'On' : 'Off')
  
}

const color = click ==='Off'? "white" : "red"; 

  return (
    <button
    style={{background: color}}
    onClick={handleClick}
    >{click}</button>
  )
}

export default Toggle;
