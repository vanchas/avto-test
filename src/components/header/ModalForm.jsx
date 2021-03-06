import React, {useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { contactService } from '../../_services/contact.service';

export const OrderCall = props => {
  const [show, setShow] = React.useState(false);
  // const [warningMessage, setWarningMessage] = React.useState('');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [text, setText] = useState(props.langData)

  useEffect(() => {
    setText(props.langData)
  }, [props.langData])


  const handleClose = () => {
    setShow(false);
  };

  const handleShow = e => {
    setShow(true);
  };

  const fetchData = async e => {
    e.preventDefault();

    const re = /^(\+?3?8)?0?\d{9}$/;

    if (name.length && phone.length && phone.toString().match(re)) {
      setLoading(true);
      await contactService.sendEmail(name, phone);
      setName('');
      setPhone('');
      setLoading(false);
    } else {
      alert('Поле "Имя" и "Телефон" должно быть корректно заполнено');
    }
    handleClose();
  }

  return (
    <>
      <Button variant=""
        className="order-call-btn bg-transparent py-1 px-3"
        onClick={e => handleShow(e)}>
        {props.header_btn_call}
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
          </form>
        </Modal.Body>
        <Modal.Footer className="pt-0 bkg-light-info d-flex flex-column">
          {loading ?
            <div className="alert alert-success" role="alert">
              {text.inspection_on_site_modal_order_call_form_thanks_message}!
            </div>
            :
            <Button
              variant="info"
              className="btn text-white btn-send-email mx-auto d-block mt-3 mb-1 border-0 font-weight-bolder"
              onClick={e => fetchData(e)}>
              {text.inspection_on_site_modal_order_call_form_submit_button}
        </Button>
          }
          <Button variant=""
            className="m-0 border-0 text-success"
            onClick={handleClose}>
            <u>{text.inspection_on_site_modal_order_call_form_cancel_button}</u>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}