import { Mail, Phone, MapPin, Linkedin, Instagram, Github } from "lucide-react";

export const ContactSection = () => {
    
    // DATOS DE CONTACTO
    const email = "luciano.dilascio14@gmail.com";
    const subject = "I would like to connect from <name>";
    const body = "I came across your portfolio and would like to connect.";

    // 🔴 CAMBIO CLAVE: Usamos un link directo a la web de Gmail en lugar de 'mailto'
    // Esto fuerza a que se abra la interfaz de Gmail que querías ver.
    // Parametros Google: 'view=cm' (compose mode), 'fs=1' (fullscreen/new tab), 'to', 'su' (subject), 'body'
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <section
            id="contact"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-3xl"> 
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    Contact <span className="text-primary"> Me </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I am currently seeking new Frontend opportunities and collaborations. Specializing in crafting high-quality, responsive user interfaces with <span className="text-primary font-semibold text-glow "> React JS </span>. Feel free to reach out via email or social media.
                </p>

                <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
                    
                    <div className="space-y-8 flex flex-col items-center text-center md:text-left md:items-start">
                        <h3 className="text-2xl font-semibold mb-10 w-full text-center">Contact <span className="text-primary text-glow">Information</span></h3>

                        <div className="space-y-6 w-full max-w-md mx-auto">
                            
                            {/* EMAIL */}
                            <div className="flex items-center md:items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <Mail className="text-primary h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium text-primary text-glow">Email</h4>
                                    {/* Aquí usamos el gmailUrl para asegurar que abra Gmail */}
                                    <a href={gmailUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors break-all">
                                        luciano.dilascio14@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* TELÉFONO */}
                            <div className="flex items-center md:items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0 ">
                                    <Phone className="text-primary h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium text-primary text-glow">Phone</h4>
                                    <a href="tel:+5492284608904" className="text-muted-foreground hover:text-primary transition-colors">
                                        +54 9 2284 608904
                                    </a>
                                </div>
                            </div>

                            {/* UBICACIÓN */}
                            <div className="flex items-center md:items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <MapPin className="text-primary h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium text-primary text-glow">Location</h4>
                                    <p className="text-muted-foreground">
                                        Olavarría, Buenos Aires, Argentina
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* SECCIÓN CONNECT WITH ME */}
                        <div className="pt-8 w-full border-t border-border mt-4">
                            <h4 className="font-medium mb-6 text-center text-lg">Connect with me!</h4>
                            
                            <div className="flex flex-wrap gap-4 justify-center">
                                
                                {/* BOTÓN DE GMAIL DIRECTO */}
                                <a
                                    href={gmailUrl} // Usamos la variable gmailUrl
                                    target="_blank"   
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:-translate-y-1"
                                    title="Send me an email via Gmail"
                                >
                                    <Mail className="h-6 w-6" />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/lucianodilascio-dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:-translate-y-1"
                                >
                                    <Linkedin className="h-6 w-6" />
                                </a>

                                <a
                                    href="https://github.com/lucianodilascio"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:-translate-y-1"
                                >
                                    <Github className="h-6 w-6" />
                                </a>

                                
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};