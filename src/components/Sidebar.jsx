import icon from "../Assets/Icon.svg";
import coinStack from "../Assets/9055184_bxs_coin_stack_icon 1.svg";
import sampleProjectIcon from "../Assets/SampleProjectsLogo.svg";
import AppsLogo from "../Assets/Apps.svg";
import intro from "../Assets/IntroToNeuCleo.svg";
import feedback from "../Assets/feedback.svg";
import collapse from "../Assets/collapse.svg";
import help from "../Assets/support.svg";
// import { useState } from "react";
import {  NavLink } from "react-router-dom";
// eslint-disable-next-line
const Sidebar = ({ sideBar, setSideBar }) => {
  // const [selectedField , setSelectedField] = useState("");
  return (
    <div className="drawer">
      <input
        id="my-drawer"
        type="checkbox"
        checked={sideBar}
        hidden
        className="drawer-toggle"
      />
      <div className="drawer-side w-[270px]  z-50">
        <div className="menu p-1 w-[270px] min-h-full text-base-content bg-white flex flex-col gap-5 ">
          {/* IconDiv */}
          <div className="flex flex-col justify-center items-center gap-4">
            <img src={icon} alt="icon" className="w-[76.11px] h-[50px]" />
          </div>
          <div className="flex flex-col flex-grow justify-between">
            <div className="flex w-full flex-col gap-4 items-center ">
              {/* Section-1 */}
              <div className="h-[1.5px] w-[90%] bg-[#000000] opacity-20"></div>
              <div className="flex flex-col w-full pl-8 items-start gap-4">
                <NavLink
                  to={"/"}
                  activeClassName="active"
                  className="text-sm flex flex-row gap-2 font-bold cursor-pointer">
                  <img src={coinStack} alt="icon" className="h-5 w-5 fill-current" />
                  My projects
                </NavLink>

                <NavLink
                  to={"/sampleProjects"}
                  activeClassName="active"
                  className="text-sm flex flex-row gap-3 text-nowrap font-semibold cursor-pointer">
                  <img src={sampleProjectIcon} alt="icon" className="h-5 w-5 fill-inherit" />
                  Sample Projects
                </NavLink>
              </div>
              {/* Seperator */}
              <div className="h-[1.5px] w-[90%] bg-[#000000] opacity-20"></div>
              {/* Section-2 starts */}
              <div className="flex flex-col w-full pl-8 items-start gap-4 ">
                <a className="text-[#C4C4C4] flex flex-row text-sm font-semibold gap-3 cursor-pointer">
                  <img src={AppsLogo} alt="icon" className="h-5 w-5" />
                  Apps
                </a>
                <a className="text-[#C4C4C4] flex flex-row text-sm text-nowrap font-semibold gap-3 cursor-pointer">
                  <img src={intro} alt="icon" className="h-5 w-5" />
                  Intro to Nucleo
                </a>
              </div>
            </div>
            <div className="flex w-full flex-col gap-4 items-center ">
              {/* Section-3 */}
              <div className="flex flex-col w-full pl-8 items-start gap-4 pb-6">
                <a className="text-[#C4C4C4] flex flex-row text-sm gap-2 font-bold cursor-pointer">
                  <img src={help} alt="icon" className="h-5 w-5" />
                  Help and Support
                </a>

                <a className="text-[#C4C4C4] flex flex-row text-sm gap-3 text-nowrap font-semibold cursor-pointer">
                  <img src={feedback} alt="icon" className="h-5 w-5" />
                  Feedback
                </a>
                <a
                  className="text-[black] flex flex-row text-sm gap-3 text-nowrap font-semibold cursor-pointer"
                  onClick={() => setSideBar(false)}>
                  <img src={collapse} alt="icon" className="h-5 w-5" />
                  Collapse
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
