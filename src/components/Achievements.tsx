import { TrophyIcon } from '@heroicons/react/24/outline';

interface Achievement {
  title: string;
  event: string;
  description: string;
  year: string;
  link?: string;
}

const achievements: Achievement[] = [
  {
    title: "ICPC Regionalist",
    event: "International Collegiate Programming Contest",
    description: "Secured position in top 50 teams in Asia-West Continental Finals. Solved complex algorithmic problems under time pressure.",
    year: "2023",
    link: "https://icpc.global/"
  },
  {
    title: "Specialist (1422)",
    event: "Codeforces",
    description: "Achieved Specialist rank by consistently solving complex algorithmic problems. Participated in 50+ contests.",
    year: "2023",
    link: "https://codeforces.com/"
  },
  {
    title: "Hackathon Winner",
    event: "Smart India Hackathon",
    description: "Led team to victory by developing an innovative solution for real-time disaster management using AI and IoT.",
    year: "2022",
    link: "https://sih.gov.in/"
  },
  {
    title: "National Finalist",
    event: "Microsoft Imagine Cup",
    description: "Developed a machine learning-based solution for early disease detection in crops, reaching the national finals.",
    year: "2022",
    link: "https://imaginecup.microsoft.com/"
  }
];

export default function Achievements() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {achievements.map((achievement) => (
        <div
          key={achievement.title}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
        >
          <div className="flex items-start gap-4">
            <div className="bg-accent/10 rounded-lg p-3 group-hover:bg-accent/20 transition-colors">
              <TrophyIcon className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-accent transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-accent/80 mb-2">{achievement.event}</p>
                </div>
                <span className="text-sm font-medium text-gray-500">{achievement.year}</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                {achievement.description}
              </p>
              {achievement.link && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 text-sm font-medium inline-flex items-center group-hover:translate-x-1 transition-transform"
                >
                  View Details
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}