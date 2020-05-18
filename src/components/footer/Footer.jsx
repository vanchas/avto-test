import React, { Component } from 'react'
import PropTypes from 'prop-types';
import s from './footer.module.scss'
import { Link } from 'react-router-dom'
import Logo from './image/footer-logo.png'

export default class Footer extends Component {
  render() {
    const text = this.props.langData;

    return (
      <footer className={`${s.footer} py-2`}>
        <div className={`${s.footer_content} container`}>

          <div className={`${s.foot_block} px-2`}>
            <a href="tel:+380964702700" className={`text-dark font-weight-bolder`}>+38096 470 27 00</a>
            <div className={`${s.text_block}`}>
              <p className="m-0"><b>Avto</b>Test - {text.footer_text} </p>
            </div>
            <p>© 2020 <b>Avto</b>Test. {text.company_information}</p>
          </div>

          <div className={s.logo_block}>
            <Link className={`navbar-brand d-flex flex-column text-center justify-content-center m-0`} to="/">
              <img src={Logo} alt="logo" className={`m-auto`} />
              <h2 className="h3 text-dark"><b>Avto</b>Test</h2>
            </Link>
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {
  langData: PropTypes.object
}
