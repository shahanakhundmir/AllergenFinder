import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./AppModal.css"

function AppModal({ menu, show, image, id, title, description, ingredients, allergen,factoryContan, onClose }) {
    //console.log({ id })
    const status = show
    const handleClose = () => onClose();
    const handleShow = () => show.setShow(true)
    ingredients=ingredients.split(",")
    return (
        <div>
            <Modal className="Modal" show={status} onClose={handleClose} >
                <Modal.Body>
                    <img className="Modal-image" alt="Pop-up" src={image} />
                    <Modal.Title className="title-font">{title}</Modal.Title>
                    <p className="modal-description text-font">{description}</p>
                    <p className ="title-font">Ingredients</p>
                    <p className="Modal-ingredients text-font" >{ingredients.map((item, index) =>
                        <p key={index}>{item}</p>
                    )}</p>
                    <p className ="title-font">Contamination Info</p>
                    <p className="Modal-contamination text-font" >
                        {factoryContan}</p>  
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