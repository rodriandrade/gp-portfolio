import {Image, Container, CloseButton} from './styled'
import React, {useRef} from 'react'
import ClientOnlyPortal from '../ClientOnlyPortal'

const Modal = props => {

    const modalRef = useRef();

    const closeModal = e =>{
        if(modalRef.current === e.target){
            props.setModalIsOpen(false)
        }
    }

    return(
        <div>
        {props.modalIsOpen ? 
        <ClientOnlyPortal selector="#modal">
            <Container ref={modalRef} onClick={closeModal}>
                <CloseButton src="/cancel.svg" onClick={ () => props.setModalIsOpen(!props.modalIsOpen)} />
                <Image src={props.image} alt={props.image} />
            </Container>
        </ClientOnlyPortal>
        : null}
        </div>
    )
}

export default Modal