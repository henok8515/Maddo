import React from "react";

function Left() {
  return (
    <div
      className="
      flex text-center
       justify-between
    max-w-sm rounded overflow-hidden w-72 shadow-lg items-center bg-slate-400 h-screen flex flex-col justify-between "
    >
      <div className="flex-2-500">
        <h1>Madoo </h1>

        <img
          className="w-full bg-red-500 h-44 w-44 rounded-full  flex items-center justify-center "
          src="/img/card-top.jpg"
          alt=""
        />
      </div>
      <div className=" flex-1 flex justify-center px-6 py-4 flex flex-col">
        <button>Home</button>
        <button>Employees</button>
        <button>Home</button>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button>Log out</button>
      </div>
    </div>
  );
}

export default Left;
