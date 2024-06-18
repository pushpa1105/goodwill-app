"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "@/components/logo";
import { AuthBox } from "@/components/nav-items/auth";

const NavBar = () => {
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all pt-4 md:pt-0 " +
          (scrollActive ? "bg-white shadow-2xl" : "bg-white shadow-md")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-4 lg:py-0 ">
          <div className="col-start-1 col-end-2 flex items-center w-10 lg:w-20">
            <Logo />
          </div>

          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <AuthBox/>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
