import styled from 'styled-components'

const Container = styled.div`
    @media (max-width: 480px) {
        display: flex;
        align-items: center;
        width:100%;
        background-color: rgb(220,220,220,1);
        height:100vh;
        position:fixed;
        top:0;
        flex-direction: column;
        justify-content: center;
        transition: transform 0.3s ease-in-out;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        z-index:1;
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
        display:block;
        text-align:center;
        margin:20px 0;
        font-size:24px;
    }

`

const Menu = styled.ul`

    @media (max-width: 480px) {
        padding:0;
    }
    
`



export {Container, List, Menu}