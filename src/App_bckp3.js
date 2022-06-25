import { useState } from 'react';
import { FaBackspace } from 'react-icons/fa';

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["/", "*", "+", "-", ".", "%", "CE", "C", "1/x", "pwr", "sqr"];
  const opsDot = ["."];
  

  const updateCalc = value => {


    //leading zero mega fix
    if(calc.charAt(0) === "0") {
      setCalc(calc.replace(0, value));
      return;
    }

    //doesn't allow two operations or dot in a row
    if((ops.includes(value) && calc === "") || (ops.includes(value) && ops.includes(calc.slice(-1)))) {
      if(calc.charAt(0) === "0" && value.charAt(0) === "0"){
        return;
      }
      else {
        setCalc(calc.slice(0, -1) + value);
        return;
      }      
    }
    

    

    if(ops.includes(calc.slice(-1)) && value == 0){
      if(opsDot.includes(value)){
        console.log("test")
      }
    }

    




    // if(calc.endsWith(ops) && value === "0") {
    //   return;
    // }

    // if(calc === 0 && value.search(/^0/)) {
    //   return;
    // }

    setCalc(calc + value);
    console.log("value = ", value);
    console.log("calc = ", calc);


  }

  const negate = () => {
    if (calc.charAt(0) === "-") {
      setCalc(calc.substring(1));
    } else {
      setCalc("-" + calc);
    }
  }; 




  //keypad buttons
  const createDigits = () => {
    const digits = [];

    for(let i = 1; i<10; i++) {
      digits.push(
        <button
          onClick={() => updateCalc(i.toString())}
          key={i}>{i}
        </button>
      )
    }
    return digits;
  }


  //equals function
  const calculate = () => {
    setCalc(eval(calc).toString());   
  }

  //backspace (delete last char)
  const deleteLast = () => {
    if(calc === "") {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
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

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""}&nbsp;
          { calc || "0"}  
        </div>

        <div className="extraoperators">
          <button onClick={() => updateCalc("%")}>%</button>
          <button onClick={clearEntry} id="clearEntry">CE</button>
          <button onClick={clear} id="clear">C</button>
          <button onClick={() => updateCalc("1/x")}>1/x</button>
          <button onClick={() => updateCalc("pwr")}>x&sup2;</button>
          <button onClick={() => updateCalc("sqr")}>&radic;</button>
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


/*
const updateCalc = value => {

    if(
      ops.includes(value) && calc === "" || ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
    }

    const checkZero = () => {
      var val = value;
      if(val.charAt(0) === '0') {
        value = val.slice(1);
      }

      return value;
    }

    checkZero(calc);
    

    setCalc(calc + value);

    if(!ops.includes(value)){
      setResult(eval(calc + value).toString())
    }


  }

  const negate = () => {
    if (calc.charAt(0) === "-") {
      setCalc(calc.substring(1));
    } else {
      setCalc("-" + calc);
    }
  };
  */