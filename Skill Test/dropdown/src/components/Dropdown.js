import React from "react";

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      {props.items.map((item) => (
        <p key={props.items.indexOf(item)} onClick={() => props.handleOnClick(item)}>{item}</p>
      ))}
    </div>
  );
};

export default Dropdown;
