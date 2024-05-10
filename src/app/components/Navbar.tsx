"use client";

import React, { FC, useState } from "react";
import NavbarItems from "./NavbarItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import NavbarMobile from "./NavbarMobile";
import { usePathname } from "next/navigation";

const Navbar: FC = () => {
  const pathname = usePathname();
  const [navbarMobile, setNavbarMobile] = useState(false);
  return (
    <main>
      <div
        className={`fixed ${pathname !== "/" && "bg-white"} z-50 top-0 w-full`}
      >
        <nav className="container p-0 flex">
          <div className="w-1/2 md:w-1/6">
            <span></span>
          </div>
          <div className="w-1/2 md:w-5/6 flex justify-end">
            {/* Show the Flex Row Navbar in Destop [ Medium Breakpoint ] */}
            <div className="hidden md:block py-4">
              <NavbarItems />
            </div>

            {/* Show Column Navbar in Mobile */}
            <div className="block md:hidden py-4 px-4">
              <button
                className="bg-transparent"
                onClick={() => {
                  setNavbarMobile(!!!navbarMobile);
                }}
              >
                <FontAwesomeIcon
                  icon={!navbarMobile ? faBars : faBarsStaggered}
                  className={`font-bold ${navbarMobile && "text-primary"}`}
                  style={{ fontSize: 30 }}
                />
              </button>
            </div>
          </div>
        </nav>
        {/* Show Navbar Mobile if the Triger is clicked */}
        {navbarMobile && (
          <div className="block md:hidden py-4 px-4">
            <NavbarMobile />
          </div>
        )}
      </div>
    </main>
  );
};

export default Navbar;
