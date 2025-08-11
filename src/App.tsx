import { Link } from 'react-scroll';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Blogs from './components/Blogs';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'blogs', label: 'Blogs' },
  { id: 'about', label: 'About' },
];

function App() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-accent">Yash Agrawal</h1>
            <div className="hidden md:flex space-x-6">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  to={section.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-text hover:text-accent cursor-pointer transition-colors"
                >
                  {section.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Home/Landing Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Welcome to My Portfolio
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Hi, I'm a passionate developer dedicated to creating impactful solutions.
                Let's build something amazing together!
              </p>
            </div>
          </div>
        </section>

        {/* Other Sections */}
        <section id="work" className="min-h-screen py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
            <WorkExperience />
          </div>
        </section>

        <section id="projects" className="min-h-screen py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
            <Projects />
          </div>
        </section>

        <section id="achievements" className="min-h-screen py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12">Achievements & Recognition</h2>
            <Achievements />
          </div>
        </section>

        <section id="blogs" className="min-h-screen py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12">Featured Blog Posts</h2>
            <Blogs />
          </div>
        </section>

        <section id="about" className="min-h-screen py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            {/* Add about content */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;