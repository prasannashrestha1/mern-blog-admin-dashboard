import { Button, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 flex justify-center">
      {/* Brand */}
      <Navbar.Brand>
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-white">
            PB
          </span>
        </Link>
      </Navbar.Brand>

      {/* Search */}
      <form className="px-2 hover:border-red-600 max-w-xs hidden lg:block">
        <TextInput className="" placeholder="Search" type="text" />
      </form>

      {/* Mobile Search Button */}
      <Button className="lg:hidden rounded-3xl">
        <AiOutlineSearch style={{ color: "black" }} />
      </Button>

      {/* Right Side Actions */}
      <div className="flex gap-2 md:order-2">
        <Button className="bg-gray-500 rounded-3xl hidden sm:inline border-none px-2">
          <FaMoon style={{ color: "white" }} />
        </Button>

        <Link to="/signin">
          <Button className="bg-gradient-to-r from-purple-500 to-blue-600 border-none rounded-xl text-3xl font-bold  px-4">
            Sign In
          </Button>
        </Link>

        <Navbar.Toggle />
      </div>
      <div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/" className="text-gray-900 dark:text-white px-2">
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about" className="text-gray-900 dark:text-white px-2">
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/projects"} as={"div"}>
            <Link to="/projects" className="text-gray-900 dark:text-white px-2">
              Projects
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
