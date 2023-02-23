import Dropdown from 'react-bootstrap/Dropdown';
import Modal1 from "./StaticExample";

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        Registrate
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  href="#/StaticExample">Aspirante</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Empresa</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;