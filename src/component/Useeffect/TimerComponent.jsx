import { useEffect } from "react";
import React, { useState }from 'react'

export const TimerComponent = () => {
    const[time,settime]=useState(0);

    useEffect(() => {
      const intervalId= setInterval(()=> {
        settime((prevtime)=>prevtime+1);
      },1000);
    
      return () => {
        clearInterval(intervalId);
      };
    }, []);
    
  return (
    <div>
        <h1>Second:{time}</h1>
    </div>
  )
}
