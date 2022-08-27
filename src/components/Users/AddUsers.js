import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUsers.css";

const AddUsers = (props) => {
  const [addUser, setAddUser] = useState("");
  const [addedAge, setAddedAge] = useState("");

  const AddUserHandler = (event) => {
    event.preventDefault();

    if (addUser.trim().length === 0 || addedAge.trim().length === 0) {
      alert("Please fill in all the fields");
      return;
    }

    if (+addedAge < 1) {
      alert("Please use valid ' Number '");
      return;
    }

    props.onAddUser(addUser, addedAge);
    setAddUser("");
    setAddedAge("");
  };

  const inputChangeHandler = (event) => {
    setAddUser(event.target.value);
  };

  const inputAgeChangeHandler = (event) => {
    setAddedAge(event.target.value);
  };

  return (
    <Card>
      <div className="nameInput">
        <form onSubmit={AddUserHandler}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            value={addUser}
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

export default AddUsers;
