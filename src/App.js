import React, { createContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Button from '@material-ui/core/Button';

import { add, sub, mult, divide } from "./Calc";
// import List from "./Profile";

// import Greet from "./greet";

// import Func from "./Netflix";

// import Count from "./lec30";

// import Count1 from "./Challenge6";
// import spreadOperator from "./spreadOperator";
// import TodoList from "./TodoList";
import { ComA } from "./ComA";

// const FirstName = createContext();

// const LastName = createContext();

export default function App() {
  const [num, setNum] = useState(1);
  const [nums, setNums] = useState(99);
  useEffect(() => {
    alert("hello");
    console.log("i am clicked again");
    document.title=`i am template string  ${num}`
    
  },[num])

  return (
    <>
      <Button variant="contained" color="primary" style={{"marginBottom":"10px"}}
        onClick={() => {
          setNum(num + 1);
        }}
      >
        my button {num}
      </Button>
      <br/>
      <Button variant="contained" color="secondary"
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        my button {nums}
      </Button>
    </>
  );
}

// export {FirstName,LastName};

//    {/* <Func imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"/>
//     <h1> the subtract of two nos is  {sub(2,3)}</h1>
//     <h1> the mult of two nos is  {mult(2,3)}</h1>
//     <h1> the divide of two nos is  {divide(2,3)}</h1>   */}

//     {/* <Count/> */}
// {/*
//     <Count1/> */}

// {/*
//     <TodoList/> */}
