import { useState } from 'react';
import { FaBackspace } from 'react-icons/fa';

function App() {

  const [calc, setCalc] = useState("");    //0 for negative numbers
  const [result, setResult] = useState("");
  const ops = ["/", "*", "+", "-", ".", "%", "C", "CE"];

  const updateCalc = value => {
    if(
      ops.includes(value) && calc === "" || ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return;
    }

    if(value === "C"){
      reset()
    }

    setCalc(calc + value);

    if(!ops.includes(value)){
      setResult(eval(calc + value).toString())
    }
  }


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

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
    if(calc === "") {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  }

  const reset = () => {
    this.setState({
        result: "0"
    })
  };

  

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""}&nbsp;
          { calc || "0"}  
        </div>

        <div className="extraoperators">
        <button onClick={() => updateCalc("%")}>%</button>
          <button>CE</button>
          <button onClick={() => updateCalc("C")}>C</button>
          <button>1/x</button>
          <button>pwr</button>
          <button>sqr</button>
        </div>

        <div className="operators">
          <button onClick={deleteLast}><FaBackspace /></button>

          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>x</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={() => updateCalc("+")}>+</button>
          
        </div>

        <div className="digits">
          { createDigits() }
        </div>

        <div className="bottom_row">
          <button>+/-</button>
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
