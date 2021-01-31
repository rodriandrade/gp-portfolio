import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    border-radius:20px;
    background-color: #fff;
    align-items: center;
    padding:10px;
    width: 320px;
    border:1px solid rgb(240, 240, 240);

    @media (max-width: 480px) {
        margin:16px auto;
    }
`

const IconContainer = styled.div`
    margin-left:10px;

    @media (max-width: 480px) {
        display:flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items:flex-start;
        margin-right:20px;
    }
`

const Icon = styled.img`
    width:30px;
`

const TextContainer = styled.div`
    margin-left:20px;

    @media (max-width: 480px) {
        display:flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items:flex-start;
    }
`

const JobText = styled.h4`
    margin:0;
    font-size:16px;
`

const CompanyText = styled.h4`
    margin:0;
    font-weight:400;
    color: rgb(80,80,80);
    font-size:14px;
`


export {Container, IconContainer, Icon, TextContainer, JobText, CompanyText}