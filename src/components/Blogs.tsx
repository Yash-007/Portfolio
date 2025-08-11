import { CalendarIcon, ClockIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';

interface Blog {
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  link: string;
}

const blogs: Blog[] = [
  {
    title: "Understanding React Server Components: A Deep Dive",
    description: "Explore the revolutionary concept of React Server Components and how they're changing the way we build React applications. Learn about the benefits, use cases, and implementation details.",
    date: "March 15, 2024",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Web Development"],
    link: "https://dev.to/yourusername/understanding-react-server-components"
  },
  {
    title: "Building Scalable APIs with FastAPI",
    description: "A comprehensive guide to building high-performance APIs using FastAPI. Learn best practices, authentication, documentation, and deployment strategies.",
    date: "February 28, 2024",
    readTime: "12 min read",
    tags: ["Python", "FastAPI", "Backend"],
    link: "https://dev.to/yourusername/building-scalable-apis-with-fastapi"
  },
  {
    title: "Mastering TypeScript: Advanced Types and Patterns",
    description: "Deep dive into TypeScript's advanced type system. Learn about conditional types, mapped types, utility types, and design patterns for better type safety.",
    date: "January 20, 2024",
    readTime: "10 min read",
    tags: ["TypeScript", "JavaScript", "Programming"],
    link: "https://dev.to/yourusername/mastering-typescript"
  },
  {
    title: "Clean Code Practices in JavaScript",
    description: "Essential principles and practices for writing clean, maintainable JavaScript code. Covers naming conventions, function composition, error handling, and code organization.",
    date: "December 15, 2023",
    readTime: "15 min read",
    tags: ["JavaScript", "Clean Code", "Best Practices"],
    link: "https://dev.to/yourusername/clean-code-javascript"
  }
];

export default function Blogs() {
  return (
    <div className="space-y-8">
      {blogs.map((blog, index) => (
        <a
          key={blog.title}
          href={blog.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <article className="relative bg-secondary p-8 rounded-lg border border-secondary/50 
                            hover:border-accent/30 transition-all duration-300">
            {/* Blog Number */}
            <div className="absolute -left-4 top-8 font-mono text-sm px-4 py-1 bg-accent/10 text-accent rounded-r-full">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="ml-8">
              {/* Title and External Link Icon */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors">
                  {blog.title}
                </h3>
                <ArrowUpRightIcon className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 
                                          transform group-hover:translate-x-1 group-hover:-translate-y-1 
                                          transition-all duration-300" />
              </div>

              {/* Description */}
              <p className="text-text-secondary mb-4">
                {blog.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-accent/80 bg-accent/5 px-3 py-1 rounded-full text-sm font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-text-secondary text-sm">
                <span className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4" />
                  {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  <ClockIcon className="w-4 h-4" />
                  {blog.readTime}
                </span>
              </div>
            </div>

            {/* Hover Gradient Border */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </article>
        </a>
      ))}

      {/* View All Blogs Link */}
      <div className="text-center pt-8">
        <a
          href="https://dev.to/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-mono"
        >
          View All Blog Posts
          <ArrowUpRightIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}