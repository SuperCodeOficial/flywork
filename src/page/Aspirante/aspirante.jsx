import {React, useState} from 'react'
import {Container, Row, Col, Form} from "react-bootstrap";
// import Login from ".././../components/Login";
import Registro from ".././../components/BasicModal";
// import "./home.scss";


export default function Aspirante() {
  return (
    <div className='aspirante'>
      
      <Container>
        <Row>
          <Col className='home-logo mt-2' lg={3}></Col>
          <Col className='home-title' lg={9}><h1 className='d-flex'>AGEmpleo Emanuel y Asociado</h1></Col>
        </Row>
      </Container>
      <Container className='home-container'>
        <Row className='home-rows'>
          <Col className='home-colum__list' lg={8}><h2 className='text-center py-2'>Lista de Vacantes</h2></Col>
          <Col className='home-colum' lg={4}>
            <Login openModal={openModal} setshowModal={setshowModal} />
          </Col>
        </Row>
      </Container>
          
      <div className='home-footer text-center'>@2023 todos los derechos reservados EM</div>
    </div>
 )
}
