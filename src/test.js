

        <div className="digits">
          { createDigits() }
          {/* <button onClick={() => updateCalc("0")}>0</button> */}
          
          {/* <button onClick={calculate}>=</button> */}

        </div>

        <div className="bottom_row">
          <button>+/-</button>
          <button>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
        </div>

        <div className="sidebar">
          <button>DEL</button>
          <button>/</button>
          <button>x</button>
          <button>-</button>
          <button>+</button>
        </div>

        <div className="equals">
          <button>=</button>
        </div>



.digits {
    display: flex;
    flex-wrap: wrap;
  }
  
  .digits button {
    flex: 1 1 32.7%;
    max-width: 32.7%;
    background-color: #2c2c2c;
    margin-block-start: 2px;
    margin: 1px;
  }
  
  .digits button:hover {
    background-color: #474647;
  }
  
  .bottom_row {
    display: flex;
  }
  
  .bottom_row button {
    flex: 1 1 0%;
    font-weight: 700;
    background-color: rgb(51, 51, 51);
    margin: 1px;
  }
  
  .extraoperators {
    display: flex;
  }
  
  .extraoperators button {
    flex: 0 0 0%;
    background-color: var(--primary);
    margin: 1px;
  }
  
  .sidebar {
    display: grid;
    max-width: 5px;
  }
  
  .sidebar button {
    flex: 1 1 0%;
    background-color: var(--primary);
    margin: 1px;
  }