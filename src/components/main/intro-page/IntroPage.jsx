import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import PropTypes from 'prop-types';
import './intro.scss'
import SearchIcon from './image/search-icon.png'
import ArrowRight from './image/arrow-right.png'
import DebitCard from './image/debit-card.png'
import Dot from './image/dot.png'
import Hand from './image/hand.png'
import Report from './image/report.png'
import Search from './image/search.png'
import Square from './image/square.png'
import Tools from './image/tools.png'
import Tablet from './image/tablet.png'
import Hands from './image/hands.png'
import CheckSign from './image/check-sign.png'
import Woman from './image/woman.png'
import { carInfoService } from '../../../_services/carInfo.service'
import { history } from '../../../_helpers/history';
import { authHeader } from '../../../_helpers/auth-header';
import { OrderForm } from '../result-page/ModalForm';

export default class IntroPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waitMessage: 'Шукаемо по базi даних технічного обслуговування автомобіля...',
      value: '',
      carInfo: {},
      loading: false
    };
    this.onValueInput = this.onValueInput.bind(this);
    this.sendValue = this.sendValue.bind(this);
    this.Vin = React.createRef();
    this.Overview = React.createRef();
    this.FullSelection = React.createRef();
    this.scrollToElement = this.scrollToElement.bind(this);
    this.searchAnimation = this.searchAnimation.bind(this);
  }

  componentDidUpdate() {
    if (this.props.scrollValue.length) {
      this.scrollToElement(this.props.scrollValue);
    }
  }

  scrollToElement(ref) {
    let elementClick;

    if (ref === 'vin') {
      elementClick = this.Vin;
    } else if (ref === 'overview') {
      elementClick = this.Overview;
    } else if (ref === 'full selection') {
      elementClick = this.FullSelection;
    }

    let destination;

    if (window.innerWidth > 1200) {
      destination = ReactDOM.findDOMNode(elementClick.current).getBoundingClientRect().top + 50;
    } else if (window.innerWidth <= 1200) {
      destination = ReactDOM.findDOMNode(elementClick.current).getBoundingClientRect().top - 270;
    }

    window.scroll({
      top: destination,
      behavior: 'smooth'
    });
    return false;
  }


  onValueInput(e) {
    e.preventDefault();
    this.props.setValue(e.target.value);
    this.setState({ value: e.target.value });
  }

  searchAnimation() {
    setTimeout(() => {
      this.setState({ waitMessage: "Шукаємо по класифікатору об'єктів адміністративно-територіального устрою України..." })
    }, 1000);
    setTimeout(() => {
      this.setState({ waitMessage: "Шукаємо по державному реєстру обтяжень рухомого майна..." })
    }, 2000);
    setTimeout(() => {
      this.setState({ waitMessage: "Шукаємо по базi выкрадень та залогiв ..." })
    }, 3000);
    setTimeout(() => {
      this.setState({ waitMessage: "Шукаємо по базi даних технічного обслуговування автомобіля..." })
    }, 4000);
  }

  sendValue = async () => {
    await localStorage.removeItem('avto-test-car');

    const user = await authHeader().Authorization;
    const checkLimiter = await JSON.parse(
      localStorage.getItem('avto-test-limit'));

    if (this.state.value.toString().trim().length) {

      if (checkLimiter && checkLimiter.date) {

        if (!user || user === null || user === undefined) {

          if (moment(checkLimiter.date).isSame(
            moment(new Date().toString()).format('L'))
            && checkLimiter.count < 3) {

            await this.setState({ loading: true });

            await localStorage.setItem('avto-test-limit',
              JSON.stringify({
                date: moment(new Date().toString()).format('L'),
                count: ++checkLimiter.count
              }));
            carInfoService.getCarInfo(this.state.value);

            this.searchAnimation();

          } else if (!moment(checkLimiter.date).isSame(
            moment(new Date().toString()).format('L'))) {

            await localStorage.removeItem('avto-test-limit');

            await this.setState({ loading: true });

            await localStorage.setItem('avto-test-limit',
              JSON.stringify({
                date: moment(new Date().toString()).format('L'),
                count: 1
              }));
            carInfoService.getCarInfo(this.state.value);

            this.searchAnimation();

          } else if (moment(checkLimiter.date).isSame(
            moment(new Date().toString()).format('L'))
            && checkLimiter.count >= 3) {

            alert(this.props.langData.limit_warning_unauthorized);

            history.push('/login/sign-in');
          }

        } else {

          if (moment(checkLimiter.date).isSame(
            moment(new Date().toString()).format('L')) &&
            checkLimiter.count < 7) {

            await this.setState({ loading: true });

            await localStorage.setItem('avto-test-limit',
              JSON.stringify({
                date: moment(new Date().toString()).format('L'),
                count: ++checkLimiter.count
              }));
            carInfoService.getCarInfo(this.state.value);

            this.searchAnimation();

          } else if (!moment(checkLimiter.date).isSame(
            moment(new Date().toString()).format('L'))) {

            await this.setState({ loading: true });

            await localStorage.setItem('avto-test-limit',
              JSON.stringify({
                date: moment(new Date().toString()).format('L'),
                count: 1
              }));
            carInfoService.getCarInfo(this.state.value);

            this.searchAnimation();

          } else {
            alert(this.props.langData.limit_warning_authorized);
          }
        }

      } else {

        await this.setState({ loading: true });

        await localStorage.setItem('avto-test-limit',
          JSON.stringify({
            date: moment(new Date().toString()).format('L'),
            count: 1
          }));
        carInfoService.getCarInfo(this.state.value);

        this.searchAnimation();
      }
    } else {
      alert(this.props.langData.complete_field_warning);
    }
  }

  render() {
    let text = this.props.langData;

    return (
      <div className="intro-page container-fluid overflow-hidden">
        <img src="https://russian7.ru/wp-content/uploads/2018/05/55546.jpg" className="w-100" alt=""/>
        <header ref={this.Vin} className="text-center text-white py-2">
          <div className="header-content">
            <h1 className="mt-5 font-weight-bolder">{text.intro_header}</h1>
            <h2 className="h4 font-weight-light">{text.intro_subheader}</h2>
            <div className="vin-input-block-wrapper">
              <form action="#" className="vin-input-block my-5">
                <img src={SearchIcon} className="search-icon" alt="" />
                <input type="text"
                  value={this.state.value}
                  placeholder={text.intro_header__input_placeholder} className="form-control pl-5"
                  onChange={e => this.onValueInput(e)}
                />
                <div>
                  {
                    !this.state.loading ?
                      <span className="btn check-car-btn w-100 d-flex justify-content-center align-items-center"
                        onClick={this.sendValue} >
                        <button className="btn text-white p-0 pr-3">
                          {text.intro_header_btn_check}
                        </button>
                        <img src={ArrowRight} alt="&#x2192;" />
                      </span>
                      :
                      <div className="pl-3 wait-anime">
                        <div>
                          <p className="pl-1 text-center w-100" >{this.state.waitMessage}</p>
                          <div className="load-wrapp">
                            <div className="load-10">
                              <div className="bar" />
                            </div>
                          </div>
                        </div>
                      </div>
                  }
                </div>
              </form>
              <small>* {text.intro_header__input_substring}</small>
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
                <span>{text.intro_header_desc_item_1}</span>
              </div>
              <div className="instruction-item">
                <img src={Search} alt="search" />
                <img src={Square} alt="" />
                <span>{text.intro_header_desc_item_2}</span>
              </div>
              <div className="instruction-item">
                <img src={DebitCard} alt="card" />
                <img src={Square} alt="" />
                <span>{text.intro_header_desc_item_3}</span>
              </div>
              <div className="instruction-item">
                <img src={Report} alt="report" />
                <img src={Square} alt="" />
                <span>{text.intro_header_desc_item_4}</span>
              </div>
            </div>
          </div>
        </header>


        <section ref={this.Overview} className="price-block text-center container-fluid pt-2 pb-5 bg-light font-weight-bolder">
          <h2 className="h1 font-weight-bolder">{text.price_block_header}</h2>
          <h4>{text.price_block_subheader}</h4>
          <div className="prices-cards row d-md-flex justify-content-around justify-items-center">
            <div className="price-card col-lg-4 col-md-12">
              <div className="price-description py-4 mx-1 row ">
                <h5 className="text-center w-100">{text.price_block_card_1_header}</h5>
                <span className="col-12">
                  <img className="mr-1" src={CheckSign} alt="" />
                  {text.price_block_card_1_string_1}
                </span>
                <span className="col-12">
                  <img className="mr-1" src={CheckSign} alt="" />
                  {text.price_block_card_1_string_2}
                </span>
                <span className="col-12">
                  <img className="mr-1" src={CheckSign} alt="" />
                  {text.price_block_card_1_string_3}
                </span>
                <div className="image-container w-100">
                  <img className="card-image" src={Tablet} alt="" />
                  <span className="price font-weight-bold">399 {text.price_block_card_currency}</span>
                </div>
              </div>
              <OrderForm
                langData={this.props.langData}
                price_block_card_btn_buy={text.price_block_card_btn}>
              </OrderForm>
            </div>

            <div className="price-card col-lg-4 col-md-12">
              <div className="price-description  mx-1 py-4 row">
                <h5 className="text-center w-100">{text.price_block_card_2_header}</h5>
                <span className="col-12">
                  <img className="mr-1" src={CheckSign} alt="." />
                  {text.price_block_card_2_string_1}
                </span>
                <span className="col-12">
                  <img className="mr-1" src={CheckSign} alt="." />
                  {text.price_block_card_2_string_2}
                </span>
                <span className="col-12">
                  <img className="mr-1" src={CheckSign} alt="." />
                  {text.price_block_card_2_string_3}
                </span>
                <div className="image-container w-100">
                  <img className="card-image" src={Hands} alt="." />
                  <span className="price font-weight-bold">999 {text.price_block_card_currency}</span>
                </div>
              </div>
              <OrderForm
                langData={this.props.langData}
                price_block_card_btn_buy={text.price_block_card_btn}>
              </OrderForm>
            </div>

            <div className="price-card col-lg-4 col-md-12">
              <div className="price-description  mx-1 py-4 row">
                <h5 className="text-center w-100">{text.price_block_card_3_header}</h5>
                <span className="col-12">
                  <img className="mr-1" src={CheckSign} alt="." />
                  {text.price_block_card_3_string_1}
                </span>
                <span className="col-12">
                  <img className="mr-1" src={CheckSign} alt="." />
                  {text.price_block_card_3_string_2}
                </span>
                <span className="col-12">
                  <img className="mr-1" src={CheckSign} alt="." />
                  {text.price_block_card_3_string_3}
                </span>
                <div className="image-container w-100">
                  <img className="card-image" src={Tools} alt="." />
                  <span className="price font-weight-bold">1399 {text.price_block_card_currency}</span>
                </div>
              </div>
              <OrderForm
                langData={this.props.langData}
                price_block_card_btn_buy={text.price_block_card_btn}>
              </OrderForm>
            </div>
          </div>
        </section>

        <section ref={this.FullSelection} className="consultation-block d-flex flex-md-row flex-sm-column row py-5 my-0 mx-auto">
          <div className="col-md-6 col-sm-12 img-holder-block">
            <img src={Woman} alt="woman" className="w-100" />
          </div>

          <div className="col-md-6 col-sm-12 text-center d-flex flex-column justify-content-center font-weight-bolder">
            <h2 className="h1 font-weight-bolder">{text.consultation_block_header}</h2>
            <p className="h5">{text.consultation_block_subheader}</p>

            <OrderForm
              langData={this.props.langData}
              price_block_card_btn_buy={text.consultation_block_btn}>
            </OrderForm>
          </div>
        </section>
      </div>
    )
  }
}

IntroPage.propTypes = {
  setValue: PropTypes.func,
  langData: PropTypes.object,
  scrollValue: PropTypes.string
}
