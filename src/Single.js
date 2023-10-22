import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { useState } from 'react';

import { useParams } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Operating from './Operating';
import Review from './Review';
import { useDispatch, useSelector } from 'react-redux';
import { getResaturants } from './actions/restAction';


function Single() {
 
const params=useParams()
const dispatch=useDispatch()
useEffect(()=>{
 dispatch(getResaturants)
},[])
//to set store
const restaurants=useSelector(state=>state. restReducer.restLis) 
  const single=restaurants.find(i=>i.id==params.id)
 
  return (
    <div>
     {
      single?
      <div>
 <div>
        <Container>
       
        <Row>
       
        <Col xs={6} md={4}>
       
        <Image src={single.photograph} thumbnail />
        </Col>
        <Col lg={6} md={12}  className='ms-5' >
       
       <h4 className='text-center'>{single.name}</h4>
       <ListGroup className='ms-5' >
        <ListGroup.Item id='d' className='text mt-2 p-2 border border' style={{backgroundColor:'orange',color:'black'}}>
        Negiborhod:{single.neighborhood}
        </ListGroup.Item>
        <ListGroup.Item id='d' className='text mt-2 p-2 border border' style={{backgroundColor:'orange',color:'black'}}>
        Address:{single.address}
        </ListGroup.Item>
        <ListGroup.Item id='d' className='text mt-2 p-2 border border' style={{backgroundColor:'orange',color:'black'}}>
       Cusine tyoe:{single.cuisine_type}
        </ListGroup.Item>
        <ListGroup.Item id='d' className='text-center mt-2 p-2 border border' style={{backgroundColor:'black'}}>
        <Operating timedata={single.operating_hours}></Operating>
        </ListGroup.Item>
        <ListGroup.Item id='d' className='text-center mt-2 p-2 ' >
       <Review reviews={single.reviews}></Review>
        </ListGroup.Item>
        </ListGroup>
        </Col>
       
      </Row>
      
        </Container>
                  </div>
                
      </div>:""
     }
       
    </div>
  )
}

export default Single