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