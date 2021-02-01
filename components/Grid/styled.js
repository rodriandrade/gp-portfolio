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
    //background-color:red;

    @media (max-width: 768px) {
        width:768px;
    }
    @media (max-width: 480px) {
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        width:90%;
        margin:0 auto;
    }
`

const ColContainer = styled.div`
    //background-color:yellow;
    grid-column: span ${props => props.desktop || 12};
    
    @media (max-width: 768px) {
        grid-column: span ${props => props.tablet || '12'};
    }
    @media (max-width: 480px) {
        grid-column: span ${props => props.mobile || '12'};

        :nth-child(1) { 
            order: ${props => props.order || '1'}; 
        }

        :nth-child(2) { 
            order: ${props => props.order || '2'}; 
        }

        :nth-child(3) { 
            order: ${props => props.order || '3'}; 
        }
        
        :nth-child(4) { 
            order: ${props => props.order || '4'}; 
        }

        :nth-child(5) { 
            order: ${props => props.order || '5'}; 
        }

        :nth-child(6) { 
            order: ${props => props.order || '6'}; 
        }

        :nth-child(7) { 
            order: ${props => props.order || '7'}; 
        }

        :nth-child(8) { 
            order: ${props => props.order || '8'}; 
        }

        :nth-child(9) { 
            order: ${props => props.order || '9'}; 
        }

        :nth-child(10) { 
            order: ${props => props.order || '10'}; 
        }

        :nth-child(11) { 
            order: ${props => props.order || '11'}; 
        }
        
        :nth-child(12) { 
            order: ${props => props.order || '12'}; 
        }

    }
`

export { GridContainer, ColContainer }