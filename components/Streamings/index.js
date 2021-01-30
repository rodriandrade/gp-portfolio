import React, {useState, useEffect} from 'react'
import Multimedia from '../Multimedia'
import {Grid, Col} from '../Grid'
import Video from '../Video'

const Streamings = props =>{

    console.log(props.data.image)
    return(
        <div>
            <Col desktop={4} tablet={6} mobile={12}>
            {props.data.image !== "" ?
                <Multimedia data={props.data} size="bigger" /> 
            : <Video data={props.data} /> }
            </Col>
            
        </div>
    )
}

export default Streamings