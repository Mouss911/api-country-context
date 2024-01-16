import React, { useState, useEffect } from "react";
import { IoIosMoon } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa6";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="pt-3 p-2 px-0 fixed-top elements">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="fw-bold">Where in the World?</h1>
        <button
          className="border-0 elements m-0 p-0 pb-2 btnTheme fw-bold"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <IoIosMoon className="bg-transparent  me-1 fs-5 mt-0" />
          ) : (
            <FaRegMoon className="bg-transparent  me-1 fs-5 mt-0" />
          )}
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
