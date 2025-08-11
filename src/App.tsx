import { Link } from 'react-scroll';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Achievements from './components/Achievements';
import Blogs from './components/Blogs';
import About from './components/About';
import StarBackground from './components/StarBackground';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'blogs', label: 'Blogs' },
  { id: 'about', label: 'About' },
];

function App() {
  return (
    <div className="relative min-h-screen bg-primary text-text">
      <div className="absolute inset-0 z-0">
        <StarBackground />
      </div>

      {/* Header */}
      <header className="sticky top-0 w-full bg-primary/80 backdrop-blur-sm border-b border-secondary/50 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-accent">Yash</span>
              <span className="text-text">.dev</span>
            </h1>
            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section, index) => (
                <Link
                  key={section.id}
                  to={section.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="group flex items-center text-text-secondary hover:text-accent cursor-pointer transition-colors"
                >
                  <span className="text-accent mr-1 font-mono text-sm">0{index + 1}.</span>
                  <span className="text-sm tracking-wide">{section.label}</span>
                </Link>
              ))}
              <a
                href="/resume.pdf"
                className="px-4 py-2 border border-accent text-accent text-sm hover:bg-accent/10 transition-colors rounded font-mono"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Home/Landing Section */}
        <section id="home" className="min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <p className="text-accent font-mono mb-5">Hi, my name is</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-text">
                Yash Agrawal.
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-text-secondary">
                I build things for the web.
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mb-12">
                I'm a software engineer specializing in building exceptional digital experiences. 
                Currently, I'm focused on building accessible, human-centered products.
              </p>
              <a 
                href="#projects"
                className="inline-block px-8 py-4 border-2 border-accent text-accent font-mono 
                         hover:bg-accent/10 transition-colors rounded"
              >
                Check out my work!
              </a>
            </div>
          </div>
        </section>

        {/* Other Sections */}
        <section id="work" className="min-h-screen py-20">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-text">
                <span className="text-accent font-mono text-xl md:text-2xl">01.</span> Work Experience
              </h2>
              <div className="h-[1px] flex-grow bg-secondary"></div>
            </div>
            <WorkExperience />
          </div>
        </section>

        <section id="projects" className="min-h-screen py-20">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-text">
                <span className="text-accent font-mono text-xl md:text-2xl">02.</span> Featured Projects
              </h2>
              <div className="h-[1px] flex-grow bg-secondary"></div>
            </div>
            <Projects />
          </div>
        </section>

        <section id="technologies" className="min-h-screen py-20">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-text">
                <span className="text-accent font-mono text-xl md:text-2xl">03.</span> Tools & Technologies
              </h2>
              <div className="h-[1px] flex-grow bg-secondary"></div>
            </div>
            <Technologies />
          </div>
        </section>

        <section id="achievements" className="min-h-screen py-20">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-text">
                <span className="text-accent font-mono text-xl md:text-2xl">04.</span> Achievements
              </h2>
              <div className="h-[1px] flex-grow bg-secondary"></div>
            </div>
            <Achievements />
          </div>
        </section>

        <section id="blogs" className="min-h-screen py-20">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-text">
                <span className="text-accent font-mono text-xl md:text-2xl">05.</span> Featured Blog Posts
              </h2>
              <div className="h-[1px] flex-grow bg-secondary"></div>
            </div>
            <Blogs />
          </div>
        </section>

        <section id="about" className="min-h-screen py-20">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-text">
                <span className="text-accent font-mono text-xl md:text-2xl">06.</span> About Me
              </h2>
              <div className="h-[1px] flex-grow bg-secondary"></div>
            </div>
            <About />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;