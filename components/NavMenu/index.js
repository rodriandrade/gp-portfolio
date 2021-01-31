import {Container, List, Menu, MenuMobile} from './styled'
import BurgerMenu from '../BurgerMenu'
import React, {useState} from 'react'
import NavMenuMobile from '../NavMenuMobile'

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
            <NavMenuMobile open={open} setOpen={setOpen} />
            <Container>
                <div>
                    <h2>Gabriel Piantanida</h2>
                </div>
                <nav>
                    <BurgerMenu open={open} setOpen={setOpen}/>
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

export default NavMenu