// src/components/RandomThoughts.jsx
import React from 'react'
import { motion } from 'framer-motion'
import TypewriterText from './TypewriterText'

export default function RandomThoughts() {
  // Sample thoughts data
  const thoughts = [
    {
      id: 1,
      content: "Sometimes I wonder if the most meaningful experiences in life are those that can't be captured in an Instagram post.",
      date: "November 20, 2023"
    },
    {
      id: 2,
      content: "Digital tools should feel like extensions of ourselves, not distractions from ourselves.",
      date: "November 18, 2023"
    },
    {
      id: 3,
      content: "The more I learn about design, the more I realize it's about making thoughtful decisions, not creating pretty interfaces.",
      date: "November 15, 2023"
    },
    {
      id: 4,
      content: "What if we designed social media to enhance our relationships rather than monetize our attention?",
      date: "November 12, 2023"
    },
    {
      id: 5,
      content: "A good conversation is like a game of catch - it requires both throwing and receiving with care.",
      date: "November 10, 2023"
    },
    {
      id: 6,
      content: "The books that change us the most are often those that put words to feelings we've always had but couldn't express.",
      date: "November 8, 2023"
    },
    {
      id: 7,
      content: "Nature doesn't rush, yet everything gets accomplished. There's a lesson there.",
      date: "November 5, 2023"
    }
  ]

  return (
    <motion.div
      className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 container mx-auto page-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Random Thoughts
        </motion.h1>

        <div className="space-y-6">
          {thoughts.map((thought, index) => (
            <motion.div
              key={thought.id}
              className="glass p-6 rounded-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Using the separate TypewriterText component */}
              <TypewriterText text={thought.content} delay={index} />
              <p className="text-sm text-gray-500 mt-4">{thought.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
