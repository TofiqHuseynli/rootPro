import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../style/post.css";
import Postmet from "./Postmet";
import { contextHandel } from "../Context";
function Add({ data,checkAppear,handleMultiDelete }) {
  const [show, setShow] = React.useState(false);
  const [name, setName] = React.useState("");
  const [username, setUserName] = React.useState("");
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const {check,mode} =useContext(contextHandel);


  const add = () => {
    if (name == "" || username == "") {
      window.alert("Empty");
    } else {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          username: username,
        }),
      });
      data();
      setName("");
      setUserName("");
    }
    
  };
  return (
    <div >
      <>
        <Postmet  name={name} username={username} />
        <div className="d-flex justify-content-between  pt-2 px-3">
          
            <button onClick={()=>{
            
              checkAppear()
            }} className={check ? "btn not-show " : "btn btn-warning show"}>MultiDel</button>
            <button onClick={()=>{

              handleMultiDelete()
              checkAppear()
            }} className={check ? "btn btn-danger show" : "btn  not-show"}>Del</button>
          
          
          <Button variant="primary" onClick={handleShow}>
            Add
          </Button>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header className={mode ? "light" : "dark-mode-modal"} closeButton>
            <Modal.Title>Add</Modal.Title>
          </Modal.Header>
          <Modal.Body className={mode ? "light" : "dark-mode-modal"}>
            <div className="mb-3">
              {" "}
              <label>Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                className={mode ? "form-control" : "form-control dark-mode-modal-input"}
              />
            </div>
            <div className="mb-3">
              {" "}
              <label>Username</label>
              <input
                onChange={(e) => setUserName(e.target.value)}
                className={mode ? "form-control" : "form-control dark-mode-modal-input"}
              />
            </div>
            <div className="mb-3">
              {" "}
              <label>Email</label>
              <input className={mode ? "form-control" : "form-control dark-mode-modal-input"} />
            </div>
          </Modal.Body>
          <Modal.Footer className={mode ? "light" : "dark-mode-modal"}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                add();
                handleClose();
              }}
            >
              ADD
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default Add;
