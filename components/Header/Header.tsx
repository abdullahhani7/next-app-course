"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 bg-white/95 backdrop-blur-sm shadow-sm w-full z-50">
      <div className="container m-auto xl:px-15 gap-2 px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <span className="text-2xl text-gray-600 font-bold">WEGO</span>
          </Link>
          <nav className="hidden md:flex space-x-5">
            <Link className="text-gray-800 hover:text-blue-600" href={"/posts"}>
              Posts
            </Link>
            <Link className="text-gray-800 hover:text-blue-600" href={"/about"}>
              About
            </Link>
            <Link
              className="text-gray-800 hover:text-blue-600"
              href={"/contact"}
            >
              Contact
            </Link>
          </nav>
          <button
            className="md:hidden "
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <MdClose /> : <IoMenu />}
          </button>

          <div className="hidden  md:flex space-x-3">
            <Link
              className="bg-blue-600 hover:bg-blue-800 text-white rounded-md py-2 px-3"
              href={"/login"}
            >
              Login
            </Link>
            <Link
              className="bg-blue-600 hover:bg-blue-800 text-white rounded-md py-2 px-3"
              href={"/register"}
            >
              Register
            </Link>
          </div>
        </div>
        {isOpen && (
          <nav className="flex gap-3 flex-col items-center mt-4  ">
            <Link className="text-gray-800 hover:text-blue-600" href={"/posts"}>
              Posts
            </Link>{" "}
            <Link className="text-gray-800 hover:text-blue-600" href={"/about"}>
              About
            </Link>
            <Link
              className="text-gray-800 hover:text-blue-600"
              href={"/contact"}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
