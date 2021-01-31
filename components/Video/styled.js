import styled from 'styled-components'

const Videito = styled.iframe`
    width: 360px;
    height:200px;
    border: none;

    @media (max-width: 480px) {
        width:100%;
    }
`
export default Videito