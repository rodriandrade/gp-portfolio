import styled from 'styled-components'

const ImageContainer = styled.div`
    //background-color: rgba(10,10,10,0.9);
    max-width:500px;
    border-radius:5px;

    @media (max-width: 480px) {
        max-width:80%;
        display:flex;
        flex-direction:column;
    }
`

const ImageText = styled.p`
    text-align:center;
    font-size:16px;
    display:block;
    color:#fff;

    @media (max-width: 480px) {
        
    }
`

const Image = styled.img`
    max-width: 500px;
    max-height:500px;
    border: none;

    @media (max-width: 480px) {
        max-width: 100%;
    }
`
const CloseButton = styled.img`
    cursor: pointer;
    width:30px;
    color: #fff;
    position: absolute;
    top:30px;
    right:80px;

    @media (max-width: 480px) {
        top:0;
        right:20px;
        position:relative;
        padding:20px 0px;
        align-self:flex-end;
        width:20px;
    }
`
const Container = styled.div`
    position:fixed;
    background-color: rgba(0,0,0,0.9);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    z-index:100000000000000000000000000000000000000000000000000000000000000000000;
`

export { Image, Container, CloseButton, ImageContainer, ImageText }