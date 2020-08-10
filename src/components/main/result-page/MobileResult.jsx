import React, { useEffect, useState } from "react";
import Owner from "./image/owner-g.png";
import Home from "./image/home-g.png";
import WheelImg from "./image/wheel_g.png";
import CoinsImg from "./image/cash_g.png";
import Seller from "./image/car-seller_g.png";
import MegaphoneImg from "./image/rupport_g.png";
import CustomsImg from "./image/customs_g.png";
import Telegram from "../../../assets/tg.svg";
import s from "./mobile-result.module.scss";
import { getCar } from "../../../_helpers/get-car";
import NumberImg from "./image/number_g.png";
import CarImg from "./image/car_g.png";
import CarSearchImg from "./image/car-search_g.png";
import PetrolImg from "./image/petrol_g.png";
import KgImg from "./image/kg_g.png";
import ReportImg from "./image/report_g.png";
import MreoGreen from "./image/mreo-green.png";
import Switch from "../../utils/Switch";
import MaskedInput from "react-text-mask";
import { history } from "../../../_helpers/history";
import { userService } from "../../../_services/user.service";
import { resultForms } from "../../../_services/resultForms.service";
import { connect } from "react-redux";
import { OrderForm } from "./ModalForm";
import { InfoTextModal } from "../../utils/InfoTextModal";
import { authHeader } from "../../../_helpers/auth-header";
import InspectionModal from "../../header/InspectionModal";

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

