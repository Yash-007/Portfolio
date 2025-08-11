export default function About() {
  return (
    <div className="space-y-10">
      {/* Primary Points */}
      <ul className="space-y-4">
        <li className="flex items-center gap-3 group">
          <span className="text-accent text-xl">▹</span>
          <span className="text-lg text-gray-800 group-hover:text-accent transition-colors">
            Full Stack Developer passionate about building scalable web applications
          </span>
        </li>
        <li className="flex items-center gap-3 group">
          <span className="text-accent text-xl">▹</span>
          <span className="text-lg text-gray-800 group-hover:text-accent transition-colors">
            Competitive Programmer (Specialist @Codeforces, ICPC Regionalist)
          </span>
        </li>
        <li className="flex items-center gap-3 group">
          <span className="text-accent text-xl">▹</span>
          <span className="text-lg text-gray-800 group-hover:text-accent transition-colors">
            Open Source Contributor and Hackathon Enthusiast
          </span>
        </li>
        <li className="flex items-center gap-3 group">
          <span className="text-accent text-xl">▹</span>
          <span className="text-lg text-gray-800 group-hover:text-accent transition-colors">
            Currently exploring Cloud Architecture and System Design
          </span>
        </li>
      </ul>

      {/* Secondary Points */}
      <div className="space-y-3 text-gray-600">
        <div className="flex items-center gap-2">
          <span className="text-accent">›</span>
          <span>Based in India, open to remote opportunities</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-accent">›</span>
          <span>Proficient in React, Node.js, TypeScript, Python</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-accent">›</span>
          <span>Experience with AWS, Docker, MongoDB, PostgreSQL</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-accent">›</span>
          <span>Strong foundation in Data Structures and Algorithms</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-accent">›</span>
          <span>Always learning and implementing best practices</span>
        </div>
      </div>
    </div>
  );
}