
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Mobile App",
    description: "A full-featured e-commerce application with user authentication, product catalog, shopping cart, and payment integration.",
    techStack: ["Flutter", "Firebase", "Stripe API", "Provider"],
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
    link: "#"
  },
  {
    title: "Task Management Dashboard",
    description: "A responsive web application for project management with real-time collaboration, drag-and-drop functionality, and analytics.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    link: "#"
  },
  {
    title: "Weather Forecast App",
    description: "Clean and intuitive weather application with location-based forecasts, interactive maps, and personalized notifications.",
    techStack: ["Flutter", "OpenWeather API", "Bloc", "Hive"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-muted/30" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of recent work showcasing my approach to problem-solving and design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full rounded-full font-medium transition-all duration-200 hover:bg-accent"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  View Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
