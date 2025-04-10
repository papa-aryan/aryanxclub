// src/components/Navbar.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ currentPage, setCurrentPage }) {
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
            onClick={() => setCurrentPage('home')}
          >
            aryan's hub
          </motion.div>

          <div className="hidden md:flex space-x-6">
            <NavItem title="Home" page="home" currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <NavItem title="Essays" page="essays" currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <NavItem title="Random Thoughts" page="thoughts" currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>

          <div className="md:hidden">
            <MobileMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

// ---------------------
// NavItem subcomponent
function NavItem({ title, page, currentPage, setCurrentPage }) {
  return (
    <motion.div
      className={`cursor-pointer relative ${currentPage === page ? 'text-blue-600' : 'text-gray-700'}`}
      onClick={() => setCurrentPage(page)}
      whileHover={{ scale: 1.05 }}
    >
      {title}
      {currentPage === page && (
        <motion.div
          className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
          layoutId="navIndicator"
        />
      )}
    </motion.div>
  )
}

// ---------------------
// MobileMenu subcomponent
function MobileMenu({ currentPage, setCurrentPage }) {
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
              <MenuItem label="Home" page="home" currentPage={currentPage} setCurrentPage={setCurrentPage} setIsOpen={setIsOpen} />
              <MenuItem label="Essays" page="essays" currentPage={currentPage} setCurrentPage={setCurrentPage} setIsOpen={setIsOpen} />
              <MenuItem label="Random Thoughts" page="thoughts" currentPage={currentPage} setCurrentPage={setCurrentPage} setIsOpen={setIsOpen} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ---------------------
// MenuItem subcomponent for MobileMenu
function MenuItem({ label, page, currentPage, setCurrentPage, setIsOpen }) {
  return (
    <div
      className={`cursor-pointer ${currentPage === page ? 'text-blue-600' : 'text-gray-700'}`}
      onClick={() => {
        setCurrentPage(page)
        setIsOpen(false)
      }}
    >
      {label}
    </div>
  )
}
