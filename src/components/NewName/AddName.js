import React from "react";

import InputComponent from "../InputComponent/InputComponent";
import Card from "../Card";

import "./AddName.css";

const AddName = (props) => {
  return (
    <Card className="card">
      <ul>
        {props.card.map((names) => (
          <li key={names.id}>
            {names.name} ({names.age} years old)
          </li>
        ))}
        <li></li>
      </ul>
    </Card>
  );
};

export default AddName;
