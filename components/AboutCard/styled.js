import styled from 'styled-components'

const ImageAbout = styled.img`
    width:400px;
`

const ContainerHero = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    //background-color: rgb(240,240,240);
    margin:80px 0;
    align-items: flex-start;
`

const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width:650px;
    margin-left:30px;
    
`

const ContainerJobs = styled.div`
    display: flex;
    flex-direction: row;

    div:nth-child(2) {
        margin-left:20px;
    }
`

const Text = styled.p`
    font-size: 16px;
    color: rgb(50,50,50);
    margin:0;
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
`

const ContainerCommunication = styled.div`
    display: flex;
    flex-direction: row;

    div:nth-child(2) {
        margin-left:20px;
    }
`


export { ImageAbout, ContainerText, Text, Button, ContainerHero, ContainerJobs, TitleAbout, SubtitleAbout,ContainerCommunication}