import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, ArrowUp, Search } from "lucide-react";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const handleSearch = () => {
    // Pass the search query to parent component or context
    const event = new CustomEvent("search", { detail: searchQuery });
    window.dispatchEvent(event);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <h1>Youtube Filter</h1>
      <div className="header-controls">
        {location.pathname !== "/" && (
          <Link to="/" className="home-button-header">
            العودة إلى الصفحة الرئيسية
          </Link>
        )}
        <button id="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button id="back-to-top" onClick={scrollToTop}>
          <ArrowUp size={20} />
        </button>
      </div>
      <div className="search-container">
        <input
          id="search-input"
          className="search-input px-3 py-2 border border-gray-300 rounded-md text-gray-900 bg-white placeholder-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="ابحث عن فيديو"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          id="search-button"
          className="search-button"
          onClick={handleSearch}
        >
          <Search size={18} /> بحث
        </button>
      </div>
    </header>
  );
};

export default Header;
