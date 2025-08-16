import { memo } from 'react';
import { CodeBracketIcon, CommandLineIcon, WindowIcon, ServerIcon, CircleStackIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

interface TechCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const technologies: TechCategory[] = [
  {
    title: "Languages",
    icon: <CodeBracketIcon className="w-6 h-6" />,
    skills: ["Go", "JavaScript", "TypeScript", "Python", "C++", "C", "HTML/CSS"]
  },
  {
    title: "Backend",
    icon: <ServerIcon className="w-6 h-6" />,
    skills: ["Node.js", "Express", "Gin", "FastAPI", "Django", "REST APIs", "GraphQL"]
  },
  {
    title: "Frontend",
    icon: <WindowIcon className="w-6 h-6" />,
    skills: ["React", "Next.js", "Redux", "Tailwind CSS", "Material UI", "Ant Design"]
  },
  {
    title: "Databases",
    icon: <CircleStackIcon className="w-6 h-6" />,
    skills: ["MongoDB", "PostgreSQL", "Redis", "MySQL", "Firebase"]
  },
  {
    title: "DevOps & Cloud",
    icon: <CommandLineIcon className="w-6 h-6" />,
    skills: ["AWS", "Docker", "Git", "CI/CD", "Nginx"]
  },
  {
    title: "Tools",
    icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
    skills: ["VS Code", "Postman", "Figma", "Jira", "Github Copilot", "Cursor AI"]
  }
];

const Technologies = memo(function TechnologiesComponent() {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {technologies.map((category) => (
          <div 
            key={category.title}
            className="bg-secondary p-4 sm:p-6 rounded-lg border border-secondary/50 hover:border-accent/30 transition-all duration-300"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="p-1.5 sm:p-2 bg-accent/10 text-accent rounded-lg">
                <div className="w-5 h-5 sm:w-6 sm:h-6">{category.icon}</div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-text">
                {category.title}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-1.5 sm:gap-2 group"
                >
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                  <span className="text-text-secondary group-hover:text-accent transition-colors text-xs sm:text-sm">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-text-secondary text-center mt-8 sm:mt-12 max-w-3xl mx-auto italic text-sm sm:text-base px-4">
        I don't limit myself to specific technologies or programming languages. To me, they are tools to solve problems
        and create value by engineering solutions that meet user needs and business objectives.
      </p>
    </>
  );
});

export default Technologies;