// src/components/Home.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { FileText, MessageSquare } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import TypewriterText from './TypewriterText'

export default function Home() {
  const navigate = useNavigate()

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center pt-16 page-section" // Adjusted dark background
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-8" // Adjusted dark text
            initial={{ scale: 0.3, y: -300, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 20,
            }}
          >
            <span className="text-shadow-sm">aryan's hub</span>
          </motion.h1>

          <motion.div
            className="text-xl text-gray-600 dark:text-gray-300 mb-12" // Adjusted dark text
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <TypewriterText
              text={`I don't like to summarize myself in pithy ways. Technology is cool though. I like to share my thoughts through essays and random notes collected from everyday life.`}
            />
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              className="flex items-center gap-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 hover:ring-4 ring-purple-300 dark:ring-indigo-400 text-white font-semibold px-8 py-3 text-lg shadow-lg transition-all duration-300" // Adjusted dark colors
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, -65, 0], opacity: 1 }}
              transition={{
                y: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 0.3,
                  ease: 'easeInOut',
                  repeatDelay: 1,
                },
                opacity: { duration: 0.3 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/essays')}
            >
              <FileText size={20} />
              <span className="text-shadow-md">Essays</span>
            </motion.button>

            <motion.button
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-500 dark:to-pink-500 hover:ring-4 ring-purple-300 dark:ring-pink-400 text-white font-semibold px-8 py-3 text-lg shadow-lg transition-all duration-300" // Adjusted dark colors
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.03 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/thoughts')}
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
