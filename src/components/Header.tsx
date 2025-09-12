import React from "react";
import "../styles/header.css";

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
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? " Dark" : "Light"}
        </button>
      </div>
    </header>
  );
};

export default Header;
