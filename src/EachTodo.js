import React from "react";

export default function EachTodo({id,text,onSelect}) {
  return (
    <>
      <i
        className="fa fa-times"
        aria-hidden="true"
        onClick={() => {
          onSelect(id);
        }}
      />{" "}
      &nbsp;&nbsp;
      <li style={{ display: "inline" }}>{text}</li>
      <br />
    </>
  );
}
