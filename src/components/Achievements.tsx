import { TrophyIcon, AcademicCapIcon, StarIcon, CodeBracketIcon, UserGroupIcon } from '@heroicons/react/24/outline';

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
    title: "Internal Hackathon Winner @Coinswitch",
    subtitle: "",
    description: "Won Coinswitch's internal hackathon for new joiners by developing a real-time crypto trading bot, our team secured the first place and 10,000 Xoxoday points in prize money.",
    icon: <CodeBracketIcon className="w-8 h-8" />
  },
  {
    title: "Code Gladiators Finalist",
    subtitle: "TechGig's National Coding Competition",
    description: "Qualified for the finals of India's biggest coding competition, competing against 2.5+ lakh participants through multiple challenging rounds of algorithmic problem-solving.",
    icon: <AcademicCapIcon className="w-8 h-8" />,
    link: "https://www.techgig.com/codegladiators"
  },
  {
    title: "Community Impact",
    subtitle: "DSA & Career Mentoring",
    description: "Guided over 100+ students from college and LinkedIn community in practicing DSA and preparing for internships and job opportunities.",
    icon: <UserGroupIcon className="w-8 h-8" />
  }
];

export default function Achievements() {
  return (
    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
      {achievements.map((achievement, index) => (
        <a
          key={achievement.title}
          href={achievement.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-secondary p-4 sm:p-6 lg:p-8 rounded-lg border border-secondary/50 hover:border-accent/30 
                   transition-all duration-300 overflow-hidden"
        >
          {/* Background Number */}
          <div className="absolute -right-6 -top-6 text-[80px] sm:text-[100px] lg:text-[120px] font-bold text-accent/5 group-hover:text-accent/10 transition-colors">
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* Content */}
          <div className="relative">
            <div className="flex items-start gap-2 sm:gap-4 mb-3 sm:mb-4">
              <div className="p-1.5 sm:p-2 bg-accent/10 text-accent rounded-lg group-hover:bg-accent/20 transition-colors">
                <div className="w-6 h-6 sm:w-8 sm:h-8">{achievement.icon}</div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-text group-hover:text-accent transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-text-secondary font-mono text-xs sm:text-sm">
                  {achievement.subtitle}
                </p>
              </div>
            </div>

            <p className="text-text-secondary ml-12 sm:ml-16 pl-2 border-l border-accent/20 group-hover:border-accent/40 transition-colors text-xs sm:text-sm">
              {achievement.description}
            </p>

            {achievement.link && (
              <div className="mt-3 sm:mt-4 ml-12 sm:ml-16 pl-2 text-xs sm:text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                View More →
              </div>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}