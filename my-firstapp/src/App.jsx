import './App.css'
import Header from './Header'
function App() {
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
     <h1>JSX WITH CURLY BRACES</h1>
     <h1>{firstname?firstname:"User Not Found"} {lastname()?lastname():"NO SURMAE FOUND"}</h1>
     {sum(10,20)}      <br/>
     {Calculator(200,10,"-")}  <br/>   
     <input type='text' value={firstname}/>
    </div>
    <Header/>
    
     
    </>

  )
}

export default App
