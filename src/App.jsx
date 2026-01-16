import './App.css'
import { useState } from 'react'
import Header from './Header'
import { User } from './User'
import { MulCondition } from './MulCondition'
import Input from './Input'
import Checkbox from './Checkbox'
function App() {
  const [count, setCount] = useState(0)
  const [rcount, setrcount] = useState(100)

   const firstname="Himank"
  function lastname(){
    return "Kaushik"
  }
  function sum(a,b){
    return a+b;
  }
  function Calculator(a,b,op){
   if(op=="+"){
    return a+b;
   }
   else if (op=="-"){
    return a-b;
   }
   else if (op=="*"){
    return a*b;
   }  
   else{
    return a/b;
   }
  }
  
  return (
    <>
    <div>
      <Checkbox/>
      <Input/>
      <MulCondition/>
      <User/>
     <h1>JSX WITH CURLY BRACES</h1>
     <h1>{firstname || "User Not Found"} {lastname()?lastname():"NO SURMAE FOUND"}</h1>
     {sum(10,20)}      <br/>
     {Calculator(200,10,"-")}  <br/>   
     <input type='text' value={firstname}/>
     <div>
        <h1>State in react.</h1>
        <h1>Counter:{count}</h1>
        <h2>RCounter:{rcount}</h2>
        <h3>TOTAL:{count + rcount}</h3>
        <button onClick={() => setCount(count + 1)}>CLICK FOR COUNT INCREMENT</button>
        <button onClick={() => setrcount(rcount - 1)}>CLICK FOR COUNT DECREMENT</button>
      </div>
    </div>
    <Header/>
    
     
    </>
    
    

  )
}

export default App
