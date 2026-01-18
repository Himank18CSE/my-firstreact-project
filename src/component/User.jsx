import React, { useState } from 'react'
import Header from './Header';
export const User = () => {
    const [display,setdisplay]=useState(true);
  return (
    <div>
        <h1>Toggle in React</h1>
        <button onClick={()=>setdisplay(!display)}>Toggle</button>
      {  
      display?<Header/>:null
      }
        
    </div>
  )
}
