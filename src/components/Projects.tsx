import { memo } from 'react';
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
    image: "https://placehold.co/1200x800/112240/64ffda?text=AI+Task+Manager&font=raleway",
    featured: true
  },
  {
    title: "E-Commerce Analytics Dashboard",
    description: "Real-time analytics dashboard for e-commerce platforms. Provides detailed insights into sales trends, customer behavior, and inventory management with interactive visualizations and predictive analytics.",
    technologies: ["Vue.js", "Node.js", "D3.js", "MongoDB", "Docker"],
    githubLink: "https://github.com/yourusername/ecommerce-analytics",
    liveLink: "https://ecommerce-analytics.demo",
    image: "https://placehold.co/1200x800/112240/64ffda?text=Analytics+Dashboard&font=raleway",
    featured: true
  }
];

const Projects = memo(function ProjectsComponent() {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Featured Projects */}
      {projects
        .filter(project => project.featured)
        .map((project, index) => (
          <div
            key={project.title}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } gap-4 sm:gap-6 lg:gap-8 group`}
          >
            {/* Project Image */}
            <div className="lg:w-3/5 relative">
              <div className="relative h-[200px] sm:h-[300px] lg:h-[400px] overflow-hidden rounded-lg bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover mix-blend-multiply opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-secondary/30 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            </div>

            {/* Project Info */}
            <div className="lg:w-2/5 flex flex-col justify-center">
              <p className="text-accent font-mono text-xs sm:text-sm mb-1 sm:mb-2">Featured Project</p>
              <h3 className="text-lg sm:text-2xl font-bold text-text mb-3 sm:mb-4 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <div className="bg-secondary p-4 sm:p-6 rounded-lg shadow-xl mb-3 sm:mb-4">
                <p className="text-text-secondary text-sm sm:text-base">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 font-mono text-xs sm:text-sm">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="text-text-secondary bg-secondary/50 px-2 py-1 rounded"
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
                    className="text-text-secondary hover:text-accent transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <CodeBracketIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent transition-colors"
                    aria-label="Live Demo"
                  >
                    <LinkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

      {/* Other Projects Grid */}
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-center text-text mb-2 sm:mb-4">Other Noteworthy Projects</h3>
        <p className="text-text-secondary text-center mb-8 sm:mb-12 font-mono text-sm">view the archive</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <div
              key={index}
              className="bg-secondary p-4 sm:p-6 rounded-lg group hover:translate-y-[-5px] transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M3 3h18v18H3V3zm16 16V5H5v14h14z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                    <CodeBracketIcon className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-text-secondary hover:text-accent transition-colors">
                    <LinkIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 group-hover:text-accent transition-colors">
                Project Title {index + 1}
              </h4>
              <p className="text-text-secondary text-xs sm:text-sm mb-3 sm:mb-4">
                A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-xs sm:text-sm text-text-secondary">
                <span>VS Code</span>
                <span>Sublime Text</span>
                <span>Atom</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Projects;