function MobileResult({ text, success }) {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [statusText, setStatusText] = useState("ПЕРЕВІРИТИ НА РОЗШУК");
  const [registrationSwitch, setRegistrationSwitch] = useState(false);
  const [ownerSwitch, setOwnerSwitch] = useState(false);
  const [inspectionSwitch, setInspectionSwitch] = useState(false);
  const [priceSwitch, setPriceSwitch] = useState(false);
  const [discountSwitch, setDiscountSwitch] = useState(false);
  const [bonusSwitch, setBonusSwitch] = useState(false);
  const [phone, setPhone] = useState("");
  const [vin, setVin] = useState("");
  const [email, setEmail] = useState("");
  const [formOwnerData, setFormOwnerData] = useState(0);
  const [formInspectionData, setFormInspectionData] = useState(0);
  const [formMonitoringData, setFormMonitoringData] = useState(0);
  const [formDiscountData, setFormDiscountData] = useState(0);
  const [formBonusData, setFormBonusData] = useState(0);

  useEffect(() => {
    const carData = getCar().Found;
    if (carData && carData.brand) {
      // console.log(carData)
      setCar(carData);
    } else {
      history.push("/not-found");
    }
    const user = authHeader().Authorization;
    if (user && user.email) setEmail(user.email);
    const car = getCar().Found;
    if (car && car.vin) setVin(car.vin);
    getSecretFormsDetails();
  }, []);

  const newWindowOpen = () => {
    const inputValue = localStorage.getItem('avto-test-value')
    if (inputValue.length === 17) {
      window.open(
          `https://www.carvertical.com/ua/poperednja-perevirka?a=avtotest&b=f1781078&data1=more&vin=${car.vin}`,
          "_blanc"
      );
    } else {
      window.open(
          `https://www.carvertical.com/ua/landing/v3?a=avtotest&b=f1781078&data1=plates`,
          "_blanc"
      );
    }
  };

  const switchHandler = (id, value) => {
    setRegistrationSwitch(false);
    setOwnerSwitch(false);
    setInspectionSwitch(false);
    setPriceSwitch(false);
    setDiscountSwitch(false);
    setBonusSwitch(false);
    if (id === "R") {
      setRegistrationSwitch(value);
    } else if (id === "O") {
      setOwnerSwitch(value);
    } else if (id === "I") {
      setInspectionSwitch(value);
    } else if (id === "M") {
      setPriceSwitch(value);
    } else if (id === "D") {
      setDiscountSwitch(value);
    } else if (id === "B") {
      setBonusSwitch(value);
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setMessage("Ваш запит успішно надіслано");
    }, 500);
    const form = e.target;
    resultForms.formFetch(
      form.name,
      phone.split(" ").join("").split("(").join("").split(")").join(""),
      vin,
      email
    );
    setTimeout(() => {
      setEmail("");
      setPhone("");
      setVin("");
      const car = getCar().Found;
      if (car && car.vin) setVin(car.vin);
      const user = authHeader().Authorization;
      if (user && user.email) setEmail(user.email);
      setMessage(null);
      setRegistrationSwitch(false);
      setOwnerSwitch(false);
      setInspectionSwitch(false);
      setPriceSwitch(false);
      setDiscountSwitch(false);
      setBonusSwitch(false);
    }, 3500);
  };

  const getSecretFormsDetails = () => {
    userService
      .secretFormsDetails()
      .then((data) => {
        data.map((item) => {
          if (item.key === "form_owner_data") {
            setFormOwnerData(parseInt(item.value));
          } else if (item.key === "form_on-site_inspection") {
            setFormInspectionData(parseInt(item.value));
          } else if (item.key === "form_auto_monitoring") {
            setFormMonitoringData(parseInt(item.value));
          } else if (item.key === "form_check_discount") {
            setFormDiscountData(parseInt(item.value));
          } else if (item.key === "form_seller_bonus") {
            setFormBonusData(parseInt(item.value));
          }
        });
      })
      .catch((err) => console.error(err));
  };

  const buttonCheckVinHandler = () => {
    // https://www.carvertical.com/ua/poperednja-perevirka?a=avtotest&b=f1781078&data1=moreD&vin=
    // https://www.carvertical.com/ua/landing/v3?a=avtotest&b=f1781078&data1=plates
    const link = car && car.vin
        ? 'https://www.carvertical.com/ua/poperednja-perevirka?a=avtotest&b=f1781078&data1=moreD&vin=' + car.vin
        : localStorage.getItem("avto-test-value").length === 17
            ? 'https://www.carvertical.com/ua/poperednja-perevirka?a=avtotest&b=f1781078&data1=moreD&vin='
                + localStorage.getItem("avto-test-value")
            : 'https://www.carvertical.com/ua/landing/v3?a=avtotest&b=f1781078&data1=plates';
    window.open(link ,"_blanc");
  }

  return car ? (
    <div className={s.mobile_result_block}>
      <div className={s.results_group}>
        <div className={s.result_item}>
          <div>
            <span
              id="vin"
              style={{
                letterSpacing: "3px",
                color: "#68bc9d",
                fontWeight: 900,
              }}
            >
              VIN
            </span>
          </div>
          <div>
            <span>{car.vin}</span>
          </div>
        </div>
        <div className={s.result_item}>
          <div>
            <img width={32} src={NumberImg} alt="" className="" />
          </div>
          <div>
            <span>
              {car.number}, {car.code}
            </span>
          </div>
        </div>
        <div className={s.result_item}>
          <div>
            <img width={30} src={CarImg} alt="" />
          </div>
          <div>
            <span>
              {car.brand} {car.model} {car.year}
            </span>
          </div>
        </div>
        <div className={s.result_item}>
          <div>
            <img width={30} src={CarSearchImg} alt="" />
          </div>
          <div>
            <span>
              <span>{car.kind} | </span>
              <span>{car.color} | </span>
              <span>{car.num_seating} МІСЦЬ</span>
            </span>
          </div>
        </div>
        <div className={s.result_item}>
          <div>
            <img width={25} src={PetrolImg} alt="" />
          </div>
          <div>
            <span>
              {car.fuel}, {car.capacity} см
            </span>
          </div>
        </div>
        <div className={s.result_item}>
          <div>
            <img width={30} src={KgImg} alt="" />
          </div>
          <div>
            <span title={text.title_total_weight}>
              {car.total_weight} кг
              <span>&nbsp;|&nbsp;</span>
            </span>
            <span title={text.title_own_weight}>{car.own_weight} кг</span>
          </div>
        </div>
        <div className={s.result_item}>
          <div>
            <img width={28} src={ReportImg} alt="" onClick={() => switchHandler("R", !registrationSwitch)} />
          </div>
          <div className={s.with_switch}>
            <div onClick={() => switchHandler("R", !registrationSwitch)}>
              {!car.date ? (
                ""
              ) : (
                <span>
                  <span title={`Дата останньої реєстрації`}>
                    {car.date}
                  </span>
                </span>
              )}
              {!car.reg_object[0].date
                ? ""
                : car.reg_object.map((reg, ind) => {
                    return (
                      <span
                        key={ind}
                        title={`${text.title_car_code}: ${reg.code}, ${text.title_car_number}: ${reg.number}`}
                      >
                        &nbsp;|&nbsp;{car.dep}
                      </span>
                    );
                  })}
            </div>
            <Switch
              handler={switchHandler}
              isOn={registrationSwitch}
              id={"R"}
            />
          </div>
          {registrationSwitch && (
            <div className={s.more_info_block}>
              <p>
                <span>КОД {car.registration_code}</span> {car.registration}
              </p>
              <p>
                <span>{car.dep}</span> {car.region}
              </p>
              <p>
                <span>Перша реєстрація</span> {car.first_reg_date}
              </p>
            </div>
          )}
        </div>
        <div className={s.btn_read_more}>
          <span
            className={`btn btn-outline-danger px-4 pb-1`}
            title="Перевірити VIN та отримати повний звіт з історії транспортного засобу"
            onClick={newWindowOpen}
          >
            Дізнатися більше
          </span>
        </div>
      </div>

      <div className={s.results_group}>
        {formOwnerData ? (
          <div className={s.result_item}>
            <div>
              <img width={35} src={Owner} alt="" onClick={() => switchHandler("O", !ownerSwitch)} />
            </div>
            <div className={s.with_switch}>
              <span onClick={() => switchHandler("O", !ownerSwitch)}>ДАНІ ПРО ВЛАСНИКА</span>
              <Switch handler={switchHandler} isOn={ownerSwitch} id={"O"} />
            </div>
            {ownerSwitch && (
              <div className={s.more_info_block}>
                <p>
                  <span>Власник</span> {car.person}
                </p>
                <p title={car.reg_addr_koatuu}>
                  <span>Місце реєстрації</span> {car.region}, {car.place}
                </p>
                <div>
                  <h6>
                    Шукати історію продажів по номеру телефона продавця в
                    оголошенні
                  </h6>
                  <form onSubmit={formSubmitHandler} name={`owner`}>
                    <MaskedInput
                      mask={phoneNumberMask}
                      id="phone"
                      type="text"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`${s.form_control} ${s.tel_input}`}
                      placeholder={`38 (0__) ___-__-__`}
                    />
                    <input
                      type={`email`}
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={`Email (куди надіслати звіт)`}
                      className={s.form_control}
                    />
                    {!message ? (
                      <button
                        type={`submit`}
                        className={`btn btn-outline-danger pb-1 pt-2 px-4`}
                      >
                        Дізнатися історію
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
                      //   <div
                      //     className="spinner-border text-danger"
                      //     role="status"
                      //   >
                      //     <span className="sr-only">Loading...</span>
                      //   </div>
                      // </div>
                    )}
                    <div className={s.info_sign}>
                      <InfoTextModal
                        title={text.info_text_modal_window_owner_title}
                        text={text.info_text_modal_window_owner_text}
                        buttonLabel={"i"}
                      />
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        ) : null}
        {formInspectionData ? (
          <div className={s.result_item} title={car.registration}>
            <div>
              <img width={35} src={MreoGreen} alt="" onClick={() => switchHandler("I", !inspectionSwitch)} />
            </div>
            <div className={s.with_switch}>
              <span onClick={() => switchHandler("I", !inspectionSwitch)}>ВИЇЗНА ПЕРЕВІРКА</span>
              <Switch
                handler={switchHandler}
                isOn={inspectionSwitch}
                id={"I"}
              />
            </div>
            {inspectionSwitch && (
              <div className={s.more_info_block}>
                <h6>
                  Експерт приїде та проведе огляд авто на місці. Ви отримаєте
                  детальний звіт!
                </h6>
                <form onSubmit={formSubmitHandler} name={`inspection`}>
                  <MaskedInput
                    mask={phoneNumberMask}
                    id="phone"
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`${s.form_control} ${s.tel_input}`}
                    placeholder={`38 (0__) ___-__-__`}
                  />
                  <input
                    value={vin}
                    type="text"
                    required
                    minLength={`17`}
                    maxLength={`17`}
                    placeholder="VIN:"
                    onChange={(e) => setVin(e.target.value)}
                    className={s.form_control}
                  />
                  {!message ? (
                    <button
                      type={`submit`}
                      className={`btn btn-outline-danger pb-1 pt-2 px-4`}
                    >
                      Передзвоніть мені
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
                    <InfoTextModal
                      title={text.info_text_modal_window_inspection_title}
                      text={text.info_text_modal_window_inspection_text}
                      buttonLabel={"i"}
                    />
                  </div>
                </form>
              </div>
            )}
          </div>
        ) : null}
        {formMonitoringData ? (
          <div className={s.result_item}>
            <div>
              <img width={30} src={CoinsImg} alt="" onClick={() => switchHandler("M", !priceSwitch)} />
            </div>
            <div className={s.with_switch}>
              <span onClick={() => switchHandler("M", !priceSwitch)}>
                МОНІТОРИНГ АВТО
              </span>
              <Switch handler={switchHandler} isOn={priceSwitch} id={"M"} />
            </div>
            {priceSwitch && (
              <div className={s.more_info_block}>
                <p>
                  <span>Середня ціна:</span>{" "}
                  <b className={`font-weight-bold`}>{car.arithmeticMean} USD</b>
                </p>
                <p>
                  <span>К-ть оголошень:</span>{" "}
                  <b className={`font-weight-bold`}>{car.count_top_0}</b>
                </p>
                <h6>
                  Повідомити Вам, якщо зʼявиться цікавий варіант серед подібних
                  моделей?
                </h6>
                <form onSubmit={formSubmitHandler} name={`monitoring`}>
                  <input
                    value={email}
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className={s.form_control}
                    placeholder={`Email (куди надіслати звіт)`}
                  />
                  <input
                    type="text"
                    minLength={`17`}
                    maxLength={`17`}
                    value={vin}
                    required
                    placeholder="Введіть VIN"
                    onChange={(e) => setVin(e.target.value)}
                    className={s.form_control}
                  />
                  {!message ? (
                    <button
                      type={`submit`}
                      className={`btn btn-outline-danger pb-1 pt-2 px-4`}
                    >
                      Моніторити
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
                    <InfoTextModal
                      title={text.info_text_modal_window_monitoring_title}
                      text={text.info_text_modal_window_monitoring_text}
                      buttonLabel={"i"}
                    />
                  </div>
                </form>
              </div>
            )}
          </div>
        ) : null}
        <div className={s.result_item}>
          <div>
            <img width={30} src={CustomsImg} alt="" />
          </div>
          <div>
            <a href={car.drorm} target="_blank" rel="noopener noreferrer">
              <u>ПЕРЕВІРИТИ ОБТЯЖЕННЯ</u>
            </a>
          </div>
        </div>
        <div className={s.result_item}>
          <div>
            <img width={30} src={MegaphoneImg} alt="" />
          </div>
          <div>
            <span
              title="Информация по базе угонов"
              onClick={() => {
                setLoading(true);
                setStatusText("");
                setTimeout(() => {
                  setStatusText(car.status);
                  setLoading(false);
                }, 1500);
              }}
            >
              <u>{statusText}</u>
              {!loading ? (
                ""
              ) : (
                <div className="spinner-border m-0 text-success" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              )}
            </span>
          </div>
        </div>
        <div className={s.btn_read_more}>
          <InspectionModal
            langData={text}
            title="Перевірити VIN та отримати повний звіт з історії транспортного засобу"
            inspection_on_site_modal_button={"Повна перевірка"}
          />
        </div>
      </div>

      <div className={s.results_group}>
        {formDiscountData ? (
          <div className={s.result_item}>
            <div>
              <svg
                onClick={() => switchHandler("D", !discountSwitch)}
                id="Capa_1"
                enableBackground="new 0 0 512 512"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="m124.394 222.991c-9.36 0-17.261 10.31-17.261 22.5 0 12.2 7.9 22.51 17.261 22.51 9.36 0 17.27-10.31 17.27-22.51 0-12.19-7.91-22.5-17.27-22.5z" />
                  <path d="m275.758 341.981c-9.36 0-17.261 10.31-17.261 22.51 0 12.19 7.9 22.5 17.261 22.5 9.36 0 17.271-10.31 17.271-22.5 0-12.2-7.911-22.51-17.271-22.51z" />
                  <path d="m373.851 159.691c-152.083-139.938-144.304-134.593-156.395-139.29-17.183-6.816-37.629-3.252-51.752 9.74l-140.793 129.55c-15.831 14.56-24.911 35.28-24.911 56.86v229.41c0 27.03 21.881 49.03 48.771 49.03h301.209c26.891 0 48.771-22 48.771-49.03v-229.41c.001-21.58-9.08-42.3-24.9-56.86zm-188.986-49.18c.909-8.718 8.905-14.909 17.851-13.23 8.556 1.784 13.375 9.994 11.78 17.64-1.695 8.146-9.358 13.335-17.64 11.78-7.91-1.65-12.738-8.836-11.991-16.19zm-107.733 134.98c0-28.95 21.201-52.5 47.262-52.5 26.071 0 47.271 23.55 47.271 52.5s-21.201 52.51-47.271 52.51c-26.061 0-47.262-23.56-47.262-52.51zm85.993 159.66c-10.6 0-17.998-10.868-13.82-20.81l73.022-174.04c3.21-7.64 12-11.24 19.64-8.03 7.64 3.2 11.23 12 8.03 19.64l-73.032 174.04c-2.41 5.74-7.97 9.2-13.84 9.2zm112.633 11.84c-26.061 0-47.261-23.55-47.261-52.5s21.201-52.51 47.261-52.51c26.061 0 47.271 23.56 47.271 52.51s-21.21 52.5-47.271 52.5z" />
                  <path d="m508.235 324.431c-48.84-142.174-75.967-221.222-76.352-222.12-8.49-19.66-24.991-34.95-45.251-41.94-1.163-.395 5.697 1.271-103.093-24.54l110.613 101.78c21.99 20.22 34.601 48.99 34.601 78.94v194.4l53.962-23.1c24.41-10.56 35.76-38.91 25.52-63.42z" />
                </g>
              </svg>
            </div>
            <div className={s.with_switch}>
              <span onClick={() => switchHandler("D", !discountSwitch)}>ЗНИЖКА НА ПЕРЕВІРКУ</span>
              <Switch handler={switchHandler} isOn={discountSwitch} id={"D"} />
            </div>
            {discountSwitch && (
              <div className={s.more_info_block}>
                <h6>Підпишись на розсилку та отримай гарантований приз</h6>
                <form onSubmit={formSubmitHandler} name={`discount`}>
                  <input
                    value={email}
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className={s.form_control}
                    placeholder={`Введіть e-mail`}
                  />
                  {!message ? (
                    <button
                      type={`submit`}
                      className={`btn btn-outline-danger pb-1 pt-2 px-4`}
                    >
                      Отримати приз
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
                    <InfoTextModal
                      title={text.info_text_modal_window_discount_title}
                      text={text.info_text_modal_window_discount_text}
                      buttonLabel={"i"}
                    />
                  </div>
                </form>
              </div>
            )}
          </div>
        ) : null}
        {formBonusData ? (
          <div className={s.result_item}>
            <div>
              <svg
                onClick={() => switchHandler("B", !bonusSwitch)}
                version="1.1"
                id="Слой_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 793.7 793.7"
                enableBackground={"new 0 0 793.7 793.7"}
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M325.5,555.6c6.4,2.2,11.2,4.5,16.2,5.4c11.8,2,14.1,8.2,9.3,18.4c-1.1,2.4-1.4,5.3-1.1,9.3c11.1-20.9,31.4-20.1,50-23.4
		c81.6-14.7,160-39.8,237.3-69.5c23.4-9,48.9-14.6,73.8-17c28.5-2.7,49.6,14.7,58.7,43.1c-14.1,5.4-28.2,11.1-42.5,16.2
		c-75,26.8-149.8,53.9-225.1,79.9c-32.8,11.3-66.9,16.9-102,16.3c-35.9-0.6-71.8,1.7-107.6,0.6C252,633.7,218.7,647,191.2,677
		c-15.4,16.8-32.8,31.9-50.3,48.7c-31-34.1-62.6-68.9-95.4-105.1c9.9-10.3,19.1-20.3,28.7-29.9c15.9-15.9,29.5-32.8,39.6-53.7
		c25-51.7,78.7-75.8,141.4-65.6c20.9,3.4,41.4,9.5,62,14.6c45.7,11.4,91.6,11.1,137.8,3.3c15.9-2.7,32.4-3.3,48.5-2.8
		c15.5,0.5,24.9,9.6,29,23.4c2.4,8,1.2,12.7-7.8,16.1c-56.9,21.6-115.3,33.3-176.4,28.2c-6.2-0.5-12.5-0.5-18.8-0.6
		C328.9,553.6,328.2,554.2,325.5,555.6z"
                  />
                  <path
                    d="M421.7,197.5c-3.2,9.8-6.2,18.8-8.9,27.8c-3.7,12,0.1,21.5,9.7,25c9.7,3.5,18.6-1.6,23-13.4c2-5.4,3.8-10.8,8.5-16.5
		c2.3,6.3,4.6,12.6,7.1,18.9c4.7,12.1,13.3,17.2,22.8,13.7c9.6-3.6,13.6-13.2,10-24.8c-3.1-9.9-6.4-19.7-9.9-30.3
		c10.2-3.3,17.5-3.1,24.8,5.6c56.9,69.1,98.8,146.5,127.3,231.1c4.5,13.2,5.5,27.7,6.6,41.7c0.3,3.9-4.1,10.4-7.8,11.9
		c-29.8,11.8-60,22.8-91.2,34.4c-1.4-3.8-2.7-6.7-3.4-9.7c-5.3-21.6-16.9-33-39.1-33.8c-17.4-0.6-35.1,0.6-52.2,3.8
		c-54.8,10.1-108,3.7-160.8-11.8c-5.2-1.5-10.5-3.8-15.8-3.8c-15.1-0.1-15.5-8-12.1-19.6c14.8-51.2,36-99.8,63.4-145.3
		c20-33.1,43.8-63.9,65.4-96.2C397.4,193.8,408.2,194.5,421.7,197.5z M438.9,285.4c0.6,1,1.3,2,1.9,3c-3.9,5.5-6.7,12.9-12,16.1
		c-16.1,9.7-23.6,22.7-21.6,41.5c2,19.1,14.8,29.9,29.3,39.9c8.8,6.1,17.8,12.4,25.3,20.1c5.6,5.7,4.6,14-2.4,18.6
		c-7.1,4.7-17.7,5.5-20.8-2.9c-5.5-14.8-16.3-10.9-26.4-11.4c-6.8-0.3-8.7,3-7.8,9.3c2.3,15.5,9.7,27,24.2,34.1
		c3.9,1.9,8.1,7.2,8.5,11.4c1.2,10.4,8.3,7.3,13.9,7.6c5.7,0.3,11.5,1.3,12.4-7.9c0.4-4.1,4.6-9.5,8.4-11.4
		c16.9-8.4,24.7-21.7,24.5-40.2c-0.2-21.4-13.3-34.1-29.7-44.7c-8.4-5.4-17.1-10.5-24.5-17.2c-5.8-5.2-7.1-13.3,0.3-18.3
		c6.9-4.7,14.3-3.7,19.2,4.5c1.6,2.6,3.7,7.1,5.6,7.1c8.5,0.1,17-1,25.5-1.7c-1.7-7.9-2.3-16.4-5.6-23.5c-2.4-5.2-7.9-10-13.2-12.7
		c-6.8-3.6-12.2-6.5-11.5-15.4c0.1-1.7-3.9-5.1-6.3-5.5C450.5,284.8,444.7,285.4,438.9,285.4z"
                  />
                  <path
                    d="M408,98.5c-5.8-22.1-2.5-28.8,19.1-32.1c14.6-2.2,30-2.3,44.6-0.3c22.2,3.1,25.9,10,20.8,31.1c0.8,0.6,1.7,1.8,2.7,2
		c24.8,4.7,26.5,8.2,14.9,31.1c-3.4,6.7-7.1,13.2-10.8,19.7c-7.4,12.9-18.4,14.7-30.6,5.3c-12.4-9.6-25.2-9.5-37.7,0.3
		c-11.7,9.2-23.3,7.1-30.5-5.8c-5.1-9.1-10.2-18.2-14.4-27.7c-6-13.4-2.8-19.1,11.5-21.9C400.7,99.5,404,99.1,408,98.5z"
                  />
                  <path
                    d="M471.3,176.6c0.2,11.9-9.1,21.4-21.1,21.4c-12.3,0.1-21.3-8.8-21.5-21c-0.1-11.9,9.2-21.6,21-21.8
		C461.3,155.1,471.1,164.8,471.3,176.6z"
                  />
                  <path
                    d="M475.7,195.7c4,12.2,8.9,24.1,11.6,36.6c0.9,4-4,9.3-6.2,14c-4.2-2.4-10.5-3.8-12.3-7.4c-4.4-8.8-8.9-18.6-9.1-28.1
		c-0.1-5.6,7.9-11.3,12.3-17C473.2,194.4,474.4,195,475.7,195.7z"
                  />
                  <path
                    d="M448,207.2c-3.3,10-5.7,20.1-10.1,29.2c-1.8,3.6-8.1,4.9-12.4,7.3c-2.3-4.3-7.1-9.1-6.4-12.8c2.1-10.8,6.4-21.1,10.1-32.2
		C435.9,201.7,441.4,204.2,448,207.2z"
                  />
                  <path
                    d="M421.3,165.4c0,9.7,0,15.8,0,25.2c-9.1-2.2-17.5-3.7-25.4-6.7c-1.4-0.5-1.6-10.1-0.4-10.7
		C403.3,170,411.7,168.2,421.3,165.4z"
                  />
                  <path
                    d="M477.6,190.7c0.5-9.6,0.8-15.3,1.3-24.5c9,2.1,17.4,3.6,25.2,6.5c1.4,0.5,1.5,10.3,0.4,10.8
		C496.3,186.5,487.6,188.2,477.6,190.7z"
                  />
                </g>
              </svg>
            </div>
            <div className={s.with_switch}>
              <span onClick={() => switchHandler("B", !bonusSwitch)}>БОНУС ВІД ПРОДАВЦЯ</span>
              <Switch handler={switchHandler} isOn={bonusSwitch} id={"B"} />
            </div>
            {bonusSwitch && (
              <div className={s.more_info_block}>
                <h6>Замовляй промокод та отримай CashBack від продавця</h6>
                <form onSubmit={formSubmitHandler} name={`bonus`}>
                  <input
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className={s.form_control}
                    placeholder={`Введіть e-mail`}
                  />
                  {!message ? (
                    <button
                      type={`submit`}
                      className={`btn btn-outline-danger pb-1 pt-2 px-4`}
                    >
                      Хочу промокод
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
                    <InfoTextModal
                      title={text.info_text_modal_window_bonus_title}
                      text={text.info_text_modal_window_bonus_text}
                      buttonLabel={"i"}
                    />
                  </div>
                </form>
              </div>
            )}
          </div>
        ) : null}
        <div className={s.result_item}>
          <div>
            <svg
              id={"Capa_1"}
              enableBackground={"new 0 0 512 512"}
              viewBox={"0 0 512 512"}
              xmlnsXlink={"http://www.w3.org/2000/svg"}
            >
              <g>
                <path d="m377.584 214.287v-28.957c-5.836-2.719-11.071-6.512-15.457-11.124-4.151 4.365-9.06 8.001-14.522 10.683v29.331c4.821-.571 9.723-.873 14.696-.873 5.173-.001 10.273.322 15.283.94z" />
                <path d="m329.8 411.341 96.897-19.736.3-.054c4.838-.88 9.761-1.34 14.654-1.407 10.186-15.372 15.838-33.587 15.838-52.573 0-52.488-42.701-95.189-95.189-95.189s-95.189 42.702-95.189 95.189c0 4.583.328 9.114.964 13.582l30.77 13.006c19.429 8.064 31.201 27.204 30.955 47.182zm.15-95.57c0-12.005 8.711-22.097 26.133-24.54v-11.58h14.978v11.367c7.862.744 15.511 2.763 21.566 6.162l-7.543 18.166c-7.33-3.718-14.235-5.524-20.716-5.524-7.33 0-9.667 2.125-9.667 4.674 0 8.923 41.113 1.487 41.113 28.896 0 11.473-8.286 21.46-24.753 24.328v11.792h-14.978v-11.262c-10.623-.637-20.928-3.505-27.302-7.436l8.074-18.272c7.011 4.144 16.36 6.799 24.539 6.799 7.118 0 9.667-1.487 9.667-4.037.001-9.349-41.111-1.806-41.111-29.533z" />
                <path d="m432.193 420.117-107.839 21.964c-5.511 7.513-12.902 13.549-21.465 17.297-12.974 5.68-27.283 5.851-40.216.511l-93.562-38.072 12.07-29.664 90.443 38.066c10.914 4.422 23.34-.895 27.679-11.843 4.276-10.792-.918-23.016-11.655-27.428l-118.495-50.088c-22.056-9.107-46.399-8.23-67.853 2.228-2.3 1.122-90.324 46.476-90.324 46.476v122.436l114.538-58.718 149.796 58.374 225.709-43.881c.002-.004.004-.006.006-.009-5.85-32.166-36.667-53.498-68.832-47.649z" />
                <path d="m399.02 161.041c12.098 0 21.904-9.807 21.904-21.904v-82.323c0-27.2-18.572-50.129-43.696-56.814-.05.039-.062.047-.112.086v139.051c0 12.097 9.807 21.904 21.904 21.904z" />
                <path d="m251.313 161.041c12.059 0 21.835-9.776 21.835-21.835l.145-82.392c0-9.533 1.515-18.717 4.308-27.331-28.686 24.039-46.887 60.369-48.092 101.176l-.03.001v8.546c0 12.059 9.775 21.835 21.834 21.835z" />
                <path d="m303.33 56.814v82.323c0 12.097 9.807 21.904 21.904 21.904s21.904-9.807 21.904-21.904v-139.041c-.055-.042-.066-.051-.121-.093-25.12 6.688-43.687 29.615-43.687 56.811z" />
                <path d="m451 139.206c0 12.059 9.776 21.835 21.835 21.835s21.835-9.776 21.835-21.835v-10.462l-.089.004c-1.31-34.227-11.859-66.17-36.347-90.343-3.87-3.821-7.934-7.376-12.164-10.667 3.166 9.114 4.892 18.897 4.892 29.075z" />
              </g>
            </svg>
          </div>
          <div>
            <a href={`https://avtotest.polis.ua/`} target={`_blank`}>
              <u>20% ВІД СТРАХОВОЇ</u>
            </a>
          </div>
        </div>
        <div className={s.result_item}>
          <div>
            <svg
              version="1.1"
              id="Слой_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 793.7 793.7"
              enableBackground={"new 0 0 793.7 793.7"}
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M339.7,521.9c1.5-12.7,3.1-22.5,3.6-32.4c0.3-7,3.2-8.9,9.9-9c23.5-0.5,23.4-0.7,26.6,22.7c0.8,5.6,1.7,11.2,3,19.8
		c3.5-4.9,5.7-7.8,7.5-10.8c25.1-40.4,50.1-80.8,75.1-121.3c3.1-5,5.7-9.4,13.2-7.9C550,396.8,603.5,433,627.9,504.1
		c5.7,16.7,6.8,35,10.3,52.5c1.3,6.8-3.1,8.8-8.1,10.4c-36.8,11.4-73,25.8-110.5,33.5C392,626.7,265.1,622.8,140,584.3
		c-16.4-5-32.3-11.6-48.1-18c-2.9-1.2-7-5.4-6.8-7.7c4-33.1,8.9-65.9,28.5-94.4c31.7-45.9,75.9-71.3,130-81.3
		c7.1-1.3,10.3,1.6,13.7,7c25.3,41.1,50.8,82.1,76.2,123.1C334.9,515.2,336.3,517.2,339.7,521.9z M555.7,439.1
		c-0.7-1.2-1.5-4.1-3.3-5.2c-14.9-8.3-29.7-16.8-45.2-23.7c-2.7-1.2-10.1,3.9-12.6,7.8c-1.5,2.4,0.9,10.2,3.7,12
		c13,8,26.6,15.1,40.3,21.9C546.1,455.7,555.8,448.7,555.7,439.1z M220.3,408.9c-3.7,0.7-4.8,0.7-5.7,1.2
		c-14.4,7.7-29.1,15-42.9,23.6c-2.3,1.4-2.7,8.9-1.4,12.7c2,5.8,7.2,9.2,13.7,5.9c13.9-7.1,27.9-14.2,41.2-22.3
		c2.7-1.7,4.9-8.2,3.8-11.3C227.5,414.5,222.7,411.4,220.3,408.9z"
                />
                <path
                  d="M219.8,255.2c3.2-12.2,3.2-23.6,13-32.3c4.3-3.8-1.1-19.8-8.4-26.3c-7.7-6.9-15.9-13.3-23.7-20.1
		c-12.9-11.4-11.8-26.2,3.2-34.1c49-26,97.9-51.9,147.4-77c5.7-2.9,15.3-2.7,21,0.2c49.4,25.1,98.4,51,147.3,77
		c14.5,7.7,15.8,22.4,3.5,33.4c-6.1,5.5-13.4,9.9-18.7,16c-6.1,7-11.1,15.2-15.6,23.4c-1,1.9,1.2,6.7,3.3,9
		c15.1,17.6,10.9,58.5-7.5,73c-2.5,2-3.7,5.8-5.3,8.8c-9.2,17.3-16.1,36.3-27.8,51.6c-50.2,65.9-132.1,64.9-181.5-1.6
		c-8.2-11.1-14.4-23.8-20.7-36.2c-5-9.8-8.7-19.6-16.7-28.6C224.7,282.7,223.8,267.6,219.8,255.2z M242,212.7
		c2.2,5.2,2.9,9.2,5.1,12c8.9,10.6,16.9,22.6,27.6,30.9c33.5,26,72.5,33.3,113.7,26.1c35.8-6.3,66.2-22.6,86.2-54.5
		c2.4-3.9,3.7-8.5,6.2-14.5C400.2,229.5,322.2,229.3,242,212.7z M361.7,112.6c-8.4,3.1-17.1,6-25.4,9.5c-2.4,1-5.7,3.9-5.8,6
		c-0.2,11-0.6,22.2,1.1,33c2.2,13.9,22.4,29.9,32.7,27.5c13.8-3.2,27.9-19.5,28.7-34c0.5-8.2,0.8-16.5-0.2-24.5
		c-0.3-3-3.9-6.7-6.9-8.1C378.1,118.3,369.8,115.6,361.7,112.6z"
                />
                <path
                  d="M361.1,468.3c-26.1,0.2-23.7,1-23.7-23.6c0-21.7,0-21.8,23.5-21.7c26.1,0.1,25.5-3.7,25.4,25.2
		C386.2,468.3,386.3,468.3,361.1,468.3z"
                />
              </g>
            </svg>
          </div>
          <div>
            <a href={`https://bdr.mvs.gov.ua/`} target={`_blank`}>
              <u>МОНІТОРИНГ ШТРАФІВ</u>
            </a>
          </div>
        </div>
        <div className={s.result_item}>
          <div>
            <svg viewBox="0 -31 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="m123.195312 260.738281 63.679688 159.1875 82.902344-82.902343 142.140625 112.976562 100.082031-450-512 213.265625zm242.5-131.628906-156.714843 142.941406-19.519531 73.566407-36.058594-90.164063zm0 0" />
            </svg>
          </div>
          <div>
            <a target={`_blank`} href={`https://t.me/AvtoTestOrgBot`}>
              <u>TELEGRAM BOT AvtoTest</u>
            </a>
          </div>
        </div>
        <div className={s.btn_read_more}>
          <span
            className={`btn btn-outline-danger px-4 pb-1`}
            title="Перевірити VIN та отримати повний звіт з історії транспортного засобу"
            onClick={buttonCheckVinHandler}>
              Перевірити VIN-код
          </span>
        </div>
      </div>
    </div>
  ) : null;
}

const mapStateToProps = (state) => ({
  success: state.app.success,
});
export default connect(mapStateToProps, null)(MobileResult);
