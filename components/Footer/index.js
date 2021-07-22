import {Container, SocialMediaContainer, IconSocial} from './styled'

const Footer = () =>{
    return(
        <div>
            <Container>
                <SocialMediaContainer>
                    <a href="https://www.linkedin.com/in/gabriel-piantanida/"><IconSocial src="/linkedin.png" /></a>
                    <a href="https://twitter.com/gpiantanida_"><IconSocial src="/twitter.svg" /></a>
                    <a href="https://www.instagram.com/gpiantanida_/"><IconSocial src="/instagram.svg" /></a>
                </SocialMediaContainer>
            </Container>
        </div>
    )
}

export default Footer