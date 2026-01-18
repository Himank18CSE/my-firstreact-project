import React, { useState } from 'react'

export const MulCondition = () => {
    const[count,setcount]=useState(0);
  return (
    <div>
        <h3>EXAMPLE OF MULTIPLE CONDITION IN REACT</h3>
    <div><h1>{count}</h1></div>
    
    <button onClick={()=>setcount(count+1)}>GO NEXT</button><br/>
    <button onClick={()=>setcount(count-1)}>GO PREVIOUS</button>
    {
        count==0?<h1>Let's Start My Friends Name</h1>
        :count==1?<h1>Priyanshu</h1>
        :count==2?<h1>Rahul</h1>
        :count==3?<h1>Aditya</h1>
        :count==4?<h1>Dev</h1>
        :count==5?<h1>AL YAMAN</h1>
        :count==6?<h1>Himank </h1>
        :count==7?<h1>Khan</h1>
        :count==8?<h1>Sahib</h1>
        :count==9?<h1>Dhruv</h1>
        :count==10?<h1>Vansh</h1>
        :count<=12?<h1>NO MORE DATA FETCH</h1>:null

    }
    </div>  
  
  )
}
