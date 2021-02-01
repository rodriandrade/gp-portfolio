import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    border-top: 1px solid rgb(240, 240, 240);
    padding:30px;
    justify-content: center;
    margin-top:80px;
`

const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:250px;
`

const IconSocial = styled.img`
    width:26px;
`

export {SocialMediaContainer, IconSocial, Container}