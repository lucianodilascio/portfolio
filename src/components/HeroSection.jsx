import { ArrowDown } from "lucide-react";

export const HeroSection = () => {

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >

            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6 ">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I am</span>
                        <span className="text-glow text-primary opacity-0 animate-fade-in-delay-1"> Luciano</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 text-glow">Dilascio </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I'm a <span className="text-primary font-semibold text-glow ">Frontend Developer Trainee </span> with a strong foundation in the MERN stack. I'm deeply passionate about web development, finding joy in building responsive interfaces with <span className="text-primary font-semibold text-glow ">React.js </span>and <span className="text-primary font-semibold text-glow ">JavaScript</span>. My enthusiasm extends to mastering new tools, and I thrive on the challenges of transforming ideas into functional code. Known for my continuous learning and proactive mindset, I'm eager to join a development team and apply innovative technologies to create seamless user experiences.
                    </p>

                    <div className=" pt-4 opacity-0 animate-fade-in-delay-4" >
                        <a href="#projects" className="cosmic-button">
                            View Projects
                        </a>
                    </div>
                </div>
            </div>


            <a
                href="#about"
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer group"
            >

                <span className="font-semibold text-glow text-muted-foreground mb-1 text-xl group-hover:text-primary transition-colors duration-300">Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary font-semibold text-glow group-hover:scale-110 transition-transform duration-300" />
            </a>


        </section >

    );
};