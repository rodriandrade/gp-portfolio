import styled from 'styled-components'

const GridContainer = styled.div`
    display: grid;
    grid-template-columns:repeat(12, 1fr);
    grid-column-gap: ${props => props.colGap || 30}px;
    grid-row-gap: ${props => props.rowGap || 40}px;
    width:1200px;
    justify-items: ${(props) => (props.justifyItems  ? "left" : "center")};
    align-items: ${(props) => (props.alignItems  ? "flex-start" : "center")};
    justify-content: center;
    align-content: center;
    ${(props) => (props.justifyItems  ? "left" : "center")};

    @media (max-width: 768px) {
        width:768px;
    }
    @media (max-width: 480px) {
        width:480px;
    }
`

const ColContainer = styled.div`
    grid-column: span ${props => props.desktop || 12};
    @media (max-width: 768px) {
        grid-column: span ${props => props.tablet || '12'};
    }
    @media (max-width: 480px) {
        grid-column: span ${props => props.mobile || '12'};
    }
`

export { GridContainer, ColContainer }