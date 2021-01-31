import styled from 'styled-components'

const ImageAbout = styled.img`
    width:350px;

    @media (max-width: 768px) {
    }
    @media (max-width: 480px) {
        width:300px;
        margin:0 auto;
    }
`

const ImageContainer = styled.div`

    @media (max-width: 480px) {
        margin:0 auto;
    }

`

const ContainerHero = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    margin:60px 0 160px 0;
    //background-color:blue;

    @media (max-width: 480px) {
        width:100%;
    }
`

const Container = styled.div`
    //background-color: yellow;
    margin-bottom: 80px;
    width:600px;
    display: flex;
    flex-direction: row;
    //padding: 80px 40px;
    border-radius:5px;
`

const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    //background-color: green;
    width:570px;
    
    @media (max-width: 480px) {
        width:100%;
        text-align:center;
        justify-content:center;
    }

`

const TitleHero = styled.h1`
    font-size: 40px;
    color: rgb(20,20,20);
    line-height:56px;
    margin:0;
    color:#405CB8;

    @media (max-width: 480px) {
        font-size:30px;
    }
`

const Text = styled.p`
    font-size: 16px;
    color: rgb(40,40,40);

    @media (max-width: 480px) {
        width:85%;
        margin:10px auto;
    }
`

const Button = styled.button`
    text-decoration:none;
    background-color: #405CB8;
    border:none;
    width:150px;
    color: #fff;
    padding:10px;
    font-family: Poppins;
    border-radius:5px;
    cursor: pointer;
`

const TitleAbout = styled.h2`
    font-size: 18px;
    color: rgb(50,50,50);
    margin:0;
`

const SubtitleAbout = styled.p`
    font-size: 16px;
    color: rgb(50,50,50);
    margin:0;

`
const ContainerSocial = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:120px;

    @media (max-width: 480px) {
        margin:15px auto;
    }
`

const IconSocial = styled.img`
    width:26px;
`


export { ImageAbout, ImageContainer, Container, ContainerText, Text, Button, TitleHero, ContainerHero, TitleAbout, SubtitleAbout, ContainerSocial, IconSocial}