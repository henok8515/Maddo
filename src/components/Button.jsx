import React from "react";
import { Typography } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

function Button(props) {
  return (
    <div className="w-full flex justify-end">
      <button
        onClick={() => props.setAddMode((addMode) => !addMode)}
        className="mr-4 mt-4 items-center self-end flex justify-around bg-transparent bg-black text-white w-40   mb-8 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-none hover:border-transparent rounded"
      >
        <Typography variant="h6">{props.name}</Typography>
        <PersonAddAltIcon />
      </button>
    </div>
  );
}

export default Button;
