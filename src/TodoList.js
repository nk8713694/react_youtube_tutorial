import React, { useState } from "react";
import EachTodo from "./EachTodo";

export default function TodoList() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  String.prototype.doSomeThing = ()=>{
    console.log("Hi from do something")
} 
  const itemEvent = (e) => {
      "Hii".doSomeThing()
    setInputList(e.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deletedItems = (id) => {
    console.log("deleted");
    setItems((oldItems)=>oldItems.filter((arrElem,index)=>id!=index))
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        TodoList
        <br />
        <input
          type="text"
          placeholder="add a item"
          onChange={itemEvent}
          value={inputList}
        />
        <button onClick={listOfItems}>add</button>
        <ul>
          {Items.map((itemval, index) => {
            return (
              <EachTodo id={index} key={index} text={itemval} onSelect={deletedItems} />
            );
          })}
        </ul>
      </div>
    </>
  );
}
