"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={100} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <a
              href={link.href}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="lg:flexCenter hidden"></div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />

      {menuOpen && (
        <div className="absolute top-0 right-0 mt-16 mr-5 w-40 bg-white shadow-lg rounded-lg lg:hidden">
          <ul className="flex flex-col p-4">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="mb-4">
                <a
                  href={link.href}
                  className="regular-16 text-gray-800 cursor-pointer transition-all hover:font-bold"
                  onClick={toggleMenu} // Close the menu when a link is clicked
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
