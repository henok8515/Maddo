import React, { useState } from "react";

function NewEmployee({ setAddMode }) {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    position: "",
    Age: "",
    gender: {
      male: "",
      female: "",
    },
  });
  const handleChange = () => {
    console.log("hello world");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div class="bg-gray-100">
      <div class="container mx-auto py-8">
        <h1 class="text-2xl font-bold mb-6 text-center">Add New Employee</h1>
        <form
          onSubmit={handleSubmit}
          class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
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
            <label class="block text-gray-700 text-sm font-bold mb-2" for="age">
              Age
            </label>
            <input
              required={true}
              onChange={handleChange}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="date"
              id="age"
              value={newUser.Age}
              name="age"
              placeholder="Age"
            />
          </div>

          <div class="flex gap-10">
            <div class="inline-flex items-center">
              <label
                class="relative flex cursor-pointer items-center rounded-full p-3"
                for="ripple-on"
                data-ripple-dark="true"
              >
                <input
                  required={true}
                  onChange={handleChange}
                  id="ripple-on"
                  name="ripple"
                  value={newUser.gender.male}
                  type="radio"
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                  checked
                />
                <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              <label
                class="mt-px cursor-pointer select-none font-light text-gray-700"
                for="ripple-on"
              >
                Male
              </label>
            </div>
            <div class="inline-flex items-center">
              <label
                class="relative flex cursor-pointer items-center rounded-full p-3"
                for="ripple-off"
              >
                <input
                  required={true}
                  onChange={handleChange}
                  id="ripple-off"
                  name="ripple"
                  value={newUser.gender.female}
                  type="radio"
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                />
                <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              <label
                class="mt-px cursor-pointer select-none font-light text-gray-700"
                for="ripple-off"
              >
                Female
              </label>
            </div>
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
