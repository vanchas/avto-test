import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { contactService } from '../../../_services/contact.service';
import './result.scss';
import { getCar } from '../../../_helpers/get-car';

export const OrderForm = props => {
  const [show, setShow] = React.useState(false);
  // const [warningMessage, setWarningMessage] = React.useState('');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [vin, setVin] = React.useState('');
  const [loading, setLoading] = React.useState(false);



  const handleClose = () => {
    setShow(false);
  };

  const handleShow = e => {
    setShow(true);
  };

  const fetchData = async e => {
    e.preventDefault();
    const vinCode = (getCar().Found && getCar().Found.vin) ? getCar().Found.vin : vin;

    if (name.length && phone.length) {
      setLoading(true);
      await contactService.sendEmail(name, phone, vinCode);
      setName('');
      setPhone('');
      setLoading(false);
    } else {
      alert('Поля "Ім`я" і "Телефон" мають бути заповнені');
    }
    handleClose();
  }

  return (
    <>
      <Button variant="info"
        className="mt-3 d-flex mx-auto btn btn-danger btn-danger-modal px-5"
        onClick={e => handleShow(e)}>
        {props.price_block_card_btn_buy}
      </Button>

      <Modal className="mt-5" show={show} onHide={handleClose}>
        <Modal.Header closeButton
          className="bkg-light-info"
        >
          <Modal.Title>
            <div className="text-success text-center h5">
              {props.langData.title_contact_soon_form}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="pb-0 bkg-light-info" >
          <form className="mb-2 d-flex container flex-column modal-form form-group">
            <label className="mt-3">
              <input type="text"
                value={name}
                placeholder="Ім’я"
                onChange={e => { setName(e.target.value) }}
                className="form-control" />
            </label>
            {/* {warningMessage.length ?
              <div style={{ fontSize: '.8em' }}
                className="alert alert-danger m-0 text-center" role="alert">
                {warningMessage}
              </div> : null} */}
            <label className="mt-2">
              <input type="number"
                value={phone}
                placeholder="Телефон"
                onChange={e => { setPhone(e.target.value) }}
                className="form-control" />
            </label>
            <label className="mt-3">
              <input type="text"
                value={vin}
                placeholder={(getCar().Found && getCar().Found.vin) ? getCar().Found.vin : "VIN"}
                onChange={e => { setVin(e.target.value) }}
                className="form-control" />
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer className="pt-0 bkg-light-info d-flex flex-column">
          {loading ?
            <div className="alert alert-success" role="alert">
              Дякуемо!
            </div>
            :
            <Button
              variant=""
              className="btn text-white mx-auto btn-send-email d-block mt-3 mb-1 border-0 font-weight-bolder"
              onClick={e => fetchData(e)}>
              Надіслати
        </Button>
          }
          <Button variant=""
            className="m-0 border-0 text-success"
            onClick={handleClose}>
            <u>Скасувати</u>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}