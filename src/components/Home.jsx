// src/components/Home.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { FileText, MessageSquare } from 'lucide-react'
import TypewriterText from './TypewriterText'


export default function Home({ setCurrentPage }) {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-pastelPurple pt-16 page-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-shadow-sm">aryan's hub</span>
            
          </motion.h1>

          <motion.div
            className="text-xl text-gray-600 mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <TypewriterText
              text={`I don't like to summarize myself in pithy ways. Technology is cool though. Art too, however you choose define it. I like to share my thoughts through essays and random notes collected from everyday life.`}
            />
          </motion.div>


          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <motion.button
            className="flex items-center gap-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 hover:ring-4 ring-purple-300 text-white font-semibold px-8 py-3 text-lg shadow-lg transition-all duration-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: [0, -20, 0], opacity: 1 }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 0.6,
                ease: 'easeInOut',
                repeatDelay: 2.4, // wait 2.4s between loops → 3s total cycle
              },
              opacity: { duration: 0.3 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage('essays')}
          >
            <FileText size={20} />
            <span className="text-shadow-md">Essays</span>
          </motion.button>



          <motion.button
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 hover:ring-4 ring-purple-300 text-white font-semibold px-8 py-3 text-lg shadow-lg transition-all duration-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.03}}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage('thoughts')}
          >
            <MessageSquare size={20} />
            <span className="text-shadow-md">Random Thoughts</span>
          </motion.button>

          </div>
        </div>
      </div>
    </motion.div>
  )
}
