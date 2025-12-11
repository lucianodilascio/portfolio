import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {

    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">


{/*-THEME TOGGLE-  (DARK O LIGHT) */}
<ThemeToggle />

{/*-BACKGROUND EFFECTS- (particulas moviendose por la pagina, detalles, etc) */}


{/* -NAVBAR- (donde estan los links clickeables que te llevan a las distintas partes del portfolio) */}
<Navbar />

{/* -MAIN CONTENT- (contenido principal --> hero section(donde me presento, mi nombre, foto, etc), about me, skills, proyects, contact)  */}

<main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
</main>


{/* -FOOTER- (INFORMACION RELEVANTE, github, mail, linkedin, lo q considere importante) */}
<Footer />


    </div>;
}