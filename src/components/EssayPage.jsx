// src/components/EssayPage.jsx
import React, { useEffect } from 'react' // Import useEffect
import { useParams } from 'react-router-dom'
import { marked } from 'marked'
import essays from '../data/essays'

export default function EssayPage() {
  const { slug } = useParams()

  // Create a slug from the essay title for matching
  const currentEssay = essays.find(
    (essay) =>
      essay.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') === slug
  )

  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]); // Dependency array ensures this runs when the slug changes

  if (!currentEssay) {
    return (
      <div className="p-6 pt-24 min-h-screen text-center text-gray-900 dark:text-gray-100"> {/* Adjusted text color */}
        <h1 className="text-3xl font-bold">Essay Not Found</h1>
        <p className="mt-4">Could not find an essay with the slug: {slug}</p>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 container mx-auto min-h-screen"> {/* Added min-h-screen */}
      <article className="max-w-3xl mx-auto"> {/* Use article tag */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">{currentEssay.title}</h1> {/* Adjusted text color */}
        <p className="text-gray-500 dark:text-gray-400 mb-8">{currentEssay.date}</p> {/* Adjusted text color */}
        <div
          // Apply prose styles which should now include dark mode variants via index.css
          className="prose dark:prose-invert max-w-none" // Added dark:prose-invert and max-w-none
          dangerouslySetInnerHTML={{ __html: marked.parse(currentEssay.content) }}
        />
      </article>
    </div>
  )
}
