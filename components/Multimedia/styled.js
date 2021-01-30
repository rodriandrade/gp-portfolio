import styled from 'styled-components'

const OpenImage = styled.p`
    position: absolute; 
    top:50%;
    left:50%;
    color: rgb(12,12,12);
    text-align:center;
    font-size:20px;
    opacity:1; 
    margin:0;
    width:100%;
    cursor:pointer;
    transform: translate(-50%, -50%);
    color:#fff;
`
const Image = styled.img`
    width: ${(props) => (props.size  ? "362px" : "250px")};
    opacity:1;
    display:block;
    cursor: pointer;
`

const TextContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ;
    background-color:rgb(0,0,0,0.8);
    cursor:pointer;
`

const ImageContainer = styled.div`
    width: ${(props) => (props.size  ? "362px" : "250px")}; 
    height:auto;
    position: relative;

    &:hover ${TextContainer} {
        opacity: 1;
    }

/*
    &:hover ${Image} {
        opacity: 0.1;
    }

    */
`

export {Image, OpenImage, ImageContainer, TextContainer}