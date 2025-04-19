// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react' // Import useState, useEffect
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react' // Import icons

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      return savedMode === 'true';
    }
    // Default to dark mode if no preference saved and system isn't explicitly light
    return !(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches);
  });

  useEffect(() => {
    // Apply class to HTML element and save preference
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <motion.nav
      className="fixed w-full bg-[var(--nav-bg)] bg-opacity-90 backdrop-blur-sm z-50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div
            className="text-xl font-bold cursor-pointer text-gray-900 dark:text-gray-100" // Adjusted text color
            whileHover={{ scale: 1.05 }}
          >
            <NavLink to="/">aryan&apos;s hub</NavLink>
          </motion.div>
          <div className="hidden md:flex items-center space-x-6"> {/* Added items-center */}
            <NavItem title="Home" to="/" />
            <NavItem title="Essays" to="/essays" />
            <NavItem title="Random Thoughts" to="/thoughts" />
            {/* Dark Mode Toggle Button - Desktop */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <div className="md:hidden">
            {/* Pass theme state and toggle function to MobileMenu */}
            <MobileMenu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

function NavItem({ title, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `cursor-pointer relative ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200` // Adjusted colors
      }
    >
      {({ isActive }) => (
        <>
          {title}
          {isActive && (
            <motion.div
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400" // Adjusted indicator color
              layoutId="navIndicator"
            />
          )}
        </>
      )}
    </NavLink>
  )
}

// Accept theme state and toggle function as props
function MobileMenu({ isDarkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        className="text-gray-700 dark:text-gray-300 p-2" // Adjusted color
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />} {/* Use Menu/X icons */}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-16 right-4 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 px-4 border border-gray-200 dark:border-gray-700" // Adjusted background and border
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            <div className="space-y-3 flex flex-col items-start"> {/* Align items start */}
              <MobileMenuItem label="Home" to="/" setIsOpen={setIsOpen} />
              <MobileMenuItem label="Essays" to="/essays" setIsOpen={setIsOpen} />
              <MobileMenuItem label="Random Thoughts" to="/thoughts" setIsOpen={setIsOpen} />
              {/* Dark Mode Toggle Button - Mobile */}
              <button
                onClick={() => {
                  toggleDarkMode();
                  // Optionally close menu on toggle, or keep it open
                  // setIsOpen(false);
                }}
                className="flex items-center w-full text-left py-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={18} className="mr-2" /> : <Moon size={18} className="mr-2" />}
                <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileMenuItem({ label, to, setIsOpen }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `w-full text-left py-1 ${isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-700 dark:text-gray-300'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200` // Adjusted colors
      }
      onClick={() => setIsOpen(false)}
    >
      {label}
    </NavLink>
  )
}
