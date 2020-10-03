import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './componentes/display';
import Button from './componentes/button';
import Style from './app.module.css';
function App() {
  const [numbers,setNumbers] = useState('');
    const handlerDisplay = (number)=>{
 
      if(number!='' && number != '*' && number != "_" && number != '#' && number !=1 ){

        setNumbers(numbers + number);
      }
     
    } 

    const submit = (event)=>{
         let formatNumber=  numbers.replace(/\s+/g, '_');
        if(event.key=="Enter"){
          fetch('http://localhost:3000/traducaoMsg', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({msg: formatNumber})
          });
        
        }
        
    }


    

  return (
    <div className={Style.phone} onKeyPress={(event)=>submit(event)}>
   <Display title={numbers}></Display>
   <Button onClick={(event)=>handlerDisplay('')} number="1" letters=""></Button>
   <Button  onClick={()=>handlerDisplay(2)}  number="2"  letters="abc"></Button>
   <Button onClick={()=>handlerDisplay(3)} number="3" letters="def"></Button>
   <Button  onClick={()=>handlerDisplay(4)} number="4" letters="ghi"></Button>
   <Button onClick={()=>handlerDisplay(5)} number="5" letters="jkl"></Button>
   <Button  onClick={()=>handlerDisplay(6)} number="6" letters="mno"></Button>
   <Button  onClick={()=>handlerDisplay(7)} number="7" letters="pqrs"></Button>
   <Button  onClick={()=>handlerDisplay(8)} number="8" letters="tuv"></Button>
   <Button  onClick={()=>handlerDisplay(9)}number="9" letters="wxyz"></Button>
   <Button  onClick={()=>handlerDisplay('*')}number="" letters="*"></Button>
   <Button  onClick={()=>handlerDisplay(' ')}number="0" letters="_"></Button>
   <Button  onClick={()=>handlerDisplay('#')}number="" letters="#"></Button>
   </div>

  );
}

export default App; 



