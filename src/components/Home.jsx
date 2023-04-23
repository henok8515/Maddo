import { ArrowForwardOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import Header from "./Header";

function Home() {
  return (
    <div className="h-screen  flex-1">
      <Header />
      <div className="flex justify-around w-4/6">
        <div class="  border-solid w-fit border-2  border-indigo-600 rounded-md">
          <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
            <div class="h-full w-full">
              <div class="relative w-full">
                <img
                  src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
                  class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                  alt=""
                />
              </div>
              <div class="mb-3 flex items-center justify-between px-1 md:items-start">
                <div class="mb-2">
                  <button className="items-center flex justify-between w-full bg-transparent mb-8 hover:bg-blue-700  text-blue-700 font-semibold hover:text-white py-2 px-4 border border-none hover:border-transparent rounded">
                    <Typography variant="h6">Employees </Typography>
                    <ArrowForwardOutlined />
                  </button>
                </div>
              </div>
              <div class="flex items-center justify-between md:items-center lg:justify-between ">
                <div class="flex">
                  <p class="!mb-0 text-4xl font-bold ">100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border-solid w-fit border-2 rounded-md border-indigo-600">
          <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
            <div class="h-full w-full">
              <div class="relative w-full">
                <img
                  src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
                  class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                  alt=""
                />
              </div>
              <div class="mb-3 flex items-center justify-between px-1 md:items-start">
                <div class="mb-2">
                  <button className="items-center flex justify-between w-full bg-transparent mb-8 hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-none hover:border-transparent rounded">
                    <Typography variant="h6">Payment</Typography>
                    <ArrowForwardOutlined />
                  </button>
                </div>
              </div>
              <div class="flex items-center justify-between md:items-center lg:justify-between ">
                <div class="flex">
                  <p class="!mb-0 text-4xl font-bold ">100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border-solid w-fit border-2 rounded-md border-indigo-600">
          <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
            <div class="h-full w-full">
              <div class="relative w-full">
                <img
                  src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png"
                  class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                  alt=""
                />
              </div>
              <div class="mb-3 flex items-center justify-between px-1 md:items-start">
                <div class="mb-2">
                  <button className="items-center flex justify-between w-full bg-transparent mb-8 hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-none hover:border-transparent rounded">
                    <Typography variant="h6">Employees </Typography>
                    <ArrowForwardOutlined />
                  </button>
                </div>
              </div>
              <div class="flex items-center justify-between md:items-center lg:justify-between ">
                <div class="flex ">
                  <p class="!mb-0 text-4xl font-bold ">100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
