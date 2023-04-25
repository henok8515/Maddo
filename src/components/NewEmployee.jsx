import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewEmployee({ setAddMode, setUsers, users, editMode }) {
  const [img, setImg] = useState("");
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    position: "",
    age: "",
    gender: "",
    salary: "",
    imgUrl: "",
  });
  console.log(img, "img");

  const userCollection = collection(db, "users");

  const createUser = async () => {
    try {
      await addDoc(userCollection, { ...newUser, imgUrl: img });
      alert(toast("Wow so easy!"));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  console.log(users, "users");
  const uploader = Uploader({
    apiKey: "free", // Get production API keys from Upload.io
  });

  // Configuration options: https://upload.io/uploader#customize
  const options = { multi: true };

  const handleSubmit = (e) => {
    // setEmployee((employees) => [...employees, newUser]);
    console.log(users, "users");
    e.preventDefault();
    createUser();
    setAddMode(false);
    setUsers([...users, newUser]);
  };
  return (
    <div class="relative z-10">
      <div class="container  mx-auto py-8 absolute">
        <h1 class="text-2xl font-bold mb-6 text-center">Add New Employee</h1>
        <form
          onSubmit={handleSubmit}
          class=" z-10  w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
        >
          <div className="flex justify-end w-full">
            <button
              onClick={() => setAddMode(false)}
              type="button"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span class="sr-only">Close menu</span>

              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Name
            </label>
            <input
              required={true}
              onChange={handleChange}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              id="name"
              value={newUser.name}
              name="name"
              placeholder="John Doe"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              required={true}
              onChange={handleChange}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="email"
              id="email"
              value={newUser.email}
              name="email"
              placeholder="john@example.com"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Position
            </label>
            <input
              required={true}
              onChange={handleChange}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              id="position"
              value={newUser.position}
              name="position"
              placeholder="Position"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Age
            </label>
            <input
              required={true}
              onChange={handleChange}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="number"
              id="age"
              value={newUser.age}
              name="age"
              placeholder="age"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Salary
            </label>
            <input
              required={true}
              onChange={handleChange}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="money"
              id="salary"
              value={newUser.salary}
              name="salary"
              placeholder="salary"
            />
          </div>
          <div class="mb-4">
            <UploadButton
              uploader={uploader}
              options={options}
              onComplete={(files) =>
                setImg(files.map((x) => x.fileUrl).join("\n"))
              }
            >
              {({ onClick }) => (
                <button onClick={onClick}>Upload a file...</button>
              )}
            </UploadButton>
          </div>

          <button
            class="w-full bg-indigo-500 text-white text-lg font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewEmployee;
