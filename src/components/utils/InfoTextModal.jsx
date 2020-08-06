import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const styles = {
  button: {
    fontSize: ".8em",
    color: "#fff",
    fontFamily: "Courgette, cursive",
    outline: "none",
  },
  title: {
    textAlign: 'center'
  },
    content: {
      color: '#007c60',
      padding: '2em 1em'
    }
};

export const InfoTextModal = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Button variant="" style={styles.button} onClick={() => setShow(!show)}>
        {props.buttonLabel}
      </Button>

      <Modal className="mt-5" show={show} onHide={handleClose}>
        <div style={styles.content}>
          <h5 style={styles.title}>{props.title}</h5>
          <p>{props.text}</p>
        </div>
      </Modal>
    </>
  );
};
