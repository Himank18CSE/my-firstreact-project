import './App.css'
import { useState } from 'react'
import Header from './component/Header'
import { User } from './component/User'
import { MulCondition } from './component/MulCondition'
import Input from './component/Input'
import Checkbox from './component/Checkbox'
import { Stateuplift } from './component/Stateuplift'
import { Logoutbtn } from './component/Logoutbtn'
import { Loginbtn } from './component/Loginbtn'
import { TimerComponent } from './component/Useeffect/TimerComponent'
import { ResizeComponent } from './component/Useeffect/ResizeComponent'
function App() {
  const [count, setCount] = useState(0)
  const [rcount, setrcount] = useState(100)
  const [name,setname] =useState("")
  const [Islogin,setlogin]=useState(true)

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
      <ResizeComponent/>
      <hr/>
      <h2>useEffect</h2>
      <TimerComponent />
      <hr/>
      {Islogin?<Logoutbtn/>:<Loginbtn/>}
      <Stateuplift name= {name} setname={setname}/>
      <p>I'm Inside Parent: {name}</p>
      <Stateuplift name={name} setname={setname}/>
      <p>I'm Inside Parent: {name}</p>
      <hr/>
      <Checkbox/>
      <hr/>
      <Input/>
      <hr/>
      <MulCondition/>
      <hr/>
      <User/>
      <hr/>
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
