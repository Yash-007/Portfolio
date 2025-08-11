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
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML/CSS"]
  },
  {
    title: "Frontend",
    icon: <WindowIcon className="w-6 h-6" />,
    skills: ["React", "Next.js", "Redux", "Tailwind CSS", "Material UI", "SCSS"]
  },
  {
    title: "Backend",
    icon: <ServerIcon className="w-6 h-6" />,
    skills: ["Node.js", "Express", "FastAPI", "Django", "REST APIs", "GraphQL"]
  },
  {
    title: "Databases",
    icon: <CircleStackIcon className="w-6 h-6" />,
    skills: ["MongoDB", "PostgreSQL", "Redis", "MySQL", "Firebase"]
  },
  {
    title: "DevOps & Cloud",
    icon: <CommandLineIcon className="w-6 h-6" />,
    skills: ["AWS", "Docker", "Git", "CI/CD", "Linux", "Nginx"]
  },
  {
    title: "Tools",
    icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
    skills: ["VS Code", "Postman", "Figma", "Jira", "Webpack", "Jest"]
  }
];

export default function Technologies() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {technologies.map((category) => (
        <div 
          key={category.title}
          className="bg-secondary p-6 rounded-lg border border-secondary/50 hover:border-accent/30 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-accent/10 text-accent rounded-lg">
              {category.icon}
            </div>
            <h3 className="text-xl font-semibold text-text">
              {category.title}
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {category.skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                <span className="text-text-secondary group-hover:text-accent transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}