import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CarCheck from '../main/result-page/image/car-check_g.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function InspectionModal(props) {
  const [show, setShow] = React.useState(false);
  const [vin, setVin] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (e) => {
    setShow(true);
  };

  const fetchData = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Button
        variant=""
        className="btn btn-outline-danger bg-transparent inspection-modal-btn py-1 px-3"
        onClick={(e) => handleShow(e)}
      >
        {/*{props.header_btn_call}*/}
        ВИЇЗДНА ПЕРЕВІРКА
      </Button>

      <Modal className="mt-5 inspection-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bkg-light-info border-0">
          <Modal.Title>
            <div className="d-flex h5">
              {/*{props.langData.title_contact_soon_form}*/}
              <img src={CarCheck} alt={``} />
              ВИЇЗДНА ПЕРЕВІРКА
            </div>
            <p>Експерт приїде та проведе огляд авто на місці. Ви отримаєте детальний звіт!</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-0">
          <form className="mb-2 d-flex container flex-column modal-form form-group">
            <label className="mt-2">
              {/*<input*/}
              {/*  type="number"*/}
              {/*  value={phone}*/}
              {/*  placeholder="Телефон"*/}
              {/*  onChange={(e) => setPhone(e.target.value)}*/}
              {/*  className="form-control"*/}
              {/*/>*/}
              <PhoneInput
                  placeholder="Телефон"
                  value={phone}
                  required
                  country={'ua'}
                  // onlyCountries={['ua']}
                  className="form-control tel-input"
                  onChange={phone => {
                    setPhone(phone);
                  }}
              />
            </label>
            <label className="mt-3">
              <input
                  type="text"
                  minLength={`18`}
                  maxLength={`18`}
                  value={vin}
                  placeholder="VIN:"
                  onChange={(e) => setVin(e.target.value)}
                  className="form-control"
              />
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer className="pt-0 bkg-light-info d-flex flex-column border-0">
          {loading ? (
            <div className="alert alert-success" role="alert">
              Спасибо!
            </div>
          ) : (
            <Button
              variant=""
              className="btn btn-outline-danger mb-3"
              onClick={(e) => fetchData(e)}
            >
              Передзвоніть мені
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
