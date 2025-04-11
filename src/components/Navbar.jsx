// src/components/Navbar.jsx
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      className="fixed w-full bg-indigo-200 bg-opacity-90 backdrop-blur-sm z-50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div
            className="text-xl font-bold cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <NavLink to="/">aryan&apos;s hub</NavLink>
          </motion.div>
          <div className="hidden md:flex space-x-6">
            <NavItem title="Home" to="/" />
            <NavItem title="Essays" to="/essays" />
            <NavItem title="Random Thoughts" to="/thoughts" />
          </div>
          <div className="md:hidden">
            <MobileMenu />
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
        `cursor-pointer relative ${isActive ? 'text-blue-600' : 'text-gray-700'}`
      }
    >
      {({ isActive }) => (
        <>
          {title}
          {isActive && (
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
              layoutId="navIndicator"
            />
          )}
        </>
      )}
    </NavLink>
  )
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        className="text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-16 right-0 w-48 bg-white shadow-lg rounded-md py-2 px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-3">
              <MobileMenuItem label="Home" to="/" setIsOpen={setIsOpen} />
              <MobileMenuItem label="Essays" to="/essays" setIsOpen={setIsOpen} />
              <MobileMenuItem label="Random Thoughts" to="/thoughts" setIsOpen={setIsOpen} />
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
      className="cursor-pointer text-gray-700"
      onClick={() => setIsOpen(false)}
    >
      {label}
    </NavLink>
  )
}
