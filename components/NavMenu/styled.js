import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(240, 240, 240);
    padding:10px 0;
    z-index:2;

    @media (max-width: 480px) {
        width:100%;
        background-color: #fff;
        margin:0 auto;
        //position:fixed;
        position: ${({ open }) => open ? 'flex' : 'fixed'};
        top:0;
        padding:20px 0;
    }
`

const List = styled.li`
    display: inline-block;

    a{
        padding:0 10px;
        text-decoration: none;
        color: rgb(12, 12, 12)
    }
    
    a:hover{
        text-decoration: underline 1px solid black;
    }


    @media (max-width: 480px) {
        display:none;
    }

`

const Menu = styled.ul`
/*
    @media (max-width: 480px) {
        padding:0;
    }
    */
`

const Logo = styled.img`
    width:250px;

    @media (max-width: 480px) {
        margin-left:10%;
        margin-top:6px;
    }
`

export {Container, List, Menu, Logo}