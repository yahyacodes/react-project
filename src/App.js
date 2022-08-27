import React, { useState } from "react";

import "./App.css";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const AddUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUsers onAddUser={AddUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
