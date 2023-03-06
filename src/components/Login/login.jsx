import React from 'react'
import {Form} from "react-bootstrap";


import "./login.scss";
import Basic from "../BasicExample";
import BasicExample from '../BasicExample';


function login() {
  return (
    <div className="login">
        <div className=''>
            <h2>Iniciar sesión</h2>
            <FormLogin/>
            <FormRegistrate/>
        </div>
    </div>
  )
}
function FormLogin(){
    
        <Form className='mt-1 mb-1 loginA'>
            <div className='form-item'><span className='icon-user'></span><input type="text" name="" id="" placeholder='UserName' /></div>
            <div className='form-item'><span className='icon-pass'></span><input type="password" name="" id="" placeholder='Password' /></div>
            <div className='form-item'><span className='icon-type'></span><select name="" id=""><option value="">Select User</option><option value="">Empresa</option><option value="">Aspirante</option></select></div>
            <div className='d-flex justify-content-center my-2'><input className='form-item__button' type="button" value="Iniciar sesión" /></div>
            <div className="line"></div>
        </Form>
    
}
function FormRegistrate(){
  return(
    <Form className='my-3 register'>
        <span className='text-center mb-3 px-3'>Bienvenido a la mejor plataforma de empleo, si no tienes cuenta puedes registrarte</span>
        <BasicExample/>
      </Form>
  );
}
// export default login;