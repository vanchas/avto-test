import React, { Component } from 'react'
import s from './footer.module.scss'
import ArrowRight from '../main/intro-page/image/arrow-right.png'
import { Link } from 'react-router-dom'
import Logo from './image/footer-logo.png'

export default class Footer extends Component {
  render() {
    return (
      <footer className={`${s.footer} py-2`}>
        <div className={`${s.footer_content} container`}>
          <div className={`${s.btn_block}`}>
            <button className={`${s.btn} btn px-4`}>
              Дізнатися більше
              <img src={ArrowRight} alt="arrow" />
            </button>
          </div>

          <div className={`${s.info_block}`}>
            <div>Пошук по VIN коду</div>
            <div>VIN код</div>
            <div>Огляд авто</div>
            <div>Авто «під ключ»</div>
          </div>

          <div className={`${s.text_block}`}>
            <p><b>Avto</b>Test — сервіс для перевірки VIN коду, заощаджуючи ваші кошти. Будь-яка додаткова інформація може допомогти Вам вибрати правильний автомобіль або домовитися про більш вигідною ціною. </p>
          </div>

          <div className={s.logo_block}>
            <Link className={`navbar-brand d-flex flex-column text-center justify-content-center`} to="/">
              <img src={Logo} alt="logo" className={`m-auto`} />
              <h2 className="h3 text-dark"><b>Avto</b>Test</h2>
            </Link>
          </div>

          <div className={`${s.foot_block}`}>
            <a href="tel:+380964702700" className={`text-dark font-weight-bolder`}>+38096 470 27 00</a>
            <p>© 2020 <b>Avto</b>Test. Політика конфединціальності. Всі права захищені.</p>
          </div>
        </div>
      </footer>
    )
  }
}
