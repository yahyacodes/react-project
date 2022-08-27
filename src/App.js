import React, { useState } from "react";

import "./App.css";
import InputComponent from "./components/InputComponent";
import AddName from "./components/NewName/AddName";

function App() {
  const [nameList, setNameList] = useState([]);

  const addNameHandler = (uName, uAge) => {
    setNameList((prevNameList) => {
      return [...prevNameList, { name: uName, age: uAge }];
    });
  };
  return (
    <div>
      <AddName onInputComponent={addNameHandler} />
      <AddName names={InputComponent} />
    </div>
  );
}

export default App;
