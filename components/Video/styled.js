import styled from 'styled-components'

const VideoYouTube = styled.iframe`
    width: 360px;
    height:200px;
    border: none;

    @media (max-width: 480px) {
        width:100%;
        margin-bottom:25px;
    }
`

const Container = styled.video`
    width: 360px;
    height:200px;
    border: none;
    
    @media (max-width: 480px) {
        width:100%;
        margin:0 auto;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`

const VideoLocal = styled.video`
    width: 360px;
    height:200px;
    border: none;

    @media (max-width: 480px) {
        width:93%;
        margin-bottom:25px;
        display:block;
        margin:0 auto;
    }
`

export {VideoYouTube, VideoLocal, Container}