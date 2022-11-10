import React from 'react'
import { useState } from 'react';
const Toggel = ({props}) => {
    const[dark,setDark]=useState("light_theam");
    const[button,setButton]=useState("dark");
 const styles=(tog)=>{
  setDark(tog)
 }
    const change=()=>{
        // document.body.defaul
        if(button=='light_theam'){
            setButton("dark")
            styles("light_theam")
            
        }else{
            setButton("light_theam")
            styles("dark")
        }
    }
  return (
    <>
    <div className={dark}>
        <button onClick={change}>{button==="dark"?"light_theam":"dark"}</button>
      <h1>{props}</h1>
      <h2>React-States-001</h2>
      <p>Complete the following using React States & JSX.</p>
      <br/>
      <br/>
      <h3>dark mode</h3>``
      <p>Implement the dark mode to the following webpage given below.</p>

    </div>
    </>
  )
}
export default Toggel;