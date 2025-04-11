// src/components/EssayPage.jsx
import React from 'react'
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

  if (!currentEssay) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">Essay Not Found</h1>
      </div>
    )
  }

  return (
    <div className="pt-24 px-6 container mx-auto">
      <h1 className="text-3xl font-bold mb-2">{currentEssay.title}</h1>
      <p className="text-gray-500 mb-6">{currentEssay.date}</p>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: marked.parse(currentEssay.content) }}
      />
    </div>
  )
}
