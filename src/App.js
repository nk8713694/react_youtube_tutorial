import React, { createContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Button from '@material-ui/core/Button';
import { PokeMonAPI } from "./PokeMonAPI";

export default function App() {
  const [num, setNum] = useState(1);
  const [nums, setNums] = useState(99);


  return (
    <>
      <PokeMonAPI></PokeMonAPI>
    </>
  );
}
