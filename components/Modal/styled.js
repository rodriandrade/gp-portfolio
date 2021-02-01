import styled from 'styled-components'

const Image = styled.img`
    max-width: 550px;
    max-height:550px;
    border: none;

    @media (max-width: 480px) {
        max-width: 80%;
    }
`
const CloseButton = styled.img`
    cursor: pointer;
    width:30px;
    color: #fff;
    position: absolute;
    top:30px;
    right:80px;
`
const Container = styled.div`
    position:fixed;
    background-color: rgba(0,0,0,0.8);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:100000000000000000000000000000000000000000000000000000000000000000000;
`

export { Image, Container, CloseButton }