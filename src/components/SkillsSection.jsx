import { icons } from "lucide-react";
import { useState } from "react";
import {cn} from "@/lib/utils";

const skills = [
    // Frontend - Ordenados por relevancia para tu perfil
    { name: "React.js", category: "frontend", icon: "Atom" }, 
    { name: "JavaScript (ES6+)", category: "frontend", icon: "Zap" },
    { name: "TypeScript", category: "frontend", icon: "ShieldCheck" }, 
    { name: "HTML5 / CSS3", category: "frontend", icon: "Code" },
    { name: "Tailwind CSS", category: "frontend", icon: "Palette" },
    { name: "SASS / Bootstrap", category: "frontend", icon: "Layers" },

    // Backend - Demuestra tu capacidad Full Stack
    { name: "Node.js", category: "backend", icon: "Server" },
    { name: "Express.js", category: "backend", icon: "Cpu" },
    { name: "MongoDB / Mongoose", category: "backend", icon: "Database" },
    { name: "Firebase", category: "backend", icon: "Flame" },
    { name: "SQL", category: "backend", icon: "Table" },
    { name: "JWT / Auth", category: "backend", icon: "Lock" },

    // Tools & Methodologies
    { name: "Git / GitHub", category: "tools", icon: "GitBranch" },
    { name: "Docker", category: "tools", icon: "Container" },
    { name: "Postman / Swagger", category: "tools", icon: "Box" },
    { name: "Agile (Scrum)", category: "tools", icon: "Users" }, 
    { name: "VS Code", category: "tools", icon: "Laptop" },
];

const categories = ["all", "frontend", "backend", "tools"];


const IconComponent = ({ name, ...props }) => {
    const LucideIcon = icons[name];
    if (!LucideIcon) return null;
    return <LucideIcon {...props} />;
};


export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id="skills"
            className="py-24 px-4 relative bg-secondary/30"
        >

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>


                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}
                            >
                            {category}
                        </button>
                    ))}
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">

                    {filteredSkills.map((skill, key) => (

                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center space-y-2"
                        >

                            {/* ÍCONO */}
                            <IconComponent
                                name={skill.icon}
                                className="h-8 w-8 text-primary" // Define el tamaño y color del ícono
                            />

                            {/* NOMBRE DE LA HABILIDAD */}
                            <div className="text-center">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>

                        </div>
                    ))}

                </div>

            </div>


        </section>
    );
};