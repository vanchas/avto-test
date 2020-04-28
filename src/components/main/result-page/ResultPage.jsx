import React, { Component } from 'react'
import './result.scss'
import NumberImg from './image/number_g.png'
import CarImg from './image/car_g.png'
import CarSearchImg from './image/car-search_g.png'
import PetrolImg from './image/petrol_g.png'
import KgImg from './image/kg_g.png'
import ReportImg from './image/report_g.png'
import PlaceImg from './image/place_g.png'
import WheelImg from './image/wheel_g.png'
import MegaphoneImg from './image/rupport_g.png'
// import MotorImg from './image/motor_g.png'
import CoinsImg from './image/cash_g.png'
// import WalletImg from './image/wallet_g.png'
import GlobeImg from './image/globe_g.png'
import CustomsImg from './image/customs_g.png'
import CheckImg from './image/car-check_g.png'
import GreenArrow from './image/green-arrow.png'
import CvLogo from './image/cv-logo.png'
import CarfaxLogo from './image/carfax-logo.png'
import UaLogo from './image/ua-logo.png'
import { getCar } from '../../../_helpers/get-car'

export default class ResultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carInfo: {}
    };
    this.inputValue = '';
  }

  componentDidMount = async () => {
    await this.setState({
      carInfo: getCar().Found
    });

    // if (JSON.parse(localStorage.getItem('avto-test-car')) === undefined) {
    //   alert('Ошибка поиска по введенным данным');
    //   window.open(`https://www.carvertical.com/ua/poperednja-perevirka?a=avtotest&b=f1781078&data1=fc&vin=${this.inputValue}`, '_blanc');
    // } else if (
    //   JSON.parse(localStorage.getItem('avto-test-car')) &&
    //   JSON.parse(localStorage.getItem('avto-test-car'))[0] &&
    //   JSON.parse(localStorage.getItem('avto-test-car'))[0]['search_filed.required'] === "Bad request!" ||
    //   JSON.parse(localStorage.getItem('avto-test-car'))[0] === '404 Not found'
    // ) {
    //   window.open(`https://www.carvertical.com/ua/poperednja-perevirka?a=avtotest&b=f1781078&data1=fc&vin=${this.inputValue}`, '_blanc');
    // }
  }

  componentWillMount() {
    this.inputValue = this.props.inputValue;
  }

  render() {
    const inputValue = this.inputValue;
    const text = this.props.langData;
    const car = this.state.carInfo;
    // console.log(car);

    return (
      <div className="result-page">
        {(car && car.brand) ?
          <section className="py-5 what-we-found container">
            <div className="pb-4 text-center d-lg-flex justify-content-center">
              <div className="h2 font-weight-bold mr-lg-3 mr-md-0">{text.result_page_header} : {' '}</div>
              <div className="h2 font-weight-bold text-success">{car.vin}</div>
            </div>
            <div className="what-we-found-description d-lg-flex justify-content-between px-lg-5 pt-lg-5 row container m-0">
              <div className="col-lg-6 col-md-12 pt-lg-0 pt-md-5">
                <div className="row py-2 green-border">
                  <div className="col-2">
                    <span className="float-left"
                      id="vin"
                      style={{
                        letterSpacing: '3px',
                        color: '#68bc9d',
                        fontWeight: 900
                      }}
                    >VIN</span>
                  </div>
                  <div className="col-10 btn p-0 pl-2">
                    <span className="float-left font-weight-bold">{car.vin}</span>
                  </div>
                </div>
                <div className="row py-2 green-border">
                  <div className="col-2">
                    <img width={32} src={NumberImg} alt="" className="" /></div>
                  <div className="col-10 btn p-0 pl-2">
                    <span className="float-left font-weight-bold">{car.number}, {car.code}</span>
                  </div>
                </div>
                <div className="row py-2 green-border">
                  <div className="col-2">
                    <img width={30} src={CarImg} alt="" /></div>
                  <div className="col-10 btn p-0 pl-2">
                    <span className="float-left font-weight-bold">{car.brand} {car.model} {car.year}</span>
                  </div>
                </div>
                <div className="row py-2 green-border">
                  <div className="col-2">
                    <img width={30} src={CarSearchImg} alt="" /></div>
                  <div className="col-10 btn p-0 pl-2">
                    <span className="float-left font-weight-bold">
                      <span>{car.kind} | </span>
                      <span>{car.color} | </span>
                      <span>{car.num_seating} МЕСТ</span>
                    </span>
                  </div>
                </div>
                <div className="row py-2 green-border">
                  <div className="col-2">
                    <img width={25} src={PetrolImg} alt="" /></div>
                  <div className="col-10 btn p-0 pl-2">
                    <span className="float-left font-weight-bold">{car.fuel}, {car.capacity} см</span>
                  </div>
                </div>
                <div className="row py-2 green-border">
                  <div className="col-2">
                    <img width={30} src={KgImg} alt="" /></div>
                  <div className="col-10 btn p-0 pl-2">
                    <span className="float-left font-weight-bold"
                      title="общий вес">
                      {car.total_weight} кг
                    <span className="mx-2">|</span>
                    </span>
                    <span className="float-left font-weight-bold"
                      title="собственный вес">
                      {car.own_weight} кг</span>
                  </div>
                </div>
                <div className="row green-border pt-2">
                  <div className="col-2">
                    <img width={28} src={ReportImg} alt="" className="" /></div>
                  <div className="col-10 p-0 m-0 py-2">
                    <div className="btn p-0">
                      {!car.reg_object.date ?
                        '' :
                        car.reg_object.map((reg, ind) => {
                          return <span className="float-left font-weight-bold question-sign pl-2"
                            title={`code: ${reg.code}, number: ${reg.number}`} >
                            {reg.date}</span>
                        })}
                    </div>
                    <div className=" btn p-0 pl-2 ">
                      <span className="float-left font-weight-bold">
                        {car.dep}</span>
                    </div>
                    <div className=" btn p-0 pl-2">
                      <span className="float-left font-weight-bold question-sign"
                        title={`${car.registration}`} > | &nbsp;
                        {car.registration_code}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 ">
                <div className="row py-2 green-border">
                  <div className="col-2">
                    <img width={28} src={WheelImg} alt="" />
                  </div>
                  <div className="col-10 btn p-0 pl-2">
                    <a target="_blank" rel="noopener noreferrer" href={car.count_site} title="Всего похожих предложений"
                      className="pl-0 float-left font-weight-bold question-sign text-dark btn">
                      {car.count}</a>
                    <a target="_blank" rel="noopener noreferrer" href={car.count_site_month} title="Выставлено в прошлом месяце"
                      className="pl-0 float-left font-weight-bold question-sign text-dark btn">
                      | &nbsp; {car.count_month}</a>
                    <a target="_blank" rel="noopener noreferrer" href={car.count_site_week} title="Выставлено на прошлой неделе"
                      className="pl-0 float-left font-weight-bold question-sign text-dark btn">
                      | &nbsp; {car.count_week} на auto.ria</a>
                  </div>
                </div>
                <div className="row py-2 green-border">
                  <div className="col-2">
                    <img width={28} src={MegaphoneImg} alt="" /></div>
                  <div className="col-10 d-flex pl-0">
                    <a href={car.drorm} className="p-0 pl-2 font-weight-bold text-dark question-sign"
                      title="ДЕРЖАВНИЙ РЕЄСТР ОБТЯЖЕНЬ РУХОМОГО МАЙНА" target="_blank" rel="noopener noreferrer">
                      <u>{car.drorm}</u></a>
                  </div>
                </div>
                {/* <div className="row py-2 green-border">
                  <div className="col-2">
                    <img width={30} src={MotorImg} alt="" /></div>
                  <div className="col-10 btn p-0 pl-2">
                    <span className="float-left font-weight-bold">{car.fuel_count_parameter} имеют такой же мотор</span>
                  </div>
                </div> */}
                <div className="row py-2 green-border">
                  <div className="col-2">
                    <img width={30} src={CoinsImg} alt="" /></div>
                  <div className="col-10 pl-0">
                    <span className="btn p-0 pl-2 float-left font-weight-bold question-sign"
                      title="arithmeticMean" >
                      {car.arithmeticMean} USD</span>
                    <span className="sbtn p-0 pl-2 float-left font-weight-bold question-sign"
                      title="interQuartileMean" >
                      {car.interQuartileMean} USD</span>
                  </div>
                </div>
                {/* <div className="row py-2 green-border">
                  <div className="col-2">
                    <img width={28} src={WalletImg} alt="" /></div>
                  <div className="col-10 btn p-0 pl-2">
                    <span className="float-left font-weight-bold">... USD стоимость новой</span>
                  </div>
                </div> */}
                <div className="row py-2 green-border">
                  <div className="col-2">
                    <img width={28} src={GlobeImg} alt="" /></div>
                  <div className="col-10 btn p-0 pl-2">
                    <span className="float-left font-weight-bold question-sign"
                      title="Перекуп / владелец" >
                      {car.outbid}</span>
                  </div>
                </div>
                <div className="row py-2 green-border">
                  <div className="col-2">
                    <img width={30} src={CustomsImg} alt="" /></div>
                  <div className="col-10 btn p-0 pl-2">
                    <span className="float-left font-weight-bold">{car.status}</span>
                  </div>
                </div>
                <div className="row py-2 green-border">
                  <div className="col-2">
                    <img width={30} src={CheckImg} alt="" /></div>
                  <div className="col-10 btn p-0 pl-2">
                    <a href={car.insurance}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="float-left font-weight-bold text-dark"
                      title="Загальнодержавний сервіс* оформлення електронних полісів автоцивілки" >
                      <u>БАЗA ЗАЛОГОВ</u></a>
                  </div>
                </div>
                <div className="row py-2 green-border">
                  <div className="col-2">
                    <img width={25} src={PlaceImg} alt="" />
                  </div>
                  <div className="col-10 btn p-0 pl-2">
                    <span className="float-left font-weight-bold">{car.person}&nbsp;|</span>
                    <span className="float-left font-weight-bold question-sign"
                      title={`${car.place}, ${car.region}`} >&nbsp;{car.reg_addr_koatuu}</span>
                  </div>
                </div>
              </div>

              <div className="col-12 pt-4 pb-4">
                <p className="px-lg-5 px-md-2 px-sm-0 m-auto text-success text-center">{car.rank_category}</p>
              </div>
            </div>

            <div className="py-3">
              <img className="m-auto d-block" src={GreenArrow} alt="arrow" />
            </div>
          </section>
          :
          <div className="py-5 px-3 text-center">
            <div className="d-inline-block alert alert-danger" role="alert">
              <p>{text.error_message}</p>
              <p>
                <a href={`${text.error_link}${inputValue}`} target="_blank" rel="noopener noreferrer" >
                  <span className="text-dark">{text.error_submessage}</span><br />
                  {`${text.error_link}${inputValue}`}
                </a>
              </p>
            </div>
          </div>}

        <section className="text-center pb-5 pt-2">
          <h3 className="h2 font-weight-bold mb-3 px-2">{text.result_page_cards_block_header}</h3>
          <p className="font-weight-bold mb-4">
            <span>
              {(car && car.brand) ?
                `${car.brand} ${car.model} ${car.year}:`
                : null
              }
            </span>
            <span className="text-success pl-2">
              {(car && car.brand) ?
                `${car.vin}`
                : <span></span>
              }
            </span>
          </p>

          <div className="card-holder row container-fluid m-0 px-3">
            <div className="col-md-4 col-sm-12 px-2">
              <div className="card car-card mb-4 p-3" >
                <div className="">
                  <p className="card-heading px-1 card-text h4 font-weight-bold">{text.result_page_card_1_header}</p>
                  <div className="">
                    <img className="card-img-top w-50 m-auto" src={CvLogo} alt="Card cap" />
                    <h5 className="card-title font-weight-bold">carVertical</h5>
                  </div>
                </div>
                <div className="card-body">
                  <div className="text-danger h2 font-weight-bold">
                    249 {text.price_block_card_currency}</div>
                  <span className="btn text-dark small font-weight-bold">{text.price_block_card_report_link}</span>
                  <div>
                    <button className="mt-1 btn btn-danger px-5">
                      {text.price_block_card_btn_buy}</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 px-2">
              <div className="card car-card mb-4 p-3" >
                <div className="">
                  <p className="card-heading px-1 card-text h4 font-weight-bold">{text.result_page_card_2_header}</p>
                  <div className="">
                    <img style={{ width: '45%' }} className=" card-img-top mx-auto" src={CarfaxLogo} alt="Card cap" />
                    <h5 className="card-title mt-1 font-weight-bold">carFax</h5>
                  </div>
                </div>
                <div className="card-body pt-1">
                  <div className="text-danger h2 font-weight-bold">
                    49 {text.price_block_card_currency}</div>
                  <span className="btn text-dark small font-weight-bold">{text.price_block_card_report_link}</span>
                  <div>
                    <button className="mt-1 btn btn-danger px-5">
                      {text.price_block_card_btn_buy}</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 px-2">
              <div className="card car-card mb-4 p-3" >
                <div className="">
                  <p className="card-heading px-1 card-text h4 font-weight-bold d-flex justify-content-center align-items-center text-center">{text.result_page_card_3_header}</p>
                  <div className="">
                    <img style={{ width: '45%' }} className=" card-img-top mx-auto" src={UaLogo} alt="Card cap" />
                    <h5 className="card-title mt-1 font-weight-bold">{text.price_block_card_3_base}</h5>
                  </div>
                </div>
                <div className="card-body pt-1">
                  <div className="text-danger h2 font-weight-bold">
                    49 {text.price_block_card_currency}</div>
                  <span className="btn text-dark small font-weight-bold">{text.price_block_card_report_link}</span>
                  <div>
                    <button className="mt-1 btn btn-danger px-5">
                      {text.price_block_card_btn_buy}</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    )
  }
}
