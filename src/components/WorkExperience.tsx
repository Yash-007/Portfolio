import { useState } from 'react';

interface WorkExperience {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

const experiences: WorkExperience[] = [
  {
    company: 'Coinswitch',
    role: 'Software Development Engineer',
    period: 'January 2025 - Present',
    responsibilities: [
      'Lead development of microservices architecture using Node.js and TypeScript',
      'Implemented CI/CD pipelines reducing deployment time by 40%',
      'Mentored junior developers and conducted code reviews',
      'Architected and deployed cloud-native solutions using AWS services'
    ]
  },
  {
    company: 'TruEstate',
    role: 'Software Development Engineer Intern',
    period: 'August 2024 - January 2025',
    responsibilities: [
      'Developed and maintained multiple React-based web applications',
      'Optimized database queries resulting in 50% faster load times',
      'Integrated third-party APIs and payment gateways',
      'Collaborated with UX team to implement responsive designs'
    ]
  },
  {
    company: 'Flynaut',
    role: 'Full Stack Developer Intern',
    period: 'April 2024 - July 2024',
    responsibilities: [
      'Engineered and improved major features of Starry\'s customer-facing Android web app using ES6, Handlebars, Backbone, Marionette, and CSS',
      'Proposed and implemented scalable solutions to issues identified with cloud services and applications',
      'Collaborated with designers and other developers to ensure thoughtful and consistent user experiences'
    ]
  },
  {
    company: 'Nanostack',
    role: 'Full Stack Developer Intern',
    period: 'August 2023 - December 2023',
    responsibilities: [
      'Built and maintained RESTful APIs using Python and Django',
      'Implemented automated testing suites improving code coverage by 75%',
      'Assisted in the migration of legacy systems to modern frameworks',
      'Participated in daily stand-ups and sprint planning meetings'
    ]
  }
];

export default function WorkExperience() {
  const [selectedCompany, setSelectedCompany] = useState<string>(experiences[0].company);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Company List */}
      <div className="md:w-1/3">
        <div className="flex flex-col space-y-2 sticky top-24">
          {experiences.map((exp) => (
            <button
              key={exp.company}
              onClick={() => setSelectedCompany(exp.company)}
              className={`text-left px-4 py-3 rounded transition-all duration-300 ${
                selectedCompany === exp.company
                ? 'bg-accent/10 border-l-4 border-accent text-accent font-medium scale-102 transform'
                : 'hover:bg-secondary border-l-4 border-transparent hover:border-accent/50 hover:translate-x-1'
              }`}
            >
              <span className="block text-lg">{exp.company}</span>
              <span className="text-sm text-gray-600">{exp.role}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Experience Details */}
      <div className="md:w-2/3">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className={`transition-all duration-500 transform ${
              selectedCompany === exp.company 
              ? 'opacity-100 translate-x-0' 
              : 'hidden opacity-0 translate-x-4'
            }`}
          >
            <h3 className="text-2xl font-bold text-accent mb-2">
              {exp.role} <span className="text-text">@</span> <span className="text-accent hover:text-accent/80 cursor-pointer">{exp.company}</span>
            </h3>
            <p className="text-gray-600 mb-6 font-medium">{exp.period}</p>
            <ul className="space-y-4">
              {exp.responsibilities.map((responsibility, index) => (
                <li 
                  key={index} 
                  className="flex items-start group"
                >
                  <span className="text-accent mr-2 transform group-hover:translate-x-1 transition-transform">▹</span>
                  <span className="group-hover:text-accent transition-colors">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
