import { TrophyIcon, AcademicCapIcon, StarIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

interface Achievement {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

const achievements: Achievement[] = [
  {
    title: "ICPC Regionalist",
    subtitle: "ACM ICPC Amritapuri Regionals",
    description: "Secured position in top 50 teams. Solved complex algorithmic problems under time pressure, demonstrating strong problem-solving and teamwork skills.",
    icon: <TrophyIcon className="w-8 h-8" />,
    link: "https://icpc.global/"
  },
  {
    title: "Specialist @Codeforces, 1750 @Codechef",
    subtitle: "",
    description: "Achieved Specialist rank on codeforces and over 1750 rating on Codechef by consistently solving complex algorithmic problems. Participated in 100+ contests and solved 1000+ problems on various platforms.",
    icon: <StarIcon className="w-8 h-8" />,
    link: "https://codeforces.com/"
  },
  {
    title: "Smart India Hackathon Winner",
    subtitle: "National Level Competition",
    description: "Led team to victory by developing an innovative solution for real-time disaster management using AI and IoT technologies.",
    icon: <CodeBracketIcon className="w-8 h-8" />,
    link: "https://sih.gov.in/"
  },
  {
    title: "Microsoft Imagine Cup Finalist",
    subtitle: "National Finals",
    description: "Developed a machine learning-based solution for early disease detection in crops, reaching the national finals among thousands of participants.",
    icon: <AcademicCapIcon className="w-8 h-8" />,
    link: "https://imaginecup.microsoft.com/"
  }
];

export default function Achievements() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {achievements.map((achievement, index) => (
        <a
          key={achievement.title}
          href={achievement.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-secondary p-8 rounded-lg border border-secondary/50 hover:border-accent/30 
                   transition-all duration-300 overflow-hidden"
        >
          {/* Background Number */}
          <div className="absolute -right-6 -top-6 text-[120px] font-bold text-accent/5 group-hover:text-accent/10 transition-colors">
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* Content */}
          <div className="relative">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-accent/10 text-accent rounded-lg group-hover:bg-accent/20 transition-colors">
                {achievement.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-text-secondary font-mono text-sm">
                  {achievement.subtitle}
                </p>
              </div>
            </div>

            <p className="text-text-secondary ml-16 pl-2 border-l border-accent/20 group-hover:border-accent/40 transition-colors">
              {achievement.description}
            </p>

            {achievement.link && (
              <div className="mt-4 ml-16 pl-2 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                View More →
              </div>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}