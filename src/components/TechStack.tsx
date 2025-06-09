
import { Badge } from "@/components/ui/badge";

const technologies = [
  { name: "Flutter", category: "Mobile" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Firebase", category: "Backend" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Git", category: "Version Control" },
  { name: "Figma", category: "Design" },
  { name: "Node.js", category: "Runtime" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Jest", category: "Testing" }
];

const TechStack = () => {
  return (
    <section className="py-20 px-6" id="tech-stack">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            Tech Stack & Tools
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-4 py-2 text-sm font-medium rounded-full border-2 hover:bg-accent transition-all duration-200 hover:scale-105 cursor-default"
            >
              {tech.name}
            </Badge>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Always exploring new technologies and staying up-to-date with industry trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
