import React, {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CarCheck from '../main/result-page/image/car-check_g.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {getCar} from "../../_helpers/get-car";
import {contactService} from "../../_services/contact.service";
import s from "../main/result-page/mobile-result.module.scss";
import MreoGreen from "../main/result-page/image/mreo-green.png";
import MaskedInput from "react-text-mask";
import {InfoTextModal} from "../utils/InfoTextModal";

const phoneNumberMask = [
  // /[1-9]/,
  /\d/,
  /\d/,
  "(",
  /\d/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
];

export default function InspectionModal(props) {
  const [show, setShow] = React.useState(false);
  const [phone, setPhone] = React.useState("");
  const [vin, setVin] = React.useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const car = getCar().Found;
    if (car && car.vin) setVin(car.vin);
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (e) => {
    setShow(true);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (phone.length) {
      setTimeout(() => {
        setMessage('Ваш запит успішно надіслано')
      }, 500)
      await contactService.sendEmail(
          phone
              .trim()
              .split(")")
              .join("")
              .split("(")
              .join("")
              .split("-")
              .join("")
              .split(" ")
              .join(""),
          vin
      );
      setPhone("");
      setTimeout(() => {
        handleClose();
        setMessage(null)
      }, 3500)
    } else {
      alert('Поле "Телефон" має бути обовʼязково заповнене');
    }
  };

  return (
      <>
        <Button
            variant=""
            style={{ borderRadius: "2em" }}
            className="mt-1 d-flex mx-auto btn btn-outline-danger pb-0 px-4 font-weight-bold"
            onClick={(e) => handleShow(e)}
        >
          {props.inspection_on_site_modal_button}
        </Button>

        <Modal className="mt-5" show={show} onHide={handleClose}>
          <div className={`px-2 py-3`}>
            <div className={`${s.result_item} border-0`}>
              <div>
                <img width={35} src={MreoGreen} alt="" />
              </div>
              <div>
                <span>{props.langData.inspection_on_site_modal_title}</span>
              </div>
              <div onClick={handleClose}>
                <i className="fas fa-times text-secondary" />
              </div>
              <div className={s.more_info_block}>
                <h6 style={{ color: "#67bd9d" }}>
                  {props.langData.inspection_on_site_modal_subtitle}
                </h6>
                <form
                    onSubmit={formSubmitHandler}
                    name={`inspection`}
                    style={{ borderBottom: "none" }}
                >
                  <MaskedInput
                      mask={phoneNumberMask}
                      id="phone"
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`${s.form_control} ${s.tel_input}`}
                      placeholder={`38 (0__) ___-__-__`}
                      style={{ borderColor: "#67bd9d" }}
                  />
                  <input
                      value={vin}
                      type="text"
                      minLength={`17`}
                      maxLength={`17`}
                      placeholder={`VIN`}
                      onChange={(e) => setVin(e.target.value)}
                      style={{ borderColor: "#67bd9d" }}
                      className={s.form_control}
                  />
                  {!message ? (
                      <button
                          type={`submit`}
                          className={`btn btn-outline-danger pb-1 pt-1 mt-1 px-4`}
                      >
                        {props.langData.inspection_on_site_modal_call_me_btn}
                      </button>
                  ) : (
                      <div
                          className="alert alert-success py-1"
                          style={{ borderRadius: "3em" }}
                          role="alert"
                      >
                        {message}
                      </div>
                      // <div className={`text-center`}>
                      //   <div className="spinner-border text-danger" role="status">
                      //     <span className="sr-only">Loading...</span>
                      //   </div>
                      // </div>
                  )}
                  <div className={s.info_sign}>
                    <InfoTextModal title={`ghdkjfg`} text={`fghlkdsfhgsdkjfh`} buttonLabel={"i"} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal>
      </>
  );
};
