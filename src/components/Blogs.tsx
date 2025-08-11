import { CalendarIcon, HeartIcon, BookOpenIcon } from '@heroicons/react/24/outline';

interface Blog {
  title: string;
  description: string;
  date: string;
  readTime: string;
  reactions: number;
  tags: string[];
  link: string;
}

const blogs: Blog[] = [
  {
    title: "Understanding React Server Components: A Deep Dive",
    description: "Explore the revolutionary concept of React Server Components and how they're changing the way we build React applications. Learn about the benefits, use cases, and implementation details.",
    date: "March 15, 2024",
    readTime: "8 min read",
    reactions: 124,
    tags: ["React", "JavaScript", "Web Development"],
    link: "https://dev.to/your-username/understanding-react-server-components"
  },
  {
    title: "Building Scalable APIs with FastAPI",
    description: "A comprehensive guide to building high-performance APIs using FastAPI. Learn best practices, authentication, documentation, and deployment strategies.",
    date: "February 28, 2024",
    readTime: "12 min read",
    reactions: 89,
    tags: ["Python", "FastAPI", "Backend"],
    link: "https://dev.to/your-username/building-scalable-apis-with-fastapi"
  },
  {
    title: "Mastering TypeScript: Advanced Types and Patterns",
    description: "Deep dive into TypeScript's advanced type system. Learn about conditional types, mapped types, utility types, and design patterns for better type safety.",
    date: "January 20, 2024",
    readTime: "10 min read",
    reactions: 156,
    tags: ["TypeScript", "JavaScript", "Programming"],
    link: "https://dev.to/your-username/mastering-typescript"
  },
  {
    title: "Clean Code Practices in JavaScript",
    description: "Essential principles and practices for writing clean, maintainable JavaScript code. Covers naming conventions, function composition, error handling, and code organization.",
    date: "December 15, 2023",
    readTime: "15 min read",
    reactions: 203,
    tags: ["JavaScript", "Clean Code", "Best Practices"],
    link: "https://dev.to/your-username/clean-code-javascript"
  }
];

export default function Blogs() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {blogs.map(blog => (
        <a
          key={blog.title}
          href={blog.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="bg-white rounded-xl p-6 h-full border border-gray-100 hover:border-accent/20 shadow-sm hover:shadow-md transition-all duration-300 group">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-accent/5 text-accent rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title and Description */}
            <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-accent transition-colors">
              {blog.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {blog.description}
            </p>

            {/* Metadata */}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <CalendarIcon className="w-4 h-4" />
                {blog.date}
              </span>
              <span className="flex items-center gap-1">
                <BookOpenIcon className="w-4 h-4" />
                {blog.readTime}
              </span>
              <span className="flex items-center gap-1">
                <HeartIcon className="w-4 h-4" />
                {blog.reactions}
              </span>
            </div>

            {/* Read More Link */}
            <div className="mt-4 text-accent group-hover:translate-x-2 transition-transform">
              Read Article →
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}