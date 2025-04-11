import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Essays from './components/Essays'
import EssayPage from './components/EssayPage' // We'll create this in a moment
import RandomThoughts from './components/RandomThoughts'
import Footer from './components/Footer'
import TrailCursor from './components/TrailCursor'; // Import your custom cursor component


export default function App() {
  return (
    <div className="min-h-screen">
      <TrailCursor /> {/* Mount TrailCursor globally */}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/essays" element={<Essays />} />
        <Route path="/essays/:slug" element={<EssayPage />} />
        <Route path="/thoughts" element={<RandomThoughts />} />
      </Routes>

      <Footer />
    </div>
  )
}
