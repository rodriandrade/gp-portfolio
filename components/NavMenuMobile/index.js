import {Container, List, Menu} from './styled'
import BurgerMenu from '../BurgerMenu'
import React, {useState} from 'react'

const NavMenuMobile = ({open}) => {

    return(
        <div>
            <Container open={open}>
                <div>
                    <h2>Gabriel Piantanida</h2>
                </div>
                <nav>
                    <Menu>
                        <List><a href="">Home</a></List>
                        <List><a href="#servicios_section">Sobre mi</a></List>
                        <List><a href="#relatos_section">Relatos</a></List>
                        <List><a href="#multimedia_section">Contenido Multimedia</a></List>
                    </Menu>
                </nav>
            </Container>
        </div>
        
    )
}

export default NavMenuMobile