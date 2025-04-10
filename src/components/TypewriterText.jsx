// src/components/TypewriterText.jsx
import React, { useState, useEffect, useRef } from 'react'

export default function TypewriterText({ text, delay = 0 }) {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const textRef = useRef(null)

  useEffect(() => {
    // Start typing after a small delay
    const timer = setTimeout(() => {
      setIsTyping(true)
    }, delay * 100 + 500)

    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!isTyping) return

    let i = 0
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1))
        i++
      } else {
        clearInterval(typeInterval)
      }
    }, 30)

    return () => clearInterval(typeInterval)
  }, [isTyping, text])

  return (
    <p ref={textRef} className="text-lg">
      {displayText}
      {displayText.length < text.length && isTyping && (
        <span className="inline-block w-1 h-5 ml-1 bg-gray-600 animate-pulse"></span>
      )}
    </p>
  )
}
