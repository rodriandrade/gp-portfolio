import {Container, List, Menu, Logo} from './styled'
import BurgerMenu from '../BurgerMenu'
import React, {useState} from 'react'

const NavMenuMobile = ({open, setOpen}) => {

    return(
        <div>
            <Container open={open}>
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
            </Container>
        </div>
        
    )
}

export default NavMenuMobile