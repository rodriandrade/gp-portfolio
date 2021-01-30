import {Grid, Col} from '../Grid'
import {Image, OpenImage, ImageContainer, TextContainer} from './styled'
import Modal from '../Modal'
import React, {useState, useEffect} from 'react'

const Multimedia = props => {

    const {image} = props.data
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () =>{
        setModalIsOpen(!modalIsOpen)
    }
    
    return(
        <Col desktop={4} tablet={6} mobile={12}>
            <div>
                <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} image={image} />
                <ImageContainer size={props.size}>
                    <Image onClick={openModal} src={image} alt={image} size={props.size}/>
                    <TextContainer onClick={openModal}>
                        <OpenImage onClick={openModal}>Abrir imagen</OpenImage>
                    </TextContainer>
                </ImageContainer>
            </div>
        </Col>
    )
}

export default Multimedia