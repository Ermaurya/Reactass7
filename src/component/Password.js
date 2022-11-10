import React from 'react'

 const Password = () => {
 const passwords=()=>{
    const A="ABCDEFHIJKLMNOPQRSTUVWXYZ"
    const a="abcdefhijklmnopqrstuvwxyz"
    const special="!@#$%^&*()+?"
    const number="0123456789"
    let finel=`${A}${a}${special}${number}`
    // console.log(finel);
    let store="";
    let length=9;
    for(let i=0;i<length;i++){
        let indx=Math.floor(Math.random*finel.length-i)
        store = store+finel.charAt(indx)
        console.log(indx);
    }
    console.log(store);
 }
 passwords()
  return (
        <>
        <h1>password Generator</h1>
        <input type='text' disabled value=''/>
        <span>copy</span>
        <br/>
        <select>
            <option>selact</option>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
        </select>
        <br/>
        <input type='checkbox'/>
        <label>A to Z</label>
        <br/>
        <input type='checkbox'/>
        <label>a to z</label>
        <br/>
        <input type='checkbox' id='spacialchar'/>
        <label htmlFor='spacialchar'>spacial char</label>
        <br/>
        <input type='checkbox' id='number'/>
        <label htmlFor='number'>Number</label>
        <br/>
        <button className='btn' onClick={passwords}>enerate Password</button>
        </>
  )
}
export default Password;
