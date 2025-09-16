import React, { useContext } from "react";
import "../styles/header.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeContext } from "../pages/Home";

interface HeaderProps {
  count: number;
  completed: number;
}

const Header: React.FC<HeaderProps> = ({ count, completed }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <header className={`header ${theme}`}>
      <div className="header-left">
        <h1>Today</h1>
        <span className="date">{today}</span>
      </div>
      <div className="header-right">
        <span className="task-count">
          {completed}/{count} Done
        </span>

        {theme === "light" ? (
          <button className="theme-btn" onClick={toggleTheme}>
            <DarkModeIcon className="theme-icon dark" />
          </button>
        ) : (
          <button className="theme-btn" onClick={toggleTheme}>
            <LightModeIcon className="theme-icon light" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
