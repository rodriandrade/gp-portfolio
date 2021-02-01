import {Container, List, Menu, Logo, CenterContainer} from './styled'
import BurgerMenu from '../BurgerMenu'
import React, {useState} from 'react'
import NavMenuMobile from '../NavMenuMobile'
import Inner from '../Inner'

const NavMenu = () => {

    const [open, setOpen] = useState(false)
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
            <BurgerMenu open={open} setOpen={setOpen}/>
            <NavMenuMobile open={open} setOpen={setOpen} />
            <Container>
                <CenterContainer>
                    <div>
                        <a href="#home_section"><Logo src="/logo.svg" alt="gabriel-piantanida-logo"/></a>
                    </div>
                    <nav>
                        <Menu>
                            <List><a href="#home_section">Home</a></List>
                            <List><a href="#sobre_mi_section">Sobre mi</a></List>
                            <List><a href="#relatos_section">Relatos</a></List>
                            <List><a href="#multimedia_section">Contenido Multimedia</a></List>
                        </Menu>
                    </nav>
                </CenterContainer>
            </Container>
        </div>
        
    )
}

export default NavMenu