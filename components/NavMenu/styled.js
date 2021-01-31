import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(240, 240, 240);
    z-index:2;

    @media (max-width: 480px) {
        width:100%;
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
`

export {Container, List}