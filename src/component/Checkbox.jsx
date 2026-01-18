import React, { useState } from 'react'

export default function Checkbox() {
    const[skills,setskills]=useState([]) ;
    const handleSkills=(event)=>{
        console.log(event.target.value,event.target.checked)
        if(event.target.checked){
            setskills([...skills,event.target.value])
        }else{
            setskills([...skills.filter((item)=>item!=event.target.value)])
        }
    }

  return (
    <div>
        <h4>Handle CheckBox</h4>
        <input onChange={handleSkills} type="checkbox" id="php" value="PHP"/>
        <label htmlFor='php'>PHP</label><br/>
        <input onChange={handleSkills} type="checkbox" id="css" value="css"/>
        <label htmlFor='css'>CSS</label><br/>
        <input  onChange={handleSkills} type="checkbox" id="NODE" value="NODE"/>
        <label htmlFor='NODE'>NODE</label><br/>
        <input  onChange={handleSkills} type="checkbox" id="ts" value="ts"/>
        <label htmlFor='ts'>TS</label><br/>
        <input onChange={handleSkills} type="checkbox" id="java" value="JAVA"/>
        <label htmlFor='java'>JAVA</label><br/>
        <h4>{skills.toString()}</h4>
    </div>
  )
}
