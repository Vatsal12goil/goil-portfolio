import { useState, useEffect } from 'react';

const TypingEffect = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const fullText = "Let's explore new technologies 👨‍💻🌐";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(fullText.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, fullText]);

  const renderText = () => {
    const emojiRegex = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu;
    const parts = displayText.split(emojiRegex);
    const emojis = displayText.match(emojiRegex) || [];
    
    return parts.map((part, index) => (
      <span key={index}>
        <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
          {part}
        </span>
        {emojis[index] && <span className="text-slate-300">{emojis[index]}</span>}
      </span>
    ));
  };

  return (
    <div className="text-center mb-8">
      <p className="text-xl md:text-2xl font-mono">
        {renderText()}
        <span className="animate-pulse bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">_</span>
      </p>
    </div>
  );
};

export default TypingEffect;