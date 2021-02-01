import {Col, Grid} from '../Grid'
import {ImageAbout, SubtitleAbout, TitleAbout, Text, ContainerText, Button, ContainerHero, ContainerJobs, ContainerCommunication, ImageContainer} from './styled'
import Title from '../Title'
import JobCard from '../JobCard'
import ContactInfo from '../ContactInfo'

const AboutCard = () =>{

    // <TitleAbout>Sobre mí</TitleAbout>

    /*
    <ContainerHero>
                <Title size="h1">Sobre mí</Title>
                <Grid colGap={60} rowGap={50} alignItems="flex-start" justifyItems="left">
                    <Col desktop={4} tablet={6} mobile={12}>
                        <ImageAbout src="/foto_about.png"/>
                    </Col>
                    <Col desktop={7} tablet={6} mobile={12}>
                        <ContainerText>
                            <Text><b>Hace más de 4 años que estoy trabajando en los medios de comunicación.</b> Me encanta el periodismo en todas sus facetas. Recorrí varios estadios y centros de entrenamiento del fútbol argentino; haciendo coberturas de entrenamientos y partidos. También realicé entrevistas a protagonistas del ambiente deportivo. Las redes sociales son otro de los aspectos que me interesan y ejercí como Community Manager de “Atado a Tu Locura” durante 2 años.</Text>
                            <SubtitleAbout>Actualmente trabajando como:</SubtitleAbout>
                            <ContainerJobs>
                                <JobCard icon="/microphone.svg" job="Relator" company="Frecuencia Futbol (Am 1420)"/>
                                <JobCard icon="/youtube.svg" job="Creador de contenido" company="El Show del Rojo (YouTube)"/>
                            </ContainerJobs>

                            <SubtitleAbout>Podés contactarme en:</SubtitleAbout>
                            <ContainerCommunication>
                                <a href="mailto:gabrielpiantanida16@gmail.com">
                                    <JobCard icon="/email.svg" job="Email" company="gabrielpiantanida16@gmail.com"/>
                                </a>
                                <JobCard icon="/phone.svg" job="Teléfono" company="1141896430"/>
                            </ContainerCommunication>
                       
                            <a href="/cv-piantanida-1.pdf"><Button>Descargar CV</Button></a>
                        </ContainerText>
                    </Col>
                </Grid>
            </ContainerHero>

    */
    return(
        <div>
            <ContainerHero>
                <Title size="h1"  id="sobre_mi_section">Sobre mí</Title>
                <Grid colGap={60} rowGap={50} alignItems="flex-start" justifyItems="left">
                    <Col desktop={4} tablet={6} mobile={12}>
                        <ImageContainer>
                            <ImageAbout src="/foto_about.png"/>
                        </ImageContainer>
                    </Col>
                    <Col desktop={7} tablet={6} mobile={12}>
                        <ContainerText>
                            <Text><b>Hace más de 4 años que estoy trabajando en los medios de comunicación.</b> Me encanta el periodismo en todas sus facetas. Recorrí varios estadios y centros de entrenamiento del fútbol argentino haciendo coberturas de entrenamientos y partidos. También realicé entrevistas a protagonistas del ambiente deportivo. Las redes sociales son otro de los aspectos que me interesan. Ejercí como Community Manager de “Atado a Tu Locura” durante 2 años.</Text>
                            <SubtitleAbout>Actualmente trabajando como:</SubtitleAbout>
                            <ContainerJobs>
                                <JobCard icon="/microphone.svg" job="Relator" company="Frecuencia Futbol (Am 1420)"/>
                                <JobCard icon="/youtube.svg" job="Creador de contenido" company="El Show del Rojo (YouTube)"/>
                            </ContainerJobs>
                            <SubtitleAbout>Podés contactarme en:</SubtitleAbout>
                            <ContainerJobs>
                                <a href="mailto:gabrielpiantanida16@gmail.com">
                                    <JobCard icon="/email.svg" job="Email" company="gabrielpiantanida16@gmail.com"/>
                                </a>
                                <a href="mailto:gabrielpiantanida16@gmail.com">
                                <JobCard icon="/phone.svg" job="Teléfono" company="1141896430"/>
                                </a>
                            </ContainerJobs>
                            <a href="/cv-piantanida-1.pdf" target="blank"><Button>Ver CV</Button></a>
                        </ContainerText>
                    </Col>
                </Grid>
            </ContainerHero>
        </div>
    )
}

export default AboutCard