import styled from 'styled-components'

const ImageSection = styled.img`
    width:32%;
`

const Container = styled.div`
    background-color: rgb(14,14,14);
    margin-bottom: 80px;
    display: flex;
    flex-direction: row;
    align-items:center;
    
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Icon = styled.img`
    width:40px;
`

const ContainerDecoration = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: center;
    ::before{
        content: "";
        display: block;
        width: 250px;
        height: 1px;
        background-color: rgb(24,24,24);
        border-radius: 5px;
        position: absolute;
        top:20px;
        right:0;
    }
    ::after{
        content: "";
        display: block;
        width: 250px;
        height: 1px;
        background-color: rgb(24,24,24);
        border-radius: 5px;
        position: absolute;
        top:20px;
        left:0;
    }
`

const ContainerText = styled.div`
    margin:0 auto;
    width:620px;
    position: relative;
`

const Text = styled.p`
    font-size: 30px;
    color: #fff;
`
const Subtitle = styled.p`
    font-size: 24px;
    margin:0;
    color: #000;
    text-align: center;
`

export { ImageSection, Container, ContentContainer, Text, Subtitle, ContainerText, ContainerDecoration, Icon}