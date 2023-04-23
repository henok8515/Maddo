import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { TextField } from "@mui/material";

function Header() {
  return (
    <div className="h-20 flex items-center justify-end ">
      <div className="w-1/5 mr-10 flex items-center justify-between">
        <TextField id="standard-basic" label="Search" variant="standard" />
        <NotificationsNoneOutlinedIcon fontSize="large" />
      </div>
    </div>
  );
}

export default Header;
