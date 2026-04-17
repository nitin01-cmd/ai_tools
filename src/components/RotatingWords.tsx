import { useEffect, useState } from "react";
import "../styles/rotating-words.css";

interface RotatingWordsProps {
  words: string[];
  interval?: number;
}

const RotatingWords = ({ words, interval = 2500 }: RotatingWordsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className="rotating-words-container">
      {words[currentIndex]}
    </span>
  );
};

export default RotatingWords;
