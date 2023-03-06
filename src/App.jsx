import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from "./page/Home";
// import Home from "./page/Aspirante";
// import 'bootstrap/dist/css/bootstrap.min.css' ;
// import Modal1 from "./components/StaticExample";
// import Modal2 from "./components/EmpresaModal";
import Aspirante from './page/Aspirante';
import Empresa from './page/Empresa';

function App() {

  return (
    <div className="App">
      <div>
        {/* <Empresa/> */}
        {/* <Modal2/> */}
        <Home/>
        {/* <Aspirante/> */}
      </div>
    </div>
  )
}

export default App
