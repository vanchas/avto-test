import React, { Component } from 'react'
import './intro.scss'
import SearchIcon from '@material-ui/icons/Search'
import ArrowRight from './image/arrow-right.png'
import DebitCard from './image/debit-card.png'
import Dot from './image/dot.png'
import Hand from './image/hand.png'
import Report from './image/report.png'
import Search from './image/search.png'
import Square from './image/square.png'
import RedArrow from './image/red-arrow-down.png'
import Tools from './image/tools.png'
import Tablet from './image/tablet.png'
import Hands from './image/hands.png'
import CheckSign from './image/check-sign.png'
import Woman from './image/woman.png'
import { history } from '../../../_helpers/history'

export default class IntroPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vin: '',
      link: '',
      number: '',
      name: '',
      phone: ''
    };
    this.onVinInput = this.onVinInput.bind(this);
    this.sendVin = this.sendVin.bind(this);
    this.onNumberInput = this.onNumberInput.bind(this);
    this.onNameInput = this.onNameInput.bind(this);
    this.onPhoneInput = this.onPhoneInput.bind(this);
    this.onLinkInput = this.onLinkInput.bind(this);
    this.requestConsultation = this.requestConsultation.bind(this);
    this.sendUserData = this.sendUserData.bind(this);
  }

  onVinInput(vin) {
    this.setState({ vin });
  }
  onLinkInput(link) {
    this.setState({ link });
  }
  onNumberInput(number) {
    this.setState({ number });
  }
  onNameInput(name) {
    this.setState({ name });
  }
  onPhoneInput(phone) {
    this.setState({ phone });
  }

  sendVin() {
    // req
    history.push('/result');
  }
  sendUserData() {
    // req
    history.push('/result');
  }
  requestConsultation() {
    // req
  }

  render() {
    // console.log(this.props);

    return (
      <div className="intro-page container-fluid overflow-hidden">
        <header className="text-center text-white py-2">
          <div className="header-content">
            <h1 className="mt-5 font-weight-bolder">З чого почати пошук б/у авто?</h1>
            <h2 className="h4 font-weight-light">Перевірка авто по vin коду — це перший крок при купівлі</h2>
            <div className="vin-input-block-wrapper">
              <div className="vin-input-block my-5">
                <SearchIcon className="search-icon" />
                <input type="text"
                  placeholder=" Уведіть VIN код" className="form-control pl-5"
                  onChange={e => this.onVinInput(e.target.value)}
                />
                <button className="btn check-car-btn"
                  onClick={this.sendVin}
                >
                  Перевірити авто
                  <img src={ArrowRight} alt="arrow" />
                </button>
              </div>
              <small>* Перевірка vin коду відбуватиметься на сайті партнера</small>
            </div>
            <div className="instruction">
              <div className="line"></div>
              <div className="instruction-item">
                <div className="dots d-flex">
                  <img src={Dot} alt="" />
                  <img src={Dot} alt="" />
                  <img src={Dot} alt="" />
                </div>
                <img src={Hand} alt="hand" />
                <img src={Square} alt="" />
                <span>Уведіть VIN код</span>
              </div>
              <div className="instruction-item">
                <img src={Search} alt="search" />
                <img src={Square} alt="" />
                <span>Пошук данних</span>
              </div>
              <div className="instruction-item">
                <img src={DebitCard} alt="card" />
                <img src={Square} alt="" />
                <span>Сплати</span>
              </div>
              <div className="instruction-item">
                <img src={Report} alt="report" />
                <img src={Square} alt="" />
                <span>Отримай звіт</span>
              </div>
            </div>
          </div>
        </header>

        <section className="order-form-section font-weight-bolder">
          <h3 className="h2 font-weight-bolder">Не знаешь VIN код? <img src={RedArrow} alt="arrow" /></h3>
          <div className="order-form container">
            <h4 className="text-center m-auto">Замов перевірку авто за посиланням на оголошення або реєстраційним номером авто</h4>
            <form className="container form-group py-4 row d-flex justify-content-around" action="#">
              <input className="form-control col-md-5 col-sm-12 my-2"
                type="text"
                onChange={e => this.onLinkInput(e.target.value)}
                placeholder="Введіть посилання на " />
              <input className="form-control col-md-5 col-sm-12 my-2"
                type="text"
                onChange={e => this.onNumberInput(e.target.value)}
                placeholder="Введіть номерний знак" />
              <input className="form-control col-md-5 col-sm-12 my-2"
                type="text"
                onChange={e => this.onNameInput(e.target.value)}
                placeholder="Ваше ім’я" />
              <input className="form-control col-md-5 col-sm-12 my-2"
                type="text"
                onChange={e => this.onPhoneInput(e.target.value)}
                placeholder="Ваш телефон" />
              <div className="col-12 d-flex justify-content-center">
                <button className="btn check-car-btn px-4 mt-3"
                  onClick={this.sendUserData} >
                  Замовити перевірку
                  <img src={ArrowRight} alt="arrow" />
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="price-block text-center container-fluid pt-2 pb-5 bg-light font-weight-bolder">
          <h2 className="h1 font-weight-bolder">Знайшов достойне авто?</h2>
          <h4>Переконайся, що це дійсно так! Лише огляд на місці покаже реальний стан авто!</h4>
          <div className="prices-cards row d-md-flex justify-content-around justify-items-center">
            <div className="price-card col-lg-4 col-md-12">
              <div className="price-description py-4 mx-1 row ">
                <h5 className="text-center w-100">Попередня перевірка</h5>
                <span className="col-12">
                  <img className="mr-1" src={CheckSign} alt="" />
                  пошук історії
                </span>
                <span className="col-12">
                  <img className="mr-1" src={CheckSign} alt="" />
                  юридична перевірка
                </span>
                <span className="col-12">
                  <img className="mr-1" src={CheckSign} alt="" />
                  оцінка доцільності
                </span>
                <div className="image-container w-100">
                  <img className="card-image" src={Tablet} alt="" />
                  <span className="price font-weight-bold">399 грн</span>
                </div>
              </div>
              <button className="btn check-car-btn px-4"
                onClick={this.requestConsultation} >
                Дізнатися більше
            <img src={ArrowRight} alt="arrow" />
              </button>
            </div>

            <div className="price-card col-lg-4 col-md-12">
              <div className="price-description  mx-1 py-4 row">
                <h5 className="text-center w-100">Виїздна перевірка</h5>
                <span className="col-12">
                  <img className="mr-1" src={CheckSign} alt="" />
                  перевірка кузова
                </span>
                <span className="col-12">
                  <img className="mr-1" src={CheckSign} alt="" />
                  комп’ютерна діагностика
                </span>
                <span className="col-12">
                  <img className="mr-1" src={CheckSign} alt="" />
                  пошук прихованих дефектів
                </span>
                <div className="image-container w-100">
                  <img className="card-image" src={Hands} alt="" />
                  <span className="price font-weight-bold">999 грн</span>
                </div>
              </div>
              <button className="btn check-car-btn px-4"
                onClick={this.requestConsultation}>
                Дізнатися більше
            <img src={ArrowRight} alt="arrow" />
              </button>
            </div>

            <div className="price-card col-lg-4 col-md-12">
              <div className="price-description  mx-1 py-4 row">
                <h5 className="text-center w-100">Перевірка на сто</h5>
                <span className="col-12">
                  <img className="mr-1" src={CheckSign} alt="" />
                  перевірка кузова
                </span>
                <span className="col-12">
                  <img className="mr-1" src={CheckSign} alt="" />
                  перевірка ходової та агрегатів
                </span>
                <span className="col-12">
                  <img className="mr-1" src={CheckSign} alt="" />
                  комп’ютерна діагностика
                </span>
                <div className="image-container w-100">
                  <img className="card-image" src={Tools} alt="" />
                  <span className="price font-weight-bold">1399 грн</span>
                </div>
              </div>
              <button className="btn check-car-btn px-4"
                onClick={this.requestConsultation}>
                Дізнатися більше
            <img src={ArrowRight} alt="arrow" />
              </button>
            </div>
          </div>
        </section>

        <section className="consultation-block d-flex flex-md-row flex-sm-column row py-5 my-0 mx-0">
          <div className="col-md-6 col-sm-12 img-holder-block">
            <img src={Woman} alt="woman" className="w-100" />
          </div>

          <div className="col-md-6 col-sm-12 text-center d-flex flex-column justify-content-center font-weight-bolder">
            <h2 className="h1 font-weight-bolder">Немає часу на пошук авто?</h2>
            <p className="h5">Довір це нам — підберем його від і до</p>

            <button className="btn px-4 mt-3"
              onClick={this.requestConsultation}>
              Замовити консультацію
            <img src={ArrowRight} alt="arrow" />
            </button>
          </div>
        </section>
      </div>
    )
  }
}
