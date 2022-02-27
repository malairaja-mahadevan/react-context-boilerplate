import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Alert, Button, Modal } from "react-bootstrap";

import { useAppContext } from "./context/AppProvider";
import { hideModal, showModal } from "./context/AppReducer";

function App() {
  const { state, dispatch } = useAppContext();

  const handleClose = () => dispatch(hideModal());
  const handleShow = () => dispatch(showModal());

  const renderModal = () => (
    <Modal show={state.modal.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to react world. This is a boilerpate template for react apps
          using react context
        </p>
        <p>The data which is shown below comes from context provider</p>
        <Alert variant="info">
          {state.data.firstName} {state.data.lastName} {state.data.date}
        </Alert>

        <p style={{ marginTop: "50px" }}>
          Click below button to know how to dispatch action
        </p>
        <Button onClick={handleShow}>Launch modal</Button>
      </header>
      {renderModal()}
    </div>
  );
}

export default App;
