import styled from 'styled-components'

const ImageAbout = styled.img`
    width:350px;

    @media (max-width: 768px) {
    }
    @media (max-width: 480px) {
        width:20px;
    }
`

const ContainerHero = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    //background-color: blue;
    margin:60px 0 160px 0;
`

const Container = styled.div`
    background-color: yellow;
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
    //background-color: yellow;
    width:570px;
    @media (max-width: 768px) {
    }
    @media (max-width: 480px) {
        width:200px;
    }
`

const TitleHero = styled.h1`
    font-size: 40px;
    color: rgb(20,20,20);
    line-height:56px;
    margin:0;
    color:#405CB8;
`

const Text = styled.p`
    font-size: 16px;
    color: rgb(40,40,40);
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
`

const IconSocial = styled.img`
    width:26px;
`


export { ImageAbout, Container, ContainerText, Text, Button, TitleHero, ContainerHero, TitleAbout, SubtitleAbout, ContainerSocial, IconSocial}