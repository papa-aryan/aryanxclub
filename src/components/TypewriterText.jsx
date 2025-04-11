import React, { useState, useEffect, useRef } from 'react';

export default function TypewriterText({ text, delay = 0 }) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [finished, setFinished] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, delay * 100 + 500);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setFinished(true);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [isTyping, text]);

  // 🧠 Replace "Technology" after typing is done
  const getFinalText = () => {
    return text.replace(
      /Technology/,
      `<span class="tooltip-trigger">
        Technology
        <div class="tooltip-box">
          Techonology is what's novel and dosen't quite work yet.<br/><br/>
          <strong>Paul Graham</strong> had an interesting take:<br/>
          “Technology includes practically everything you could describe using the words 'make' or 'build.'”
        </div>
      </span>`
    );
  };

  return (
    <p
      ref={textRef}
      className="text-lg"
      dangerouslySetInnerHTML={{
        __html: finished ? getFinalText() : displayText,
      }}
    />
  );
}
