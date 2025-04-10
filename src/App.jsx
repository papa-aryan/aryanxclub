// src/App.jsx
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { marked } from 'marked'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Essays from './components/Essays'
import RandomThoughts from './components/RandomThoughts'
import TypewriterText from './components/TypewriterText' 
import Footer from './components/Footer'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [expandedEssay, setExpandedEssay] = useState(null)

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <Home setCurrentPage={setCurrentPage} key="home" />
        )}
        {currentPage === 'essays' && (
          <Essays
            expandedEssay={expandedEssay}
            setExpandedEssay={setExpandedEssay}
            key="essays"
          />
        )}
        {currentPage === 'thoughts' && <RandomThoughts key="thoughts" />}
      </AnimatePresence>

      <Footer />
    </div>
  )
}
