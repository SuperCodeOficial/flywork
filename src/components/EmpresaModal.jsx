import {Modal, Button} from "react-bootstrap";

function StaticExample() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Registro Empresas</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modalbody">
          <div><label>Nombres</label><input type="text" name="" id="" /></div>
          <div><label>Nit</label><input type="text" name="" id="" /></div>
          <div><label>Razon Social</label><input type="text" name="" id="" /></div>
          <div><label>Sector</label><input type="text" name="" id="" /></div>
          <div><label>Direccion</label><input type="text" name="" id="" /></div>
          
          
          {/* <label>Nit</label> */}
        </Modal.Body>

        <Modal.Footer>
        <Button variant="secondary">Cerrar</Button>
          <Button variant="success">Guardar</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample;