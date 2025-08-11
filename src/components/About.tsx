import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function About() {
  const [showMore, setShowMore] = useState(false);

  const initialPoints = [
    "Full Stack Developer passionate about building scalable web applications and solving complex problems",
    "Competitive Programmer with strong problem-solving skills (Specialist @Codeforces, ICPC Regionalist)",
    "Experienced in modern web technologies including React, Node.js, TypeScript, and cloud platforms",
    "Active contributor to open-source projects and technical writer sharing knowledge with the developer community",
    "Hackathon enthusiast with multiple wins, experienced in rapid prototyping and innovative solution development"
  ];

  const additionalPoints = [
    "Currently focused on exploring System Design, Cloud Architecture, and building accessible web applications",
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