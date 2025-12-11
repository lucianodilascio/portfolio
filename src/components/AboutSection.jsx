import LucianoCV from "@/assets/CV_Dilascio_Luciano.pdf";
import { Code, User, GraduationCap } from "lucide-react";


export const AboutSection = () => {

    return (
        <section id="about" className="py-24 px-4 relative">

            <div className="container mx-auto max-w-5xl">
                
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center transition duration-300 hover:scale-105">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* COLUMNA IZQUIERDA: Texto y Botones */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-semibold text-primary">Passionate Web Developer</h3>

                        <p className="text-muted-foreground font-medium">Frontend Developer Trainee with over 12 months of intensive training in the MERN Stack (JavaScript, React.js, Node.js.)</p>

                        <p className="text-muted-foreground font-medium">Passionate about continuous learning, problem-solving, teamwork, and experienced in Agile development methodology (Scrum)</p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

                            <a href="#contact" className="cosmic-button">
                                Contact Me
                            </a>

                            <a href={LucianoCV}
                                download="CV_Luciano_Dilascio.pdf"
                                className="px-6 py-2  border border-primary text-primary hover:bg-primary/10 transition duration-400 hover:scale-110"
                            >
                                Download CV
                            </a>

                        </div>
                    </div>

                  
                    <div className="grid grid-cols-1 gap-6">

                       
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg text-primary">Web Development</h4>
                                    <p className="text-muted-foreground">Building scalable Single Page Applications (SPAs) with component-based architecture and efficient state management.</p>
                                </div>
                            </div>
                        </div>

                        
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg text-primary">Soft Skills</h4>
                                    <p className="text-muted-foreground">Thriving in collaborative environments with strong communication, empathy, and adaptability.</p>
                                </div>
                            </div>
                        </div>

                        
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <GraduationCap className="h-6 w-6 text-primary" />
                                </div>
                                
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg text-primary">Education & Goals I</h4>
                                    <p className="text-muted-foreground">Currently pursuing a Technical Degree in Programming at TECLAB and eager to tackle new challenges.</p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <GraduationCap className="h-6 w-6 text-primary" /> 
                                </div>
                                
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg text-primary">Education & Goals II</h4>
                                    <p className="text-muted-foreground">Certified Full Stack Developer from Coderhouse. Eager to leverage these skills for new development challenges.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};