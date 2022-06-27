import { useState } from 'react';
import { FaBackspace } from 'react-icons/fa';

function App() {

  const [calc, setCalc] = useState("");            
  const [result, setResult] = useState("");
  const ops = ["/", "*", "+", "-", "%"];
  const opsOne = ["/", "*", "+", "-", "%", "."];
  const ops_dot = ["."];
  const ops_all = ops + ops_dot;
  

  const updateCalc = value => {

    //leading zero mega fix
    if(calc.charAt(0) === "0" && calc == 0) {      
      setCalc(calc.replace(0, value));
      return;
    }

    if(opsOne.includes(calc.slice(-3, -1))) {
      console.log("T E S T")
      
    }


    //2nd leading(after operator) zero fix wtf
    // if(ops.some( ai => calc.includes(ai.slice(-3))) && calc.charAt(calc.length-2) == 0) {
    //   if(calc.charAt(calc.length-1) == ".") {
    //     if(value >=0 && value <=9) {
    //       setCalc(calc + value)
    //     }
    //     else {
    //       return;
    //     }      
    //   }
    //   else {
    //     return;
    //   }
    // }

    //doesn't allow two operations or dot in a row or at start
    if((ops_all.includes(value) && calc === "") || (ops_all.includes(value) && ops_all.includes(calc.slice(-1)))) {
      if(calc.charAt(0) === ""){
        return;
      }
      else {
        setCalc(calc.slice(0, -1) + value);
        return;
      }      
    }

    
    //autoupdate span result preview
    // if(!ops.includes(value)){
    //   setResult(eval(calc + value).toString())
    // }

    setCalc(calc + value);



    //za testiranje u konzoli
    console.log("==========================")
    console.log("value ", value)
    console.log("calc ", calc)
    console.log("result ", result)
    console.log("==========================")

  }


  //keypad buttons
  const createDigits = () => {
    const digits = [];

    for(let i = 1; i<10; i++) {
      digits.push(
        <button
          onClick={() => updateCalc(i)}   //CHANGED FROM .toString()
          key={i}>{i}
        </button>
      )
    }
    return digits;
  }


  //equals function
  const calculate = () => {
    if(calc.charAt(0) === "") {
      return;
    }

    setCalc(eval(calc).toString());
    
    if(ops.some( ai => calc.includes(ai))) {
      setResult(result + calc + " = " + eval(calc).toString() + "\n");
    }
    else{
      return;
    }
  }

  //reciprocal function
  const reciprocal = () => {
    if(calc.length === 0 || calc == 0) {                                              //checks if equation is empty or == 0
      setResult(result + "Ne možete dijeliti s nulom\n") 
      return;
    }

    setCalc(eval(1/calc).toString());
    setResult(result + "1/" + calc + " = " + 1/calc + "\n");
  }

  //to the power of
  const pwr = () => {
    if(calc.length === 0 || opsOne.some( ai => calc.includes(ai.slice(-1))) || calc == 0) {        //checks if operator is last element or equation is empty
      return;           
    }                 
   
    setCalc(eval(calc*calc).toString());
    setResult(result + calc + '\u00B2' + " = " + calc*calc + "\n");
  }

  //backspace (delete last char)
  const deleteLast = () => {
    if(calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  }

  //square root
  const sqr = () => {
    if(calc > 0) {
      setCalc(eval(Math.sqrt(calc)).toString());
      setResult(result + '\u221A' + '(' + calc + ') = ' + Math.sqrt(calc) + "\n");
    }
    return;
  }

  //C (clear) button
  const clear = () => {
    setResult("");
    setCalc("");
  }

  //CE (clear entry) button
  const clearEntry = () => {
    setCalc("");
  }

  //adds minus
  const negate = () => {
    if(calc.length === 0) {
      return;
    }
    if (calc.charAt(0) === "-") {
      setCalc(calc.substring(1));
    } else {
      setCalc("-" + calc);
    }
  }; 

  
  return (
    <div className="App">
      <div className="calculator">
        <div className="equationDisplay">
          { result ? result : ""}   
        </div>

        <div className="display">        
          { calc || "0" }         
        </div>

        <div className="extraoperators">
          <button onClick={() => updateCalc("%")}>%</button>
          <button onClick={clearEntry} id="clearEntry">CE</button>
          <button onClick={clear} id="clear">C</button>
          <button onClick={reciprocal}>1/x</button>
          <button onClick={pwr}>x&sup2;</button>
          <button onClick={sqr}>&radic;</button>
        </div>

        <div className="operators">
          <button onClick={deleteLast}><FaBackspace /></button>

          <button onClick={() => updateCalc("/")}>&divide;</button>
          <button onClick={() => updateCalc("*")}>&times;</button>
          <button onClick={() => updateCalc("-")}>&ndash;</button>
          <button onClick={() => updateCalc("+")}>+</button>
          
        </div>

        <div className="digits">
          { createDigits() }
        </div>

        <div className="bottom_row">
          <button onClick={negate}>+/-</button>
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
        </div>

        <div className="equals">
          <button onClick={calculate}>=</button>
        </div>
        
      </div>         
    </div>
    
  );
  
}


export default App;

