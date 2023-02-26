import { React } from "react";
import { Modal } from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";

//scss
import "./style.scss";

const FormModal = ({ show, onClose, heading, children, size, className, className1 }) => {
  return (
    <div>
      <Modal className={className1} show={show} centered onHide={onClose} size={size}>
        <Modal.Header>
          <Modal.Title>{heading}</Modal.Title>
          <CloseButton onClick={() => onClose(false)} />
        </Modal.Header>
        <Modal.Body className={className}>
          <div>{children}</div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FormModal;
