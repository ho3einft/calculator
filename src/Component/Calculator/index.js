import { computeHeadingLevel } from "@testing-library/react";
import React, { useState } from "react";
import { Screen, Previous, Current, Button } from "../styled";
import "./index.css";

function Calculator() {
  const [number, setNumber] = useState("");
  const [exnumber, setExnumber] = useState("");
  const [operation, setOperation] = useState("");
  function value(e) {
    const hossein = e.target.getAttribute("data");
    if (number.includes(".") && hossein == ".") return;
    setNumber(number + hossein);
    console.log(number);
  }
  function reset() {
    setNumber("");
    setOperation("");
    setExnumber("");
  }
  const remove = () => {
    setNumber(number.slice(0, -1));
  };
  const oprator = (e) => {
    if (number == "") return;
    else if (exnumber !== "" && number !== "") {
      let hasan = comput();
      setExnumber(hasan);
    } else {
      setExnumber(number);
    }
    setNumber("");
    setOperation(e.target.getAttribute("data"));
  };
  const comput = () => {
    let previousNumber = parseFloat(exnumber);
    let currentNumber = parseFloat(number);
    if (operation == "+") return previousNumber + currentNumber;
    else if (operation == "-") return previousNumber - currentNumber;
    else if (operation == "÷") return previousNumber / currentNumber;
    else if (operation == "×") return previousNumber * currentNumber;
  };
  const equalOperator = () => {
    setNumber(comput);
    setExnumber("");
    setOperation("");
  };

  return (
    <div className="Countainer">
      <Screen>
        <Previous>
          {exnumber} {operation}
        </Previous>
        <Current>{number}</Current>
      </Screen>
      <Button extend={2} onClick={reset}>
        AC
      </Button>
      <Button onClick={remove}>DEL</Button>
      <Button data={"÷"} gray onClick={oprator}>
        ÷
      </Button>
      <Button data={"7"} onClick={value}>
        7
      </Button>
      <Button data={"8"} onClick={value}>
        8
      </Button>
      <Button data={"9"} onClick={value}>
        9
      </Button>
      <Button data={"×"} gray onClick={oprator}>
        ×
      </Button>
      <Button data={"4"} onClick={value}>
        4
      </Button>
      <Button data={"5"} onClick={value}>
        5
      </Button>
      <Button data={"6"} onClick={value}>
        6
      </Button>
      <Button data={"+"} gray onClick={oprator}>
        +
      </Button>
      <Button data={"1"} onClick={value}>
        1
      </Button>
      <Button data={"2"} onClick={value}>
        2
      </Button>
      <Button data={"3"} onClick={value}>
        3
      </Button>
      <Button data={"-"} gray onClick={oprator}>
        -
      </Button>
      <Button skyblue data={"."} onClick={value}>
        .
      </Button>
      <Button data={"0"} onClick={value}>
        0
      </Button>
      <Button equal onClick={equalOperator}>
        =
      </Button>
      {/* <Usetimer></Usetimer> */}
    </div>
  );
}

export default Calculator;
