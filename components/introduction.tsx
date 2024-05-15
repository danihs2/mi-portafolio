"use client"
import { Link } from "lucide-react";
import Image from "next/image";
import { Container } from "postcss";
import { TypeAnimation } from "react-type-animation";
import ContainerPage from "./container";
import MotionTransition from "./transition-component";

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="800" height="800" alt="Avatar" />
                <div className="flex mx-auto flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        Si puedes pensarlo,   <br />
                        <TypeAnimation
                        sequence={[
                            " podemos hacerlo.", 1000, " podemos hacerlo juntos.", 1000, " podemos hacerlo realidad.", 1000, " podemos hacerlo realidad juntos.", 1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-secondary"
                        />
                    </h1>
                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Soy un desarrollador web con experiencia en la creación de aplicaciones web y móviles. 
                        Me especializo en el desarrollo de aplicaciones web y móviles con tecnologías modernas. Como creador de contenido digital, me gusta crear experiencias únicas y atractivas.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/portfolio" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Contacta conmigo
                        </a>
                    </div>
                    
                </div>
                <MotionTransition
                    position="right"
                    className="">
                    <div className="md:mt-20 flex flex-col items-center justify-center">
                        <h1 className="text-xl font-bold md:text-2xl">Mi contacto</h1>
                        <p className="text-lg md:text-xl">
                            Email: <a href="mailto:danielhachac@gmail.com?subject=Contacto&body=Me gustaría contactar contigo para..." className="text-secondary hover:text-primary">danielhachac@gmail.com</a>
                        </p>
                        <p className="text-lg md:text-xl">
                            Github: <a href="https://github.com/danihs2" className="text-secondary hover:text-primary" target="_blank">danihs2</a>
                        </p>
                        <p className="text-lg md:text-xl">
                            Linkedin: <a href="https://www.linkedin.com/in/daniel-hachac-salas-9a53431bb/" className="text-secondary hover:text-primary" target="_blank">Daniel Hachac</a>
                        </p>
                    </div>
                </MotionTransition>
                <div className=""></div>
                <ContainerPage>
                    <p>...</p>
                </ContainerPage>
            </div>
        </div>
    );
}

export default Introduction;