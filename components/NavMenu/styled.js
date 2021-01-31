import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(240, 240, 240);
    z-index:2;

    @media (max-width: 480px) {
        width:90%;
        //background-color: rgb(220,220,220,1);
        margin:0 auto;
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
        /*
        display:block;
        text-align:center;
        margin:20px 0;
        font-size:24px;
        */
    }

`

const Menu = styled.ul`
/*
    @media (max-width: 480px) {
        padding:0;
    }
    */
`

const MenuMobile = styled.ul`
`

export {Container, List, Menu, MenuMobile}