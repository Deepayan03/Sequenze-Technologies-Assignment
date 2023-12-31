import {  useState } from "react";
import Sidebar from "./Sidebar";
import icon from "../Assets/Icon.svg";
// eslint-disable-next-line
const Navbar = ({children}) => {
  const [sideBar, setSideBar] = useState(true);
  return (
    <>
      <div className="navbar  bg-white">
        <div className="flex-none">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setSideBar(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <img src={icon} alt="icon" />
        </div>
        <div className="flex flex-row gap-5 justify-center">
          <div className="flex   flex-col gap-1 items-start">
            <p className="text-[14px] text-nowrap text-black  flex flex-row gap-2">
              <b>
                Free Trial{" "}
                <span className="font-thin text-[10px]">
                  {"   "}| 2 days left
                </span>
              </b>
            </p>
            <button className="text-[#FA782F] text-nowrap text-sm">
              Extend free trial
            </button>
          </div>
          <img className="w-9 h-9 rounded-full" src="https://via.placeholder.com/36x36" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="6"
            viewBox="0 0 10 6"
            fill="none">
            <path
              d="M1.41421 0C0.523309 0 0.077142 1.07714 0.707107 1.70711L4.29289 5.29289C4.68342 5.68342 5.31658 5.68342 5.70711 5.29289L9.29289 1.70711C9.92286 1.07714 9.47669 0 8.58579 0H1.41421Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <Sidebar sideBar={sideBar} setSideBar={setSideBar} />
      {children}
    </>
  );
};

export default Navbar;
