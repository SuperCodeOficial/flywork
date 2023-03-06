import {React, useState} from 'react'
import {Container, Row, Col, Form} from "react-bootstrap";
import "./empresa.scss";
// import Login from ".././../components/Login";

export default function empresa() {
  return (
    <div className='empresa'>
        <Container fluid>
        <Row className="empresa-header">
                <Col className='empresa-header-logo' lg={3}></Col>
                <Col className='empresa-header-title' lg={9}><h2 className=''>Gestión Empresa</h2></Col>
        </Row>
        <Container fluid>
            <Row className='empresa-datos'>
              <Col className='empresa-datos__datos' lg={3}>Datos</Col>
              <Col className='empresa-datos__acciones' lg={9}>Acciones</Col>
            </Row>
        </Container>
      </Container>
      <div className='home-footer text-center'>@2023 todos los derechos reservados EM</div>
    </div>
  )
}
