import {useState} from 'react'

const Toggle = (props) => {
    const[isdark,setIsDark]=useState(false);
    // const[button,setButton]=useState()
    const change=()=>{
        setIsDark(!isdark);
    }
  return (
    <>
    <div className='main_body'>
     <div className='contant'>

    <div className={isdark===true?"dark":"Light"}>
      <h1>{props.head}</h1>
      <hr/>
    <button onClick={change}>Toggle</button>
      <br/>
      <br/>
      <h3>{props.main}</h3>
      <p>{props.text}</p>
      <br/>
      <br/>
      <h3>{props.h1}</h3>
      <p>{props.text2}</p>
      </div>
     </div>
    </div>
    </>
  )
}
export default Toggle;