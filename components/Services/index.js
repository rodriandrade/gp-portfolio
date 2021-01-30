import {Col, Grid} from '../Grid'
import Title from '../Title'
import {Container, ContentContainer, Icon, TitleService, Text} from './styled'

const Services = props =>{
    return(
        <div>
            <Title size="h1" id="servicios_section">Aptitudes</Title>
            <Grid colGap={40} rowGap={20}>
                <Col desktop={4} tablet={6} mobile={12}>
                    <ContentContainer>
                        <Icon src="/microphone.svg"/>
                        <TitleService>Relator deportivo</TitleService>
                        <Text>Narrar distintos eventos deportivos con preparación, pasión y dinamismo.</Text>
                    </ContentContainer>
                </Col>
                <Col desktop={4} tablet={6} mobile={12}>
                    <ContentContainer>
                        <Icon src="/idea.svg"/>
                        <TitleService>Creador de contenido</TitleService>
                        <Text>Realizar videos, encuestas, juegos e imágenes atractivas para redes sociales.</Text>
                    </ContentContainer>
                </Col>
                <Col desktop={4} tablet={6} mobile={12}>
                    <ContentContainer>
                        <Icon src="/live-streaming.svg"/>
                        <TitleService>Producción de streaming</TitleService>
                        <Text>Crear y diagramar el diseño de la transmisión. Dirigir en vivo con OBS Studio.</Text>
                    </ContentContainer>
                </Col>
                <Col desktop={4} tablet={6} mobile={12}>
                    <ContentContainer>
                        <Icon src="/content.svg"/>
                        <TitleService>Social Media</TitleService>
                        <Text>Planificar publicaciones y estrategias de contenido. Generar interacción con los seguidores.</Text>
                    </ContentContainer>
                </Col>
                <Col desktop={4} tablet={6} mobile={12}>
                    <ContentContainer>
                        <Icon src="/radio.svg"/>
                        <TitleService>Productor de radio</TitleService>
                        <Text>Armado de programa radial. Manejar tiempos al aire, conseguir testimonios y desgrabar notas.</Text>
                    </ContentContainer>
                </Col>
                <Col desktop={4} tablet={6} mobile={12}>
                    <ContentContainer>
                        <Icon src="/writer.svg"/>
                        <TitleService>Cronista</TitleService>
                        <Text>Informar sobre determinado tema día a día. Yendo al lugar de los hechos y conseguir información veraz e imparcial. </Text>
                    </ContentContainer>
                </Col>
            </Grid>
        </div>
    )
}

export default Services