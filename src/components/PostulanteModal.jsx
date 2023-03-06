import {Modal, Button} from "react-bootstrap";

function StaticExample() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Registro Postulante</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modalbody">
          <div><label>Nombres</label><input type="text" name="" id="" /></div>
          <div><label>Apellidos</label><input type="text" name="" id="" /></div>
          <div><label>Documento</label><input type="text" name="" id="" /></div>
          <div><label>Email</label><input type="text" name="" id="" /></div>
          <div><label>Fecha Nacimiento</label><input type="text" name="" id="" /></div>
          <div><label>Profesión</label><input type="text" name="" id="" /></div><div><label>Aspiración Literal</label><input type="text" name="" id="" /></div>
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