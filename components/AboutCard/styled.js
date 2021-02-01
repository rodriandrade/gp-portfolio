import styled from 'styled-components'

const ImageAbout = styled.img`
    width:400px;

    @media (max-width: 480px) {
        margin:0 auto;
        width:100%;
    }
`

const ContainerHero = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    //background-color: rgb(240,240,240);
    margin:60px 0;
    align-items: flex-start;
    
    @media (max-width: 480px) {
        width:100%;
        text-align:center;
        align-items: center;
    }
`

const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width:650px;
    margin-left:30px;

    @media (max-width: 480px) {
        width:100%;
        text-align:center;
        justify-content:center;
        align-items: center;
        margin-left:0;

        a{
            margin:0 auto;
        }
    }
    
`

const ImageContainer = styled.div`

    @media (max-width: 480px) {
        margin:0 auto;
    }

`

const ContainerJobs = styled.div`
    display: flex;
    flex-direction: row;

    div:nth-child(2), a:nth-child(2) {
        margin-left:20px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        //margin:0 auto;

        div:nth-child(2) {
            margin-left:0px;
        }
    }
`

const Text = styled.p`
    font-size: 16px;
    color: rgb(50,50,50);
    margin:0;

    @media (max-width: 480px) {
        width:97%;
        margin:20px 0;
    }
`

const TitleAbout = styled.h2`
    font-size: 30px;
    color: rgb(50,50,50);
    margin:0;
`

const SubtitleAbout = styled.h2`
    font-size: 16px;
    color: rgb(50,50,50);
    margin-bottom:10px;

    @media (max-width: 480px) {
       text-align:center !important;
    }
`

const Button = styled.button`
    text-decoration:none;
    background-color: #405CB8;
    border:none;
    width:180px;
    color: #fff;
    padding:15px;
    font-size:16px;
    font-family: Poppins;
    border-radius:5px;
    cursor: pointer;
    margin-top:15px;

    @media (max-width: 480px) {
        margin:15px auto;
    }
`

const ContainerCommunication = styled.div`
    display: flex;
    flex-direction: row;

    div:nth-child(2) {
        margin-left:20px;
    }
`


export { ImageAbout, ContainerText, Text, Button, ContainerHero, ContainerJobs, TitleAbout, SubtitleAbout,ContainerCommunication, ImageContainer}