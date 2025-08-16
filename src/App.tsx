import { useState } from 'react';
import { Link } from 'react-scroll';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Achievements from './components/Achievements';
import Blogs from './components/Blogs';
import About from './components/About';
import SocialLinks from './components/SocialLinks';
import Quote from './components/Quote';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen bg-primary text-text">
      {/* <div className="absolute inset-0 z-0">
        <StarBackground />
      </div> */}
      <SocialLinks />

      {/* Header */}
      <header className="sticky top-0 w-full bg-primary/80 backdrop-blur-sm border-b border-secondary/50 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-accent">Yash</span>
              <span className="text-text">.dev</span>
            </h1>
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-accent"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="fixed inset-0 z-[100] md:hidden">
                {/* Backdrop */}
                <div 
                  className="absolute inset-0 bg-primary/90 backdrop-blur-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                
                {/* Menu Content */}
                <div className="absolute right-0 top-0 h-screen w-3/4 max-w-sm bg-secondary shadow-xl">
                  {/* Header */}
                  <div className="p-4 border-b border-secondary/50 flex items-center justify-between">
                    <h2 className="text-xl font-bold">
                      <span className="text-accent">Menu</span>
                    </h2>
                    <button 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 text-text-secondary hover:text-accent"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <div className="p-4">
                    <div className="flex flex-col space-y-3">
                      {sections.map((section, index) => (
                        <Link
                          key={section.id}
                          to={section.id}
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center px-4 py-3 text-text-secondary hover:text-accent hover:bg-secondary/50 rounded-lg transition-colors"
                        >
                          <span className="text-accent font-mono mr-3 text-sm">0{index + 1}.</span>
                          <span className="text-base">{section.label}</span>
                        </Link>
                      ))}
                      <a
                        href="https://drive.google.com/file/d/1XLLLkhktTGmwiWFaX_fPb7XamfqdW1Os/view?usp=drivesdk"
                        className="mt-4 px-4 py-3 border border-accent text-accent text-sm hover:bg-accent/10 transition-colors rounded-lg font-mono text-center"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
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
                href="https://drive.google.com/file/d/1XLLLkhktTGmwiWFaX_fPb7XamfqdW1Os/view?usp=drivesdk"
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
        <section id="home" className="min-h-[85vh] md:min-h-screen flex items-center justify-center pt-0 md:pt-20">
          <div className="container mx-auto px-6 -mt-16 md:mt-0">
            <div className="max-w-4xl mx-auto">
              <p className="text-accent font-mono mb-3 sm:mb-5 text-sm sm:text-base">Hi, I'm</p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-2 sm:mb-4 text-text">
                Yash Agrawal.
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8 text-text-secondary">
                 A Software Developer from India.
              </h2>
              <p className="text-text-secondary text-base sm:text-lg max-w-2xl mb-8 sm:mb-12">
                I'm a Full Stack Developer passionate about building optimized and scalable software applications,
                while having a focus on clean, maintainable code that follows good practices.
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
        <section id="work" className="min-h-screen py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-text">
                <span className="text-accent font-mono text-xl md:text-2xl">01.</span> Work Experience
              </h2>
              <div className="h-[1px] flex-grow bg-secondary"></div>
            </div>
            <WorkExperience />
          </div>
        </section>

        <section id="projects" className="min-h-screen py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-text">
                <span className="text-accent font-mono text-xl md:text-2xl">02.</span> Featured Projects
              </h2>
              <div className="h-[1px] flex-grow bg-secondary"></div>
            </div>
            <Projects />
          </div>
        </section>

        <section id="technologies" className="min-h-screen py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-text">
                <span className="text-accent font-mono text-xl md:text-2xl">03.</span> Tools & Technologies
              </h2>
              <div className="h-[1px] flex-grow bg-secondary"></div>
            </div>
            <Technologies />
          </div>
        </section>

        <section id="achievements" className="min-h-screen py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-text">
                <span className="text-accent font-mono text-xl md:text-2xl">04.</span> Achievements
              </h2>
              <div className="h-[1px] flex-grow bg-secondary"></div>
            </div>
            <Achievements />
          </div>
        </section>

        <section id="blogs" className="min-h-screen py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-text">
                <span className="text-accent font-mono text-xl md:text-2xl">05.</span> Featured Blog Posts
              </h2>
              <div className="h-[1px] flex-grow bg-secondary"></div>
            </div>
            <Blogs />
          </div>
        </section>

        <section id="about" className="min-h-screen pb-0 pt-12 sm:pt-16 md:pt-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-text">
                <span className="text-accent font-mono text-xl md:text-2xl">06.</span> About Me
              </h2>
              <div className="h-[1px] flex-grow bg-secondary"></div>
            </div>
            <About />
          </div>
        </section>

        {/* Quote Section */}
        <Quote />
      </main>
    </div>
  );
}

export default App;