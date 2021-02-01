import {Container, List, Menu, Logo, MenuContainer, ContainerSocial, IconSocial} from './styled'
import BurgerMenu from '../BurgerMenu'
import React, {useState} from 'react'

const NavMenuMobile = ({open, setOpen}) => {

    return(
        <div>
            <Container open={open}>
                <MenuContainer>
                <div>
                    <Logo src="/logo.svg" alt="gabriel-piantanida-logo"/>
                </div>
                <nav>
                    <Menu>
                        <List onClick={() => setOpen(!open)}><a href="#home_section">Home</a></List>
                        <List onClick={() => setOpen(!open)}><a href="#servicios_section">Sobre mi</a></List>
                        <List onClick={() => setOpen(!open)}><a href="#relatos_section">Relatos</a></List>
                        <List onClick={() => setOpen(!open)}><a href="#multimedia_section">Contenido Multimedia</a></List>
                    </Menu>
                </nav>
                    <ContainerSocial>
                        <a href="https://www.linkedin.com/in/gabriel-piantanida/" target="blank"><IconSocial src="/linkedin.png" /></a>
                        <a href="https://twitter.com/piantaok" target="blank"><IconSocial src="/twitter.svg" /></a>
                        <a href="https://www.instagram.com/pianta16/" target="blank"><IconSocial src="/instagram.svg" /></a>
                    </ContainerSocial>
                </MenuContainer>
            </Container>
        </div>
        
    )
}

export default NavMenuMobile