import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(240, 240, 240);
    padding:10px 0;
    z-index:2;
    position:fixed;
    top:0;
    background-color: #fff;
    width:100%;

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
        color: rgb(12, 12, 12);
        transition:0.3s;
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

const CenterContainer = styled.div`
    width:1200px;
    margin:0 auto;
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

/*
    @media (max-width: 480px) {
        margin-left:10%;
        margin-top:6px;
    }
    */
`

export {Container, List, Menu, Logo, CenterContainer}