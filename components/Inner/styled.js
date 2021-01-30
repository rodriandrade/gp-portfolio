import styled from 'styled-components'

const InnerContainer = styled.div`
    max-width:1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
        max-width:768px;
    }
    @media (max-width: 480px) {
        max-width:480px;
    }
    
`
export default InnerContainer