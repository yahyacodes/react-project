import React, { useState } from "react";

import Card from "./Card";
// import AddName from "./NewName/AddName";
import Button from "./Button";
import "./InputComponent.css";

const InputComponent = (props) => {
  const [addeNewdName, setAddedName] = useState();
  const [addedAge, setAddedAge] = useState();

  const addNameHandler = (event) => {
    event.preventDefault();
    console.log("submitted");
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
          <input id="name" type="text" onChange={inputChangeHandler} />

          <label htmlFor="age">Age:</label>
          <input id="age" type="number" onChange={inputAgeChangeHandler} />

          <Button type="submit">Add name</Button>
        </form>
      </div>
    </Card>
  );
};

export default InputComponent;
