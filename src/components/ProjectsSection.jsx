import { ArrowRight } from "lucide-react";

const projects = [
    {
        id: 7, 
        title: "Bloom Haircare E-commerce",
        description: "A premium, full-stack e-commerce application. Features a dynamic catalog, centralized cart management with strict stock validation per variant, and a seamless checkout flow with asynchronous state transitions and real-time database persistence.",
        image: "/projects/bloom.jpg", 
        tags: ["React", "Tailwind CSS", "Firebase", "Firestore", "React Router", "Context API", "CI/CD"],
        demoUrl: "https://bloom-haircare-one.vercel.app/",
        githubUrl: "https://github.com/lucianodilascio/bloom-haircare",
    },
        {
        id: 3, 
        title: "Sports Clothing E-commerce",
        description: "A high-performance Single Page Application (SPA) built with React. Featuring complex state management, dynamic routing, and Firebase integration for real-time data persistence.",
        image: "/projects/ReactJS.jpg",
        tags: ["React", "Hooks", "Firebase", "React Router", "Context API", "Responsive Design"],
        demoUrl: "https://curso-react-alpha-ten.vercel.app/",
        githubUrl: "https://github.com/lucianodilascio/curso-react",
    },
    {
        id: 2,
        title: "Interactive Footwear Platform",
        description: "An advanced E-commerce implementation focused on DOM manipulation and asynchronous programming. Managed complex data structures and user events to create a seamless shopping experience.",
        image: "/projects/javascript.jpg",
        tags: ["JavaScript (ES6+)", "DOM Manipulation", "Async/Await", "Local Storage", "Events"],
        demoUrl: "https://lucianodilascio.github.io/proyectoJavascript/",
        githubUrl: "https://github.com/lucianodilascio/proyectoJavascript",
    },
    {
        id: 1,
        title: "Sneaker Store Landing Page",
        description: "A modern, fully responsive landing page optimized for performance and SEO. Built using advanced CSS techniques like Flexbox and Grid, following UI/UX best practices.",
        image: "/projects/desarrollo-web.jpg",
        tags: ["HTML5", "CSS3", "Sass", "Flexbox", "Grid", "SEO Optimization", "Animations"],
        demoUrl: "https://lucianodilascio.github.io/proyecto/",
        githubUrl: "https://github.com/lucianodilascio/proyecto"
    },
    {
        id: 6, 
        title: "Scalable API & Cloud Architecture",
        description: "Advanced server implementation using Nest.js and Docker. Focused on system scalability, performance testing, and containerized deployment for modern cloud environments.",
        image: "/projects/backend-3.jpg",
        tags: ["Nest.js", "Docker", "Kubernetes", "Scalability", "Testing", "DevOps Basics"],
        demoUrl: null,
        githubUrl: "https://github.com/lucianodilascio/backend-3"
    },
    {
        id: 5,
        title: "Secure Auth & Layered Architecture",
        description: "A robust backend system featuring JWT and Passport authentication. Implemented layered architecture patterns to ensure clean code, security, and maintainability.",
        image: "/projects/backend-2.jpg",
        tags: ["Node.js", "Express", "JWT", "Passport", "Security", "Layered Architecture"],
        demoUrl: null,
        githubUrl: "https://github.com/lucianodilascio/backend-2"
    },
    {
        id: 4,
        title: "Real-time Backend Server",
        description: "Full-featured web server with persistent storage (MongoDB) and real-time bidirectional communication using Websockets.",
        image: "/projects/backend-1.jpg",
        tags: ["Node.js", "Express", "MongoDB", "Mongoose", "Websockets", "API REST"],
        demoUrl: null,
        githubUrl: "https://github.com/lucianodilascio/backendfinalentrega1"
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