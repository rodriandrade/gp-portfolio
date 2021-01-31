import styled from 'styled-components'

const ImageSection = styled.img`
    width:32%;
    @media (max-width: 480px) {
        width:100%;
        margin-bottom:20px;
    }  
`

const Container = styled.div`
    background-color: rgb(14,14,14);
    margin-bottom: 80px;
    display: flex;
    flex-direction: row;
    align-items:center;

    @media (max-width: 480px) {
        flex-direction:column;
    }  
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
        //background-color: rgb(24,24,24);
        background-color:#fff;
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
        //background-color: rgb(24,24,24);
        background-color:#fff;
        border-radius: 5px;
        position: absolute;
        top:20px;
        left:0;
    }

    @media (max-width: 480px) {
        ::before{
            width: 200px;
            top:40px;
        }
        ::after{
            width:200px;
            top:40px;
        }
    }
`

const ContainerText = styled.div`
    margin:0 auto;
    width:620px;
    position: relative;

    @media (max-width: 480px) {
        width:100%;
        padding:20px;
    }
`

const Text = styled.p`
    font-size: 30px;
    color: #fff;

    @media (max-width: 480px) {
        text-align:center;
        font-size:24px;
        margin-bottom:40px;
    }
`

const Subtitle = styled.p`
    font-size: 24px;
    margin:0;
    color: #000;
    text-align: center;
`

export { ImageSection, Container, ContentContainer, Text, Subtitle, ContainerText, ContainerDecoration, Icon}