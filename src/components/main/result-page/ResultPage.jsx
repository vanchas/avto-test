import React, { Component } from "react";
import "./result.scss";
import NumberImg from "./image/number_g.png";
import CarImg from "./image/car_g.png";
import CarSearchImg from "./image/car-search_g.png";
import PetrolImg from "./image/petrol_g.png";
import KgImg from "./image/kg_g.png";
import ReportImg from "./image/report_g.png";
import Owner from "./image/owner-g.png";
import WheelImg from "./image/wheel_g.png";
import MegaphoneImg from "./image/rupport_g.png";
import MreoGreen from "./image/mreo-green.png";
import CoinsImg from "./image/cash_g.png";
import Home from "./image/home-g.png";
import Seller from "./image/car-seller_g.png";
import CustomsImg from "./image/customs_g.png";
import CheckImg from "./image/car-check_g.png";
import GreenArrow from "./image/green-arrow.png";
import CvLogo from "./image/cv-logo.png";
import AvtoTestLogo from "../../footer/image/footer-logo.png";
import { getCar } from "../../../_helpers/get-car";
import { OrderForm } from "./ModalForm";
import MobileResult from "./MobileResult";
import {history} from "../../../_helpers/history";

export default class ResultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusLoading: false,
      carStatusText: "ПЕРЕВІРИТИ НА РОЗШУК",
      carInfo: null,
    };
    this.inputValue = "";
    this.newWindowOpen = this.newWindowOpen.bind(this);
  }

  componentDidMount = () => {
    const carData = JSON.parse(localStorage.getItem("avto-test-car"))
    if (carData && carData.brand) {
      this.setState({carInfo: carData})
    } else {
      history.push('/not-found')
    }
  };

  componentWillMount() {
    this.inputValue = this.props.inputValue;
  }

  newWindowOpen() {
    const vin = getCar().Found.vin;
    window.open(
      `https://www.carvertical.com/ua/poperednja-perevirka?a=avtotest&b=f1781078&data1=more&vin=${vin}`,
      "_blanc"
    );
  }

  render() {
    const inputValue = this.inputValue;
    const text = this.props.langData;
    const car = this.state.carInfo;

    return car ? (
      <div className="result-page">
        <section className="py-5 what-we-found container">
          <div className="pb-4 text-center d-lg-flex justify-content-center">
            <div className="h2 font-weight-bold mr-lg-3 mr-md-0">
              {text.result_page_header} :{" "}
            </div>
            <div className="car-vin h2 font-weight-bold text-success">
              {car.vin}
            </div>
          </div>

          <div className="what-we-found-description d-lg-flex justify-content-between px-lg-5 pt-lg-5 row container m-0">
            <div className="col-lg-6 col-md-12 pt-lg-0 pt-md-5">
              <div className="row pt-3 pb-2 green-border">
                <div className="col-2">
                  <span
                    className="float-left"
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
                <div className="col-10 p-0 pl-2">
                  <span className="float-left font-weight-bold">{car.vin}</span>
                </div>
              </div>
              <div className="row py-2 green-border">
                <div className="col-2">
                  <img width={32} src={NumberImg} alt="" className="" />
                </div>
                <div className="col-10 p-0 pl-2">
                  <span className="float-left font-weight-bold">
                    {car.number}, {car.code}
                  </span>
                </div>
              </div>
              <div className="row py-2 green-border">
                <div className="col-2">
                  <img width={30} src={CarImg} alt="" />
                </div>
                <div className="col-10 p-0 pl-2">
                  <span className="float-left font-weight-bold">
                    {car.brand} {car.model} {car.year}
                  </span>
                </div>
              </div>
              <div className="row py-2 green-border">
                <div className="col-2">
                  <img width={30} src={CarSearchImg} alt="" />
                </div>
                <div className="col-10 p-0 pl-2">
                  <span className="float-left font-weight-bold">
                    <span>{car.kind} | </span>
                    <span>{car.color} | </span>
                    <span>{car.num_seating} МІСЦЬ</span>
                  </span>
                </div>
              </div>
              <div className="row py-2 green-border">
                <div className="col-2">
                  <img width={25} src={PetrolImg} alt="" />
                </div>
                <div className="col-10 p-0 pl-2">
                  <span className="float-left font-weight-bold">
                    {car.fuel}, {car.capacity} см
                  </span>
                </div>
              </div>
              <div className="row py-2 green-border">
                <div className="col-2">
                  <img width={30} src={KgImg} alt="" />
                </div>
                <div className="col-10 p-0 pl-2">
                  <span
                    className="float-left font-weight-bold"
                    title={text.title_total_weight}
                  >
                    {car.total_weight} кг
                    <span className="mx-2">|</span>
                  </span>
                  <span
                    className="float-left font-weight-bold"
                    title={text.title_own_weight}
                  >
                    {car.own_weight} кг
                  </span>
                </div>
              </div>
              <div className="row green-border pt-2">
                <div className="col-2">
                  <img width={28} src={ReportImg} alt="" className="" />
                </div>
                <div className="col-10 p-0 m-0 py-2">
                  <div className=" p-0">
                    {!car.first_reg_date ? (
                      ""
                    ) : (
                      <span className="float-left  pl-2 font-weight-bold d-flex">
                        <span
                          className=" question-sign"
                          title={`Дата першої реєстрації`}
                        >
                          {car.first_reg_date}
                        </span>
                      </span>
                    )}
                  </div>
                  <div className=" p-0">
                    {!car.reg_object[0].date
                      ? ""
                      : car.reg_object.map((reg, ind) => {
                          return (
                            <span
                              key={ind}
                              className="float-left  pl-2 font-weight-bold d-flex"
                            >
                              <span
                                className=" question-sign"
                                title={`${text.title_car_code}: ${reg.code}, ${text.title_car_number}: ${reg.number}`}
                              >
                                |&nbsp;{reg.date}
                              </span>
                            </span>
                          );
                        })}
                  </div>
                </div>
              </div>
              <div className="row py-2 green-border" title={car.registration}>
                <div className="col-2">
                  <img width={35} src={MreoGreen} alt="" />
                </div>
                <div className="col-10 p-0 pl-2">
                  <span className="float-left font-weight-bold text-dark">
                    {car.dep} &nbsp;
                  </span>
                  <span className="float-left font-weight-bold text-dark question-sign pr-1">
                    |&nbsp; {car.registration_code}
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12 ">
              <div className="row py-2 green-border">
                <div className="col-2">
                  <img width={35} src={Owner} alt="" />
                </div>
                <div className="col-10 p-0 pl-2">
                  <span className="float-left font-weight-bold">
                    {car.person}
                  </span>
                </div>
              </div>
              <div className="row pt-2 pb-0 green-border">
                <div className="col-2">
                  <img width={35} src={Home} alt="" />
                </div>
                <div className="col-10 p-0 pl-2">
                  <span
                    className="float-left font-weight-bold"
                    title={`${car.reg_addr_koatuu}`}
                  >
                    &nbsp;{car.region}, {car.place}
                  </span>
                </div>
              </div>
              <div className="row pt-2 pb-0 green-border">
                <div className="col-2">
                  <img width={28} src={WheelImg} alt="" />
                </div>
                <div className="col-10 p-0 pl-2">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={car.count_site_top_0}
                    title={text.title_all_similar_offers}
                    className="count-link pl-0 float-left font-weight-bold question-sign text-dark btn"
                  >
                    <span>{car.count_top_0}</span>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={car.count_site_top_5}
                    title={text.title_month_similar_offers}
                    className="count-link pl-0 float-left font-weight-bold question-sign text-dark btn"
                  >
                    | &nbsp; <span>{car.count_top_5}</span>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={car.count_site_top_4}
                    title={text.title_week_similar_offers}
                    className="count-link pl-0 float-left font-weight-bold question-sign text-dark btn"
                  >
                    | &nbsp; <span>{car.count_top_4}</span> &nbsp; на auto.ria
                  </a>
                </div>
              </div>
              <div className="row py-2 green-border">
                <div className="col-2">
                  <img width={30} src={CoinsImg} alt="" />
                </div>
                <div className="col-10 pl-0">
                  <span
                    className=" p-0 pl-2 float-left font-weight-bold"
                    title={text.title_arithmetic_mean}
                  >
                    {car.arithmeticMean} USD
                  </span>
                  <span
                    className=" p-0 pl-2 float-left font-weight-bold"
                    title={text.title_inter_quartile_mean}
                  >
                    | &nbsp;
                    {car.interQuartileMean} USD
                  </span>
                </div>
              </div>
              <div className="row py-2 green-border">
                <div className="col-2">
                  <img width={28} src={Seller} alt="" />
                </div>
                <div className="col-10 p-0 pl-2">
                  <span className="float-left font-weight-bold">
                    {car.outbid}
                  </span>
                </div>
              </div>
              <div className="row py-2 green-border">
                <div className="col-2">
                  <img width={30} src={MegaphoneImg} alt="" />
                </div>
                <div className="col-10 p-0 pl-2">
                  <span
                    className="float-left d-flex font-weight-bold question-sign"
                    title="Информация по базе угонов"
                    onClick={() => {
                      this.setState({ statusLoading: true });
                      setTimeout(() => {
                        this.setState({
                          carStatusText: car.status,
                          statusLoading: false,
                        });
                      }, 1000);
                    }}
                  >
                    <u className="pr-2">{this.state.carStatusText}</u>
                    {!this.state.statusLoading ? (
                      ""
                    ) : (
                      <div
                        className="spinner-border m-0 text-success"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    )}
                  </span>
                </div>
              </div>
              <div className="row py-2 green-border">
                <div className="col-2">
                  <img width={30} src={CustomsImg} alt="" />
                </div>
                <div className="col-10 p-0 pl-2">
                  <a
                    href={car.drorm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="float-left font-weight-bold text-dark"
                  >
                    <u>ПЕРЕВІРИТИ ОБТЯЖЕННЯ</u>
                  </a>
                </div>
              </div>
              <div className="row py-2 green-border">
                <div className="col-2">
                  <img width={30} src={CheckImg} alt="" />
                </div>
                <div className="col-10 p-0 pl-2">
                  <a
                    href="https://avtotest.polis.ua/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="float-left font-weight-bold text-dark"
                  >
                    <u>СТРАХУВАННЯ ОНЛАЙН</u>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 pt-4 pb-4">
              <p className="px-lg-5 px-md-2 px-sm-0 m-auto text-success text-center">
                <span
                  className="btn text-success font-weight-bold"
                  title="Перевірити VIN та отримати повний звіт з історії транспортного засобу"
                  onClick={this.newWindowOpen}
                >
                  <u>ДІЗНАТИСЯ БІЛЬШЕ</u>
                </span>
              </p>
            </div>
          </div>

          <MobileResult text={text} car={car} />

          <div className="pb-3">
            <img className="m-auto d-block" src={GreenArrow} alt="arrow" />
          </div>
        </section>

        <section className="text-center pb-5 pt-2">
          <h3 className="h2 font-weight-bold mb-3 px-2">
            {text.result_page_cards_block_header}
          </h3>
          <p className="font-weight-bold mb-4">
            <span>
              {car && car.brand
                ? `${car.brand} ${car.model} ${car.year}:`
                : null}
            </span>
            <span className="text-success pl-2">
              {car && car.brand ? `${car.vin}` : <span></span>}
            </span>
          </p>

          <div className="card-holder row container-fluid m-0 px-3">
            <div className="col-md-4 col-sm-12 px-2">
              <div className="card car-card mb-4 p-3">
                <div className="">
                  <p
                    style={{ lineHeight: "1.5em" }}
                    className="card-heading px-1 card-text h5 font-weight-bold"
                  >
                    {text.result_page_card_1_header}
                  </p>
                  <div className="pt-2">
                    <img
                      className="card-img-top m-auto"
                      style={{ width: "44%" }}
                      src={CvLogo}
                      alt="Card cap"
                    />
                    <h5 className="card-title font-weight-bold">carVertical</h5>
                  </div>
                </div>
                <div className="card-body">
                  <div className="text-danger h2 font-weight-bold">
                    {text.result_page_card_1_price}
                    {text.price_block_card_currency}
                  </div>
                  <a
                    href="https://www.carvertical.com/ua/zrazok-zvitu?a=avtotest&b=f1781078&data1=zrazok"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn text-dark small font-weight-bold"
                  >
                    <u>{text.price_block_card_report_link}</u>
                  </a>
                  <div>
                    <button
                      className="mt-3 d-flex mx-auto btn btn-danger btn-danger-modal px-5"
                      onClick={this.newWindowOpen}
                    >
                      {text.price_block_card_btn_buy}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 px-2">
              <div className="card car-card mb-4 p-3">
                <div className="">
                  <p
                    style={{ lineHeight: "1.5em" }}
                    className="card-heading px-1 card-text h5 font-weight-bold"
                  >
                    {text.result_page_card_2_header}
                  </p>
                  <div className="pt-2">
                    <img
                      style={{ width: "38%" }}
                      className=" card-img-top mx-auto"
                      src={AvtoTestLogo}
                      alt="Card cap"
                    />
                    <h5 className="card-title mt-1 font-weight-bold">
                      AvtoTest
                    </h5>
                  </div>
                </div>
                <div className="card-body pt-1">
                  <div className="text-danger h2 font-weight-bold">
                    {text.result_page_card_2_price}
                    {text.price_block_card_currency}
                  </div>
                  <a
                    href="https://www.carvertical.com/ua/zrazok-zvitu?a=avtotest&b=f1781078&data1=zrazok"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn text-dark small font-weight-bold"
                  >
                    <u>{text.price_block_card_report_link}</u>
                  </a>
                  <div>
                    <OrderForm
                      langData={this.props.langData}
                      price_block_card_btn_buy={text.price_block_card_btn_buy}
                     />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 px-2">
              <div className="card car-card mb-4 p-3">
                <div className="">
                  <p
                    style={{ lineHeight: "1.5em" }}
                    className="card-heading px-1 card-text h5 font-weight-bold d-flex justify-content-center align-items-center text-center mb-0"
                  >
                    {text.result_page_card_3_header}
                  </p>
                  <div className="pt-2">
                    <img
                      style={{ width: "55%" }}
                      className="py-1 card-img-top mx-auto"
                      src={CheckImg}
                      alt="Card cap"
                    />
                    <h5 className="card-title mt-1 font-weight-bold">
                      {text.price_block_card_3_base}
                    </h5>
                  </div>
                </div>
                <div className="card-body pt-1">
                  <div className="text-danger h2 font-weight-bold">
                    {text.result_page_card_3_price}
                    {text.price_block_card_currency}
                  </div>
                  <a
                    href="https://avtotest.polis.ua/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn text-dark small font-weight-bold"
                  >
                    <u>{text.price_block_card_3_report_link}</u>
                  </a>
                  <div>
                    <a
                      href="https://avtotest.polis.ua/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 btn btn-danger d-flex mx-auto link-order-danger px-5"
                    >
                      {text.price_block_card_3_btn_buy}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    ) : (
      <div className={`text-center py-5`}>
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}
