import React, { useState } from 'react'

export default function Input() {
    const[val,setval]=useState("Himank kaushik")
  return (
    <div>
        <h2>Get Input Field Value </h2>
        <h3>Example of controlled component</h3>
        <input type="text" value={val}  onChange={(event)=>setval(event.target.value)} placeholder='Enter Your Name'/>
        <h1>{val}</h1>
        <button onClick={()=>setval("")}>Clear</button>
    </div>
  )
}
