import React, { useState } from "react";

import Card from "./Card";
import Button from "./Button";
import "./InputComponent.css";

const InputComponent = (props) => {
  const [addedName, setAddedName] = useState();
  const [addedAge, setAddedAge] = useState();

  const addNameHandler = (event) => {
    event.preventDefault();

    setAddedName("");
    setAddedAge("");
  };

  const inputChangeHandler = (event) => {
    setAddedName(event.target.value);
  };

  const inputAgeChangeHandler = (event) => {
    setAddedAge(event.target.value);
  };

  return (
    <Card className="card">
      <div className="nameInput">
        <form onSubmit={addNameHandler}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            value={addedName}
            type="text"
            onChange={inputChangeHandler}
          />

          <label htmlFor="age">Age:</label>
          <input
            id="age"
            value={addedAge}
            type="number"
            onChange={inputAgeChangeHandler}
          />

          <Button type="submit">Add name</Button>
        </form>
      </div>
    </Card>
  );
};

export default InputComponent;
