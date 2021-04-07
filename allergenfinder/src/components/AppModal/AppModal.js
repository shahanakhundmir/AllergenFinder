import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./AppModal.css"

function AppModal({ menu, show, image, id, title, discription, allergen, onClose }) {
    console.log({ id })

    const status = show

    const handleClose = () => onClose();

    const handleShow = () => show.setShow(true);

    return (
        <div>
            <Modal className="Modal" show={status} onClose={handleClose} >
                <Modal.Title className="modal-title">{title}</Modal.Title>
                <Modal.Body>
                    <img className="Modal-image" alt="" src={image} />
                    <p className="modal-discription">{discription}</p>
                    <div>{allergen}</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default AppModal;