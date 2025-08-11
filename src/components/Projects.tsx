import { CodeBracketIcon, LinkIcon } from '@heroicons/react/24/outline';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "AI-Powered Task Manager",
    description: "A sophisticated task management system that uses AI to prioritize and categorize tasks. Features include natural language processing for task input, smart task categorization, and automated scheduling suggestions.",
    technologies: ["React", "TypeScript", "Python", "TensorFlow", "FastAPI"],
    githubLink: "https://github.com/yourusername/ai-task-manager",
    liveLink: "https://ai-task-manager.demo",
    image: "https://placehold.co/1200x800/4a90e2/ffffff?text=AI+Task+Manager&font=raleway",
    featured: true
  },
  {
    title: "E-Commerce Analytics Dashboard",
    description: "Real-time analytics dashboard for e-commerce platforms. Provides detailed insights into sales trends, customer behavior, and inventory management with interactive visualizations and predictive analytics.",
    technologies: ["Vue.js", "Node.js", "D3.js", "MongoDB", "Docker"],
    githubLink: "https://github.com/yourusername/ecommerce-analytics",
    liveLink: "https://ecommerce-analytics.demo",
    image: "https://placehold.co/1200x800/2d3748/ffffff?text=Analytics+Dashboard&font=raleway",
    featured: true
  },
  {
    title: "Smart Home IoT Hub",
    description: "Centralized IoT hub for smart home device management with real-time monitoring and automation capabilities.",
    technologies: ["React Native", "MQTT", "Node.js", "MongoDB"],
    githubLink: "https://github.com/yourusername/smart-home-hub",
    liveLink: "https://smart-home.demo",
    image: "https://placehold.co/800x600/38a169/ffffff?text=Smart+Home+IoT&font=raleway"
  },
  {
    title: "Social Media Content Scheduler",
    description: "Automated social media content scheduling tool with AI-powered engagement time prediction.",
    technologies: ["React", "Express", "PostgreSQL", "Redis"],
    githubLink: "https://github.com/yourusername/social-scheduler",
    image: "https://placehold.co/800x600/805ad5/ffffff?text=Social+Media+Tool&font=raleway"
  },
  {
    title: "Fitness Tracking API",
    description: "RESTful API for fitness tracking applications with machine learning-based workout recommendations.",
    technologies: ["FastAPI", "SQLAlchemy", "scikit-learn", "PostgreSQL"],
    githubLink: "https://github.com/yourusername/fitness-api",
    image: "https://placehold.co/800x600/e53e3e/ffffff?text=Fitness+Tracker&font=raleway"
  },
  {
    title: "Blockchain Voting System",
    description: "Secure and transparent voting system built on blockchain technology with user authentication.",
    technologies: ["Solidity", "Web3.js", "React", "Node.js"],
    githubLink: "https://github.com/yourusername/blockchain-voting",
    image: "https://placehold.co/800x600/d69e2e/ffffff?text=Blockchain+Voting&font=raleway"
  }
];

export default function Projects() {
  return (
    <div className="space-y-20">
      {/* Featured Projects */}
      <div className="space-y-24">
        {projects
          .filter(project => project.featured)
          .map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 group`}
            >
              {/* Project Image */}
              <div className="md:w-3/5 relative overflow-hidden rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-300" />
                <img
                  src={project.image || 'https://placehold.co/600x400?text=Project+Image'}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="md:w-2/5 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-accent mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 backdrop-blur-sm bg-white/50 p-6 rounded-lg shadow-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary rounded-full text-sm font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-accent transition-colors"
                    >
                      <CodeBracketIcon className="w-6 h-6" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-accent transition-colors"
                    >
                      <LinkIcon className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Other Projects Grid */}
      <div>
        <h3 className="text-xl font-bold mb-8 text-center">Other Noteworthy Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {projects
            .filter(project => !project.featured)
            .map(project => (
              <div
                key={project.title}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-300" />
                  <img
                    src={project.image || 'https://placehold.co/600x400?text=Project+Image'}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-600 hover:text-accent transition-colors shadow-sm"
                      >
                        <CodeBracketIcon className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-600 hover:text-accent transition-colors shadow-sm"
                      >
                        <LinkIcon className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h4 className="text-lg font-bold text-accent group-hover:text-accent/80 transition-colors mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary/50 rounded-full text-xs font-medium text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
