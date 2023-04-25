import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";

function NewEmployee({ setAddMode, setUsers, users }) {
  const [newUser, setNewUser] = useState({
    id: uuidv4(),
    name: "",
    email: "",
    position: "",
    age: "",
    gender: "",
    salary: "",
  });

  const userCollection = collection(db, "users");

  const createUser = async () => {
    await addDoc(userCollection, newUser);
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  console.log(users, "users");

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
