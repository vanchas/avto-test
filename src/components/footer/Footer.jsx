import React, { Component } from 'react'
import s from './footer.module.scss'
import ArrowRight from '../main/intro-page/image/arrow-right.png'
import { Link } from 'react-router-dom'
import Logo from './image/footer-logo.png'

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.requestConsultation = this.requestConsultation.bind(this);
  }

  requestConsultation() {
    // req
  }

  render() {
    const text = this.props.langData;

    return (
      <footer className={`${s.footer} py-2`}>
        <div className={`${s.footer_content} container`}>
          <div className={`${s.btn_block}`}>
            <button className={`${s.btn} btn px-4`}
              onClick={this.requestConsultation} >
              {text.footer_btn}
              <img src={ArrowRight} alt="arrow" />
            </button>
          </div>
          <div className={`${s.info_block}`}>
            <div>{text.footer_list_item_1}</div>
            <div>{text.footer_list_item_2}</div>
            <div>{text.footer_list_item_3}</div>
            <div>{text.footer_list_item_4}</div>
          </div>

          <div className={`${s.text_block}`}>
            <p><b>Avto</b>Test {text.footer_text} </p>
          </div>

          <div className={s.logo_block}>
            <Link className={`navbar-brand d-flex flex-column text-center justify-content-center`} to="/">
              <img src={Logo} alt="logo" className={`m-auto`} />
              <h2 className="h3 text-dark"><b>Avto</b>Test</h2>
            </Link>
          </div>

          <div className={`${s.foot_block}`}>
            <a href="tel:+380964702700" className={`text-dark font-weight-bolder`}>+38096 470 27 00</a>
            <p>© 2020 <b>Avto</b>Test. {text.company_information}</p>
          </div>
        </div>
      </footer>
    )
  }
}
