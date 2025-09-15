import React from "react";
import "../styles/header.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface HeaderProps {
  count: number;
  completed: number;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

const Header: React.FC<HeaderProps> = ({ count, completed, theme, setTheme }) => {
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
          <button
            className="theme-btn"
            onClick={() => setTheme("dark")}
          >
            <DarkModeIcon className="theme-icon dark" />
          </button>
        ) : (
          <button
            className="theme-btn"
            onClick={() => setTheme("light")}
          >
            <LightModeIcon className="theme-icon light" />
          </button>
        )}

      </div>
    </header>
  );
};

export default Header;
