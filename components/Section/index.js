import {Col, Grid} from '../Grid'
import {ImageSection, Container, Text, Subtitle, ContainerText, ContainerDecoration, Icon} from './styled'
import Title from '../Title'
import Inner from '../Inner'

const Section = props =>{
    return(
        <div>
            <Inner>
            <Title size="h1" id="relatos_section">Relatos</Title>
            <Container>
                <ImageSection src="/foto_relatos.jpg"/>
                <ContainerText>
                    <ContainerDecoration>
                        <Icon src="/microphone-white.svg" alt="microphone_icon" />
                    </ContainerDecoration>
                    <Text><b>Relatar es una de mis pasiones dentro del periodismo.</b> Cada vez que me toca hacerlo, me preparo de la mejor forma. He trabajado en transmisiones radiales como también, por YouTube.</Text>
                </ContainerText>
            </Container>
            </Inner>
        </div>
    )
}

export default Section