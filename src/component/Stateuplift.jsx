import React from 'react'

export const Stateuplift = (props) => {
  return (
    <div>
    <h2>State Uplifting</h2>
     <input type="text" onChange={(e)=>props.setname(e.target.value)}/>
     <p>I'm Inside child:{props.name}</p>
    </div>
  )
}
