import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function About() {
  const [showMore, setShowMore] = useState(false);

  const initialPoints = [
    "Here I've mentioned some of things about me, my mindset and my personal life. They are not in any particular order.",
    "I'm a curious person who loves to learn new things and explore how the things are working. Now with AI tools like chatGPT, its even much easier and faster to do that.",
    "I don't limit myself to any particular technology or programming language, as i think they are just the way to solve problems and satisfy the user and business needs.",
    "I love reading books. one book which I recommed is 'The Mamba Mentality' by Kobe Bryant.",
    "I love playing cricket. I've been playing since I was 7 years old.",
    "I overthink sometimes but I'm doing meditation to improve it. and It's been 9 months since I'm doing it and it's going really well.",
    "I believe in learning and building in public and I actively share my learnings on my linkedin and X (twitter)."
  ];

  const additionalPoints = [
    "Based in India, open to remote opportunities and excited about working with innovative teams",
    "Strong background in Data Structures and Algorithms with consistent problem-solving practice",
    "Experience with agile methodologies and collaborative development environments",
    "Passionate about mentoring and knowledge sharing within the developer community"
  ];

  return (
    <div className="max-w-3xl">
      {/* Initial Points - Always visible */}
      <ul className="space-y-6">
        {initialPoints.map((point, index) => (
          <li 
            key={`initial-${index}`} 
            className="flex items-start gap-3 group"
          >
            <span className="text-accent text-xl font-light mt-0.5">▹</span>
            <span className="text-base text-text group-hover:text-accent transition-colors">
              {point}
            </span>
          </li>
        ))}
      </ul>

      {/* Additional Points - Animated container */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
        showMore ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'
      }`}>
        <ul className="space-y-6">
          {additionalPoints.map((point, index) => (
            <li 
              key={`additional-${index}`} 
              className="flex items-start gap-3 group"
            >
              <span className="text-accent text-xl font-light mt-0.5">▹</span>
              <span className="text-base text-text group-hover:text-accent transition-colors">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* View More Button */}
      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-8 flex items-center gap-2 px-4 py-2 border border-accent rounded 
                 text-accent hover:bg-accent/10 transition-all duration-300 mx-auto group"
      >
        <span className="text-sm font-mono">
          {showMore ? 'Show Less' : 'View More'}
        </span>
        {showMore ? (
          <ChevronUpIcon className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        ) : (
          <ChevronDownIcon className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        )}
      </button>
    </div>
  );
}