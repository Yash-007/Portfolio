import { CalendarIcon, ClockIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';

interface Blog {
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
}

const blogs: Blog[] = [
  {
    title: "Go Concurrency: Goroutines, Channels and WaitGroups",
    description: "In Go, we can make our program do more than one thing at the same time. This is called concurrency, and it’s a great ...",
    date: "August 13, 2025",
    readTime: "10 min read",
    link: "https://dev.to/yash007_95/go-concurrency-goroutines-channels-and-waitgroups-165d"
  },
  {
    title: "A Subtle Memory Leak in Go You Might Miss",
    description: "When we think of memory leaks, we usually imagine something obvious like forgetting to close a file or a goroutine running forever. but in Go ...",
    date: "July 24, 2025",
    readTime: "7 min read",
    link: "https://dev.to/yash007_95/a-subtle-memory-leak-in-go-you-might-miss-48ef"
  },
  {
    title: "REST vs gRPC – When to Use What",
    description: "Most of us start building APIs with REST. It’s easy, works well in browsers and is simple to test using tools like postman ....",
    date: "July 26, 2025",
    readTime: "10 min read",
    link: "https://dev.to/yash007_95/rest-vs-grpc-when-to-use-what-18f"
  },
  {
    title: "Reflection in Go — When You Need to Work with the Unknown",
    description: "Go is a statically typed language, which means you usually know the type of every variable at compile time. but sometimes ...",
    date: "July 26, 2025",
    readTime: "6 min read",
    link: "https://dev.to/yash007_95/reflection-in-go-when-you-need-to-work-with-the-unknown-4h6l"
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