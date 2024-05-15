import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const PageAboutMe = () => {

    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-4xl font-bold text-secondary">Trayectoria Profesional</h1>
                <h2 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Sobre mí {' '}
                    <span className="font-bold text-secondary">
                        
                    </span>
                </h2>
                <p className="mt-5 text-lg text-center">Soy un desarrollador web con experiencia en la creación de aplicaciones web y móviles. Me especializo en el desarrollo de aplicaciones web y móviles con tecnologías modernas. Como creador de contenido digital, me gusta crear experiencias únicas y atractivas.</p>
                <CounterServices />
                <TimeLine />
            </ContainerPage>
        </>
    );
}

export default PageAboutMe;