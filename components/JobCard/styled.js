import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    border-radius:20px;
    background-color: #fff;
    align-items: center;
    padding:10px;
    width: 320px;
    border:1px solid rgb(240, 240, 240);
`

const IconContainer = styled.div`
    margin-left:10px;
`

const Icon = styled.img`
    width:30px;
`

const TextContainer = styled.div`
    margin-left:20px;
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