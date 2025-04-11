// src/components/Essays.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { marked } from 'marked'

export default function Essays({ expandedEssay, setExpandedEssay }) {
  // Sample essay data
  const essays = [
    {
      id: 1,
      title: "The Art of Mindful Design",
      excerpt: "Exploring how mindfulness principles can enhance the design process and create more meaningful user experiences.",
      date: "November 15, 2023",
      content: `# The Art of Mindful Design

## Introduction

In our fast-paced digital world, design often prioritizes efficiency and engagement metrics over thoughtful user experiences. This essay explores how principles of mindfulness can transform our approach to design.

## What is Mindful Design?

Mindful design is an approach that brings awareness and intention to every decision in the design process. It asks us to slow down and consider the broader impact of our work.

## Key Principles

### 1. Present-Moment Awareness

By focusing on the current step of the design process rather than rushing to completion, designers can discover innovative solutions that might otherwise be missed.

### 2. Non-Judgment

Suspending judgment during ideation phases allows for a broader range of creative possibilities.

### 3. Compassion

Designing with empathy and compassion means truly considering the emotional impact of our work on users.

## Practical Applications

When applied to user interface design, mindfulness principles might lead to:

\`\`\`css
.mindful-interface {
  distractions: minimal;
  user-control: maximum;
  attention-demands: conscious;
}
\`\`\`

## Conclusion

By incorporating mindfulness into our design practice, we create not just more effective products, but more meaningful and ethical ones.`
    },
    {
      id: 2,
      title: "Digital Minimalism",
      excerpt: "Why less is more in our digital lives, and how to cultivate a more intentional relationship with technology.",
      date: "October 3, 2023",
      content: `# Digital Minimalism

## The Problem of Digital Abundance

We live in an age of unprecedented digital abundance. Our devices offer endless streams of content, connections, and capabilities. Yet many of us feel increasingly overwhelmed and distracted.

## What is Digital Minimalism?

Digital minimalism is a philosophy that helps us question which digital tools add the most value to our lives. It's about being intentional rather than reactive.

## Core Principles

1. **Clutter is costly**
2. **Optimization is important**
3. **Intentionality is satisfying**

## Practical Steps

### Digital Decluttering

Begin with a 30-day break from optional technologies to reset your digital life:

\`\`\`javascript
function digitalDeclutter() {
  const optionalTech = identifyOptionalTechnologies();
  const thirtyDays = 30;
  
  for (let day = 1; day <= thirtyDays; day++) {
    avoidUsing(optionalTech);
    reflectOn(values);
  }
  
  return newIntentionalTechPractices();
}
\`\`\`

### Curated Content Consumption

Rather than endless scrolling, schedule specific times for digital consumption.

## Benefits of Digital Minimalism

- Reclaimed attention
- Deeper connections
- More meaningful leisure
- Reduced anxiety

## Conclusion

Digital minimalism doesn't reject technology but puts it in its proper place, serving our values rather than distracting from them.`
    },
    {
      id: 3,
      title: "The Future of Remote Work",
      excerpt: "Examining how work might evolve in the coming decades as remote and flexible arrangements become the norm.",
      date: "September 12, 2023",
      content: `# The Future of Remote Work

## The Great Work Transformation

The pandemic accelerated what was already beginning: a fundamental shift in how we think about work. Remote work has moved from a niche arrangement to a mainstream option.

## Current State of Remote Work

In 2023, many companies have adopted hybrid models, while others have gone fully remote or returned to office-first policies.

## Predictions for the Next Decade

### 1. Location-Independent Compensation

Pay scales will gradually decouple from headquarters locations, creating more geographic flexibility.

### 2. Asynchronous by Default

Future work will increasingly happen asynchronously, with communication designed around this principle:

\`\`\`python
def async_workflow(team):
    documentation = create_clear_documentation()
    communication = prioritize_written_updates()
    meetings = minimize_and_record()
    
    return improved_work_life_balance
\`\`\`

### 3. Digital Infrastructure Boom

We'll see massive investment in tools specifically designed for distributed teams.

### 4. New Management Paradigms

Managing remote teams requires different skills, focusing on outcomes rather than presence.

## Challenges to Address

- Equity and inclusion
- Work-life boundaries
- Social connection
- Training and mentorship

## Conclusion

The future of work won't be entirely remote or entirely in-person, but rather a thoughtful blend that maximizes human potential and wellbeing.`
    }
  ]

  // If an essay is expanded, show its full content
  if (expandedEssay) {
    return (
      <motion.div
        className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 container mx-auto markdown page-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <button
              className="mb-6 inline-flex items-center text-blue-600"
              onClick={() => setExpandedEssay(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Essays
            </button>

            <p className="text-gray-500 mb-2">{expandedEssay.date}</p>
            <div
              dangerouslySetInnerHTML={{ __html: marked.parse(expandedEssay.content) }}
            />
          </motion.div>
        </div>
      </motion.div>
    )
  }

  // Otherwise, show the list of essays
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
            <motion.div
              key={essay.id}
              className="glass card cursor-pointer"
              onClick={() => setExpandedEssay(essay)}
              initial={{ y: 500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0, delay: index * 0.1 }}
              whileHover={{ y: -15, boxShadow: '0 12px 50px rgba(78, 31, 104, 0.4)', rotateZ: 1.3 }}
            >
              <h2 className="text-xl font-semibold mb-3">{essay.title}</h2>
              <p className="text-gray-600 mb-4">{essay.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{essay.date}</span>
                <span className="text-blue-600 inline-flex items-center">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
