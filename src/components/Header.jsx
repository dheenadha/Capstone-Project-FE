import React, { useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const nav__links = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/tours", display: "Tours" },
];

const Header = () => {
  const headerRef = useRef(null);

  // Sticky Navbar
  const stickyHeaderFunc = () => {
    if (window.scrollY > 80) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHeaderFunc);
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  return (
    <header ref={headerRef} className="w-full h-20 flex items-center">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-auto" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {nav__links.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `text-orange-500 font-medium text-lg no-underline hover:text-black transition ${
                  isActive ? "text-[var(--secondary-color)]" : ""
                }`
              }
            >
              {item.display}
            </NavLink>
          ))}
        </nav>

        {/* Right Side: Login + Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link to="/login">
            <button className="px-4 py-2 border-2 border-black font-bold rounded-md hover:bg-black hover:text-white transition">
              Login
            </button>
          </Link>

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-2xl text-gray-700">
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
