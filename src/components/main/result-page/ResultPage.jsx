import React, { Component } from 'react'
import './result.scss'
import NumberImg from './image/1_number.png'
import CarImg from './image/2_car.png'
import CarSearchImg from './image/3_car.png'
import PetrolImg from './image/4_petrol.png'
import KgImg from './image/5_kg.png'
import ReportImg from './image/6_report.png'
import PlaceImg from './image/7_place.png'
import WheelImg from './image/8_wheel.png'
import MegaphoneImg from './image/9_megaphone.png'
import MotorImg from './image/10_motor.png'
import CoinsImg from './image/11_coins.png'
import WalletImg from './image/12_wallet.png'
import GlobeImg from './image/13_globe.png'
import CustomsImg from './image/14_customs.png'
import CheckImg from './image/15_check.png'
// import QuestionSign from './image/question.png'
import GreenArrow from './image/green-arrow.png'
import CvLogo from './image/cv-logo.png'
import CarfaxLogo from './image/carfax-logo.png'
import UaLogo from './image/ua-logo.png'

export default class ResultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carInfo: {}
    };
  }

  componentDidMount() {
    this.setState({ carInfo: this.props.carInfo })
  }

  render() {
    const car = this.props.carInfo;

    return (
      <div className="result-page">
        {(this.props.carInfo.brand) ?
          <section className="py-5 what-we-found container">
            <div className="pb-4 text-center d-lg-flex justify-content-center">
              <div className="h2 font-weight-bold mr-lg-3 mr-md-0">Вот что мы нашли по VIN:</div>
              <div className="h2 font-weight-bold text-success">{car.vin}</div>
            </div>
            <div className="what-we-found-description d-lg-flex justify-content-between px-lg-5 pt-lg-5 row font-weight-bold container m-0">
              <div className="col-lg-6 col-md-12 pt-lg-0 pt-md-5">
                <div className="row py-2 green-border">
                  <div className="col-2 text-danger font-weight-bold">
                    <span className="float-left font-weight-bold"
                      style={{ letterSpacing: '3px' }}
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
                    <span className="float-left font-weight-bold">{car.kind} {car.color}</span>
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
                      title="total weight">
                      {car.total_weight} кг
                    <span className="mx-2">|</span>
                    </span>
                    <span className="float-left font-weight-bold"
                      title="own weight">
                      {car.own_weight} кг</span>
                  </div>
                </div>
                <div className="row green-border pt-2">
                  <div className="col-2">
                    <img width={28} src={ReportImg} alt="" className="" /></div>
                  <div className="col-10 row">
                    <div className="btn p-0 pl-2 col-12">
                      <span className="float-left font-weight-bold"
                        title="date" >
                        {car.date}</span>
                    </div>
                    <div className=" btn p-0 pl-2 col-12">
                      <span className="float-left font-weight-bold"
                        title="first registration date" >
                        {car.first_reg_date}</span>
                    </div>
                  </div>
                </div>
                <div className="row py-2 green-border">
                  <div className="col-2"><img width={25} src={PlaceImg} alt="" /></div>
                  <div className="col-10 btn p-0 pl-2">
                    <span className="float-left font-weight-bold">{car.num_seating} СИДЯЧИХ МЕСТ</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 ">
                <div className="row py-2 green-border">
                  <div className="col-2">
                    <img width={28} src={WheelImg} alt="" /></div>
                  <div className="col-10 btn p-0 pl-2">
                    <span className="float-left font-weight-bold">{car.count} авто на auto.ria</span>
                  </div>
                </div>
                <div className="row py-2 green-border">
                  <div className="col-2">
                    <img width={28} src={MegaphoneImg} alt="" /></div>
                  <div className="col-10 pl-0">
                    <span className="btn p-0 pl-2 font-weight-bold text-dark"
                      title="count week" >
                      {car.count_week}</span>
                    <span className="btn p-0 pl-2 font-weight-bold text-dark"
                      title="count day" >
                      {car.count_day}</span>
                    {/* <span className="btn p-0 pl-2 font-weight-bold text-dark">25</span> */}
                  </div>
                </div>
                <div className="row py-2 green-border">
                  <div className="col-2">
                    <img width={30} src={MotorImg} alt="" /></div>
                  <div className="col-10 btn p-0 pl-2">
                    <span className="float-left font-weight-bold">{car.fuel_count_parameter} имеют такой же мотор</span>
                  </div>
                </div>
                <div className="row py-2 green-border">
                  <div className="col-2">
                    <img width={30} src={CoinsImg} alt="" /></div>
                  <div className="col-10 pl-0">
                    <span className="btn p-0 pl-2 float-left font-weight-bold">{car.arithmeticMean} USD</span>
                    <span className="sbtn p-0 pl-2 float-left font-weight-bold">{car.interQuartileMean} USD</span>
                  </div>
                </div>
                <div className="row py-2 green-border">
                  <div className="col-2">
                    <img width={28} src={WalletImg} alt="" /></div>
                  <div className="col-10 btn p-0 pl-2">
                    <span className="float-left font-weight-bold">... USD стоимость новой</span>
                  </div>
                </div>
                <div className="row py-2 green-border">
                  <div className="col-2">
                    <img width={28} src={GlobeImg} alt="" /></div>
                  <div className="col-10 btn p-0 pl-2">
                    <span className="float-left font-weight-bold">{car.outbid}</span>
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
                    <span className="float-left font-weight-bold">{car.insurance}</span>
                  </div>
                </div>
              </div>

              <div className="col-12 pt-4 pb-4">
                <p className="px-lg-5 px-md-2 px-sm-0 m-auto text-success text-center">{car.rank_category}, {car.registration}</p>
              </div>
            </div>

            <div className="py-3">
              <img className="m-auto d-block" src={GreenArrow} alt="arrow" />
            </div>
          </section>
          :
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>}

        <section className="text-center pb-5 pt-2">
          <h3 className="h2 font-weight-bold mb-3 px-2">Приобретите подробный отчет и узнайте всю правду</h3>
          <p className="font-weight-bold mb-4">
            <span>
              {(!this.props.carInfo.brand) ?
                <span className="spinner-border text-success" role="status">
                  <span className="sr-only">Loading...</span>
                </span> :
                `${car.brand} ${car.model} ${car.year}:`}
            </span>
            <span className="text-success pl-2">
              {(!this.props.carInfo.brand) ?
                <span></span> :
                `${car.vin}`}
            </span>
          </p>

          <div className="card-holder row container-fluid m-0 px-3">

            <div className="col-md-4 col-sm-12 px-2">
              <div className="card car-card mb-4 p-3" >
                <div className="">
                  <p className="card-heading px-1 card-text h4 font-weight-bold">Полная проверка авто
              по VIN номеру из Европы и США</p>
                  <div className="">
                    <img className="card-img-top w-50 m-auto" src={CvLogo} alt="Card image cap" />
                    <h5 className="card-title font-weight-bold">carVertical</h5>
                  </div>
                </div>
                <div className="card-body">
                  <div className="text-danger h2 font-weight-bold">
                    249 грн</div>
                  <a href="#" className="text-dark small font-weight-bold">Как выглядит отчет?</a>
                  <div>
                    <button className="btn btn-danger px-5">
                      Купить</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 px-2">
              <div className="card car-card mb-4 p-3" >
                <div className="">
                  <p className="card-heading px-1 card-text h4 font-weight-bold">CarFax проверка авто из Америки по вин коду</p>
                  <div className="">
                    <img style={{ width: '45%' }} className=" card-img-top mx-auto" src={CarfaxLogo} alt="Card image cap" />
                    <h5 className="card-title mt-1 font-weight-bold">carFax</h5>
                  </div>
                </div>
                <div className="card-body pt-1">
                  <div className="text-danger h2 font-weight-bold">
                    49 грн</div>
                  <a href="#" className="text-dark small font-weight-bold">Как выглядит отчет?</a>
                  <div>
                    <button className="btn btn-danger px-5">
                      Купить</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 px-2">
              <div className="card car-card mb-4 p-3" >
                <div className="">
                  <p className="card-heading px-1 card-text h4 font-weight-bold">Выписка из базы МВД Украины</p>
                  <div className="">
                    <img style={{ width: '45%' }} className=" card-img-top mx-auto" src={UaLogo} alt="Card image cap" />
                    <h5 className="card-title mt-1 font-weight-bold">База МВД</h5>
                  </div>
                </div>
                <div className="card-body pt-1">
                  <div className="text-danger h2 font-weight-bold">
                    49 грн</div>
                  <a href="#" className="text-dark small font-weight-bold">Как выглядит отчет?</a>
                  <div>
                    <button className="btn btn-danger px-5">
                      Купить</button>
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
