import React, { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import clsx from 'clsx';
import logo from "../../assets/Image/web-development.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = () => setMenuOpen(!menuOpen);
  const closeDrawer = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 bg-[#c3caba] flex justify-between items-center px-6 py-4 md:px-20 text-[#4B164C] shadow-md z-50">
      {/* Logo */}
      <img src={logo} alt='logo' width={20} height={20} />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-semibold text-md">
        <li><a href="#About" className="hover:text-white transition">About</a></li>
        <li><a href="#Experience" className="hover:text-white transition">Experience</a></li>
        <li><a href="#Projects" className="hover:text-white transition">Projects</a></li>
        <li><a href="#Footer" className="hover:text-white transition">Contact</a></li>
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden z-50">
        <button onClick={toggleDrawer}>
          {menuOpen ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer Menu */}
      <div
        className={clsx(
          "fixed top-0 right-0 w-64 h-full bg-[#2D2D2D] text-white transform transition-transform duration-300 z-50",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <ul className="flex flex-col gap-6 pt-20 px-6 font-semibold text-lg">
          <li><a href="#About" onClick={closeDrawer}>About</a></li>
          <li><a href="#Experience" onClick={closeDrawer}>Experience</a></li>
          <li><a href="#Projects" onClick={closeDrawer}>Projects</a></li>
          <li><a href="#Footer" onClick={closeDrawer}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
