import { Link } from "react-router-dom";
import React, { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import NewEmployee from "./NewEmployee";

function Employee() {
  const [addMode, setAddMode] = useState(false);
  console.log(addMode);
  return (
    <div className="w-full">
      <Header />

      <Button setAddMode={setAddMode} name="New" size={10} />
      {addMode ? <NewEmployee setAddMode={setAddMode} /> : null}
    </div>
  );
}

export default Employee;
