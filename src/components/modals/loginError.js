import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';


const loginError = (props) => {
    return (
        <Modal show={props.modal} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.error}</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
               </Button>
            </Modal.Footer>
        </Modal>
    )

}

export default loginError