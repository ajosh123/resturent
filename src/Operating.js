import React from 'react'
import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Operating({timedata}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Button  variant="" onClick={handleShow}>
        <strong>Opening Hour</strong>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<ListGroup>
    <ListGroup.Item>Monday:{timedata.Monday}</ListGroup.Item>
    <ListGroup.Item>Tuesday:{timedata.Tuesday}</ListGroup.Item>
    <ListGroup.Item>Wednesday:{timedata.Wednesday}</ListGroup.Item>
    <ListGroup.Item>Thursday:{timedata.Thursday}</ListGroup.Item>
    <ListGroup.Item>Friday:{timedata.Friday}</ListGroup.Item>
    <ListGroup.Item>Saturday:{timedata.Saturday}</ListGroup.Item>
    <ListGroup.Item>Sunday:{timedata.Sunday}</ListGroup.Item>
</ListGroup>
        </Modal.Body>
        
      </Modal>
    </div>
  )
}

export default Operating