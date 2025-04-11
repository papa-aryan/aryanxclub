// src/components/Essays.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import essays from '../data/essays'

export default function Essays() {
  return (
    <motion.div
      className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 container mx-auto page-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-shadow-prpl"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Essays
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {essays.map((essay, index) => (
            <Link
              key={essay.id}
              to={`/essays/${essay.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
            >
              <motion.div
                className="glass card cursor-pointer"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)' }}
              >
                <h2 className="text-xl font-semibold mb-3">{essay.title}</h2>
                <p className="text-gray-600 mb-4">{essay.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{essay.date}</span>
                  <span className="text-blue-600 inline-flex items-center">
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
