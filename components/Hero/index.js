import {Col, Grid} from '../Grid'
import {ImageAbout, ImageContainer, Container, Text, ContainerText, Button, TitleHero, ContainerHero, ContainerSocial, IconSocial} from './styled'
import Title from '../Title'
import Typical from 'react-typical'

const Hero = () =>{

    //<Button href="#contacto_section">¡Contactame!</Button>
    /*
    <ContainerHero>
                <Grid colGap={60} rowGap={50} justifyItems="left">
                    <Col desktop={7} tablet={6} mobile={12}>
                        <ContainerText>
                            <Typical
                                steps={['Periodista', 1000]}
                                loop={Infinity}
                                wrapper={TitleHero}
                            />
                            <Typical
                                steps={['Relator', 1000]}
                                loop={Infinity}
                                wrapper={TitleHero}
                            />
                            <Typical
                                steps={['Creador de contenido', 1000]}
                                loop={Infinity}
                                wrapper={TitleHero}
                            />
                            <Text>Acá vas a conocerme y encontrar todos mis trabajos hechos hasta el momento. Te invito a que recorras cada sección y espero que te guste!</Text>
                            <ContainerSocial>
                                <a href="https://www.linkedin.com/in/gabriel-piantanida/"><IconSocial src="/linkedin.png" /></a>
                                <a href="https://twitter.com/piantaok"><IconSocial src="/twitter.svg" /></a>
                                <a href="https://www.instagram.com/pianta16/"><IconSocial src="/instagram.svg" /></a>
                            </ContainerSocial>
                        </ContainerText>
                    </Col>
                    <Col desktop={5} tablet={6} mobile={12}>
                        <ImageAbout src="/foto_hero.jpg"/>
                    </Col>
                </Grid>
            </ContainerHero>
    */
    return(
        <div>
            <ContainerHero id="home_section">
                <Grid colGap={60} rowGap={50} justifyItems="left">
                    <Col desktop={7} tablet={6} mobile={12} order={2}>
                        <ContainerText>
                            <Typical
                                steps={['Periodista', 1000]}
                                loop={Infinity}
                                wrapper={TitleHero}
                            />
                            <Typical
                                steps={['Relator', 1000]}
                                loop={Infinity}
                                wrapper={TitleHero}
                            />
                            <Typical
                                steps={['Creador de contenido', 1000]}
                                loop={Infinity}
                                wrapper={TitleHero}
                            />
                            <Text>Acá vas a conocerme y encontrar todos mis trabajos hechos hasta el momento. Te invito a que recorras cada sección y espero que te guste.</Text>
                            <ContainerSocial>
                                <a href="https://www.linkedin.com/in/gabriel-piantanida/" target="blank"><IconSocial src="/linkedin.png" /></a>
                                <a href="https://twitter.com/gpiantanida_" target="blank"><IconSocial src="/twitter.svg" /></a>
                                <a href="https://www.instagram.com/gpiantanida_/" target="blank"><IconSocial src="/instagram.svg" /></a>
                            </ContainerSocial>
                        </ContainerText>
                    </Col>

                    <Col desktop={5} tablet={6} mobile={12} order={1}>
                        <ImageContainer>
                            <ImageAbout src="/foto_hero.jpg"/>
                        </ImageContainer>
                    </Col>
                </Grid>
            </ContainerHero>
        </div>
    )
}

export default Hero