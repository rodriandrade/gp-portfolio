import React from 'react'
import {GridContainer, ColContainer } from './styled'

const Grid = ({children, ...props}) => {
    return(
        <GridContainer
            colGap={props.colGap}
            rowGap={props.rowGap}
            alignItems={props.alignItems}
            justifyItems={props.justifyItems}
        >
            {children}
        </GridContainer>
    )
}

const Col = ({children, ...props}) => {
    return(
        <ColContainer 
            desktop={ props.desktop } 
            tablet={ props.tablet }
            mobile={ props.mobile }
            order={ props.order }
        >
            {children}
        </ColContainer>
    )
}

export { Grid, Col }