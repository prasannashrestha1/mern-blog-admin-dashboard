import { Button, DropdownDivider, Navbar, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Dropdown } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";
import { useSelector } from "react-redux";

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [isOpen, setIsOpen] = useState(false);
  const path = useLocation().pathname;
  return (
    // <Navbar className="border-b-2 flex justify-center">
    //   {/* Brand */}
    //   <Navbar.Brand>
    //     <Link
    //       to="/"
    //       className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
    //     >
    //       <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-white">
    //         PB
    //       </span>
    //     </Link>
    //   </Navbar.Brand>

    //   {/* Search */}
    //   <form className="px-2 hover:border-red-600 max-w-xs hidden lg:block">
    //     <TextInput className="" placeholder="Search" type="text" />
    //   </form>

    //   {/* Mobile Search Button */}
    //   <Button className="lg:hidden rounded-3xl">
    //     <AiOutlineSearch style={{ color: "black" }} />
    //   </Button>

    //   {/* Right Side Actions */}
    //   <div className="flex gap-2 md:order-2">
    //     <Button className="bg-gray-500 rounded-3xl hidden sm:inline border-none px-2">
    //       <FaMoon style={{ color: "white" }} />
    //     </Button>

    //     <Link to="/signin">
    //       <Button className="bg-gradient-to-r from-purple-500 to-blue-600 border-none rounded-xl text-3xl font-bold  px-4">
    //         Sign In
    //       </Button>
    //     </Link>

    //     <Navbar.Toggle />
    //   </div>
    //   <div>
    //     <Navbar.Collapse>
    //       <Navbar.Link active={path === "/"} as={"div"}>
    //         <Link to="/" className="text-gray-900 dark:text-white px-2">
    //           Home
    //         </Link>
    //       </Navbar.Link>
    //       <Navbar.Link active={path === "/about"} as={"div"}>
    //         <Link to="/about" className="text-gray-900 dark:text-white px-2">
    //           About
    //         </Link>
    //       </Navbar.Link>
    //       <Navbar.Link active={path === "/projects"} as={"div"}>
    //         <Link to="/projects" className="text-gray-900 dark:text-white px-2">
    //           Projects
    //         </Link>
    //       </Navbar.Link>
    //     </Navbar.Collapse>
    //   </div>
    // </Navbar>
    <div className="p-4 bg-[#1F1F1F] border-b-2 border-gray-600 flex-col lg:flex-row flex justify-center items-center gap-5">
      {/* header */}
      <div className="max-w-[1660px] w-full flex-1 flex justify-between ">
        <div className="flex items-center font-semibold text-xl text-white">
          <span className="p-3 rounded-full text-nowrap bg-gradient-to-r from-indigo-500 to-pink-500  ">
            PB
          </span>
          Blogs
        </div>
        {/* search box */}
        <div className=" gap-4 items-center hidden sm:flex text-white">
          <form className="flex items-center max-w-[250px] mx-auto ">
            <div className="flex items-center border-2 bg-gray-50 p-3 border-slate-300 text-gray-900 text-sm rounded-lg  focus-within:ring-blue-500 focus-within:border-blue-500  w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-within:ring-blue-500 dark:focus-within:border-blue-500">
              <input
                type="text"
                id="voice-search"
                className=" border-none focus:outline-none focus:border-none bg-transparent focus:ring-0 hidden lg:flex p-0"
                placeholder="Search"
                required
              />
              <FaSearch color="black" />
            </div>
          </form>

          <div className="hidden gap-4 font-semibold  lg:flex ">
            <Link
              to="/"
              className="hover:text-blue-400 border-[#1F1F1F] hover:border-blue-400 border-b-2"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="border-[#1F1F1F] hover:text-blue-400 hover:border-blue-400 border-b-2 transition ease-in-out duration-500"
            >
              About
            </Link>

            <Link
              to="/Projects"
              className="border-[#1F1F1F] hover:text-blue-400 hover:border-blue-400 border-b-2 transition ease-in-out duration-500"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* sigin and profile */}
        <div className=" flex items-center gap-4">
          <button className="bg-gradient-to-r border-slate-400 border-2 from-purple-400 to-red-400 hover:bg-gradient-to-l py-2 px-4 rounded-2xl text-white font-semibold transition ease-in-out duration-300  ">
            Signin
          </button>
          {/* <Dropdown
            icon={HiViewGrid}
            className="bg-[#1F1F1F] text-white min-w-[500px]"
          >
            <Dropdown.Header>
              <span className="block text-sm">{currentUser.username}</span>
              <span className="block truncate text-sm font-medium">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <DropdownDivider className="bg-white" />
            <Dropdown.Item className="hover:bg-gray-700" icon={HiViewGrid}>
              <Link to="/dashboard"> Dashboard </Link>
            </Dropdown.Item>
            <Dropdown.Item className="hover:bg-gray-700" icon={HiCog}>
              Home
            </Dropdown.Item>
            <Dropdown.Item className="hover:bg-gray-700" icon={HiLogout}>
              Sign out
            </Dropdown.Item>
          </Dropdown> */}

          <div className="bg-transparent hover:bg-black-300">
            {isOpen ? (
              <IoCloseSharp
                className="w-[20px] h-[20px] block lg:hidden cursor-pointer"
                color="white"
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              <GiHamburgerMenu
                className="w-[20px] h-[20px] block lg:hidden cursor-pointer"
                color="white"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className=" w-full flex border-2 border-[#333232] bg-[#1B1B1B] rounded-2xl justify-center lg:hidden text-white">
          {" "}
          <div className="flex flex-col font-semibold items-center p-4">
            <Link
              to="/"
              className="hover:text-blue-400 hover:border-blue-400 border-[#333232] border-b-2 transition ease-in-out duration-500 p-4 w-full text-center"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-blue-400 hover:border-blue-400 border-[#333232]  border-b-2 transition ease-in-out duration-500 p-4 w-full text-center"
            >
              About
            </Link>

            <Link
              to="/Projects"
              className="hover:text-blue-400 hover:border-blue-400 border-[#333232] border-b-2 transition ease-in-out duration-500 p-4 w-full text-center"
            >
              Contact
            </Link>
            <form className=" items-center max-w-[250px] mx-auto flex sm:hidden mb-4">
              <div className="flex items-center mt-3 border-2 bg-gray-50 p-3 border-slate-300 text-gray-900 text-sm rounded-lg  focus-within:ring-blue-500 focus-within:border-blue-500  w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-within:ring-blue-500 dark:focus-within:border-blue-500">
                <input
                  type="text"
                  id="voice-search"
                  className=" border-none focus:outline-none focus:border-none bg-transparent focus:ring-0 flex p-0"
                  placeholder="Search"
                  required
                />
                <FaSearch color="black" />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
