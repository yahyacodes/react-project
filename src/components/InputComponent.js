import React from "react";

import Card from "./Card";
import Button from "./Button";
import "./InputComponent.css";

const InputComponent = (props) => {
  return (
    <Card className="card">
      <div className="nameInput">
        <label htmlFor="name">Name:</label>
        <input type="text" />

        <label htmlFor="age">Age:</label>
        <input type="number" />

        <Button>Add User</Button>
      </div>
    </Card>
  );
};

export default InputComponent;
