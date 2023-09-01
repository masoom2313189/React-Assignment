import React, { Component } from "react";

// Complete this Component
const ListItem = ({ icon, name, link, bgColor }) => {
  return (
    <div
      className="ListItem"
      style={{
        height: 30,
        backgroundColor: bgColor,
      }}
    >
      <img src={icon} alt={name} />
      <a href={link}>{name}</a>
    </div>
  );
};

export default ListItem;
