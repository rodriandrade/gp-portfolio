import {Container, List} from './styled'

const NavMenu = () => {
    /*
    <Container>
                <div>
                    <h2>Gabriel Piantanida</h2>
                </div>
                <nav>
                    <ul>
                        <List><a href="">Home</a></List>
                        <List><a href="#servicios_section">Sobre mi</a></List>
                        <List><a href="#relatos_section">Relatos</a></List>
                        <List><a href="#multimedia_section">Contenido Multimedia</a></List>
                    </ul>
                </nav>
            </Container>
    */
    return(
        <div>
            <Container>
                <div>
                    <h2>Gabriel Piantanida</h2>
                </div>
                <nav>
                    <ul>
                        <List><a href="">Home</a></List>
                        <List><a href="#servicios_section">Sobre mi</a></List>
                        <List><a href="#relatos_section">Relatos</a></List>
                        <List><a href="#multimedia_section">Contenido Multimedia</a></List>
                    </ul>
                </nav>
            </Container>
        </div>
        
    )
}

export default NavMenu