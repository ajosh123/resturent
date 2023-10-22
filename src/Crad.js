import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Crad({data}) {
  return (
  
      <Row>
      {
        data.map(i=>(
          <Col sm={6} md={4} lg={3}>
 <Card className='ms-2 mt-3'>
      <Card.Img variant="top" style={{width:'100%', height:'300px'}} className='p-1 border border-dark' src={i.photograph} />
      <Card.Body>
        <Card.Title>
        <Link to={`ResturentView/${i.id}`} style={{textDecoration:'none'}}><h5 className=''>{i.name}</h5></Link>
        </Card.Title>
        <Card.Text>
          {i.address}
        </Card.Text>
      
      </Card.Body>
    </Card>
          </Col>
        ))
      }
         
    </Row>
  
  )
}

export default Crad