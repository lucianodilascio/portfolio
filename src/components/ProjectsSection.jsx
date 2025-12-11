import { ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Web Development Course (HTML- CSS)",
        description: "A responsive landing page for a sneaker store, built using modern HTML and CSS principles.",
        image: "/projects/desarrollo-web.jpg",
        tags: ["HTML", "CSS", "Flexbox", "Grids", "Bootstrap", "Git", "Sass", "Animations", "SEO"],
        demoUrl: "https://lucianodilascio.github.io/proyecto/",
        githubUrl: "https://github.com/lucianodilascio/proyecto"
    },
    {
        id: 2,
        title: "Javascript Course: Footwear E-commerce",
        description: "A footwear E-commerce platform implementation focusing on core JavaScript concepts, DOM manipulation, and asynchronous operations.",
        image: "/projects/javascript.jpg",
        tags: ["Functions", "Objects", "Arrays", "DOM", "Events", "Storage", "Fetch", "Promises", "NodeJS"],
        demoUrl: "https://lucianodilascio.github.io/proyectoJavascript/",
        githubUrl: "https://github.com/lucianodilascio/proyectoJavascript",
    },
    {
        id: 3,
        title: "React JS: Sports Clothing E-commerce",
        description: "A modern E-commerce site for sports clothing built with React, showcasing component structure, state management (Hooks), and Firebase integration.",
        image: "/projects/ReactJS.jpg",
        tags: ["React", "JSX", "Components", "Hooks", "Routing", "Firebase", "APIs"],
        demoUrl: "https://curso-react-alpha-ten.vercel.app/",
        githubUrl: "https://github.com/lucianodilascio/curso-react",
    },
    {
        id: 4,
        title: "Backend Development I: Advanced Web Servers",
        description: "Foundational and advanced backend development focused on creating robust web servers, handling persistent data (MongoDB), and real-time communication (Websockets).",
        image: "/projects/backend-1.jpg",
        tags: ["NodeJS", "Express", "MongoDB", "Mongoose", "Websockets", "Multer"],
        demoUrl: null,
        githubUrl: "https://github.com/lucianodilascio/backendfinalentrega1"
    },
    {
        id: 5,
        title: "Backend Development II: Architecture and Security",
        description: "Focus on server security, authentication strategies (JWT, Passport), advanced routing, process management, and implementing layered server architectures.",
        image: "/projects/backend-2.jpg",
        tags: ["Authentication", "JWT", "Passport", "Sessions", "Layered Architecture", "Mailing"],
        demoUrl: null,
        githubUrl: "https://github.com/lucianodilascio/backend-2"
    },
    {
        id: 6,
        title: "Backend Development III: Testing and Scalability",
        description: "Advanced topics in server optimization, performance testing, security, containerization (Docker/Kubernetes), and professional testing methodologies.",
        image: "/projects/backend-3.jpg",
        tags: ["Testing", "Optimization", "Docker", "Kubernetes", "Scalability", "Nest.js"],
        demoUrl: null,
        githubUrl: "https://github.com/lucianodilascio/backend-3"
    }

];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A showcase of my recent work, demonstrating my skills and passion for developing impactful solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project, key) => (

                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-border">


                            <div className="relative overflow-hidden">

                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.title}

                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-100"
                                    />
                                )}
                                {!project.image && (
                                    <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white text-lg">
                                        No Image Available
                                    </div>
                                )}
                            </div>

                            {/* CONTENIDO DE LA TARJETA */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>

                                {/* TAGS */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, tagKey) => (
                                        <span
                                            key={tagKey}
                                            className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* BOTONES */}
                                <div className="flex gap-3 mt-auto justify-center">
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
                                        >

                                            Live Demo
                                        </a>
                                    )}
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
                                    >

                                        GitHub
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        href="https://github.com/lucianodilascio"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>

            </div>

        </section>
    );
};