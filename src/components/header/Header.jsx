import React, { Component } from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import { history } from '../../_helpers/history'
import Logo from './image/navbar-brand-logo.png'
import ArrowDown from './image/arrow-down.png'
import Phone from './image/phone.png'
import Enter from './image/enter.png'


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'UA'
    }
  }

  onSelectLanguage(value) {
    this.setState({ language: value })
  }

  goToLoginPage() {
    history.push('/login');
  }

  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-dark navbar-expand-lg">
          <Link className="navbar-brand d-flex flex-column text-white justify-content-center" to="/avto-text">
            <img src={Logo} alt="logo" className="m-auto" />
            <h2 className="h5"><b>Avto</b>Test</h2>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i></i><i></i><i></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto w-100 d-flex justify-content-around align-content-center px-3">
              <li className="nav-item">
                <Link className="nav-link text-white h5 font-weight-light mb-0"
                  to="/avto-test" >VIN код</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white h5 font-weight-light mb-0"
                  to="/avto-test" >Огляд авто</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white h5 font-weight-light mb-0"
                  to="/avto-test" >Авто «під ключ»</Link>
              </li>
              <li className="nav-item">
                <button className="btn nav-link text-white h5 font-weight-light mb-0"
                  onClick={this.goToLoginPage}
                >Вхід
                <img src={Enter} alt="" className="ml-2" /></button>
              </li>
              <li className="nav-item nav-item-select">
                <select className="browser-default custom-select language-select text-white" defaultValue={this.state.language} onChange={e => this.onSelectLanguage(e.target.value)}>
                  <option className="" value="UA">UA</option>
                  <option className="" value="RU">RU</option>
                  <option className="" value="EN">EN</option>
                </select>
                <img src={ArrowDown} alt="" />
              </li>

            </ul>
          </div>
          <div className="call-info-block">
            <a href="tel:+380964702700" className="text-white number">
              <img src={Phone} alt="phone" className="mr-2 mb-1" />
              +38096 470 27 00</a>
            <button className="order-call-btn bg-transparent py-1 px-3">Замовити дзвінок</button>
          </div>
        </nav>
      </header>
    )
  }
}
