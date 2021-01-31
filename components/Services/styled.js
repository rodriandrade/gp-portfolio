import styled from 'styled-components'

const ImageSection = styled.img`
    width:20%;
`
const Icon = styled.img`
    max-width:70px;
`

const Container = styled.div`
    background-color: blue;
    margin-bottom: 80px;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    width:100%;
`

const ContentContainer = styled.div`
    background-color: rgb(246,246,246);
    width: 370px;
    padding:20px 50px;
    min-height: 320px;
    text-align:center;
    border-radius:10px;
    transition:0.3s;
    border-bottom: 5px solid rgb(20,20,20);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-bottom:20px;

    :hover{
        border-bottom: 5px solid #405CB8;
    }

    @media (max-width: 480px) {
        margin-bottom:40px;
    }
`

const Text = styled.p`
    font-size: 16px;
    color: rgb(20,20,20);
    margin:0;
`
const TitleService = styled.h3`
    font-size: 20px;
    color: rgb(20,20,20);

    :hover{
        color: 5px solid #405CB8;
    }
`

export { ImageSection, Container, ContentContainer, Text, Icon, TitleService}