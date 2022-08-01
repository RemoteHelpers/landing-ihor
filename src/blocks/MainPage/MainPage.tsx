import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/Logo.svg';
import Illustration from '../../images/main-ill.svg';
import WhatsApp from '../../images/social/whatsapp.svg';
import Viber from '../../images/social/viber.svg';
import Skype from '../../images/social/skype.svg';
import Telegram from '../../images/social/telegram.svg';
import Email from '../../images/social/email.svg';
import './MainPage.scss';
import '../container.scss';

export const MainPage: React.FC = () => {
  return (
    <div className="MainPage">
      <div className="container container__mainPage">
        <img
          className="MainPage__logo"
          src={Logo}
          alt="Logo"
        />
        <h3 className="MainPage__title">
          Get a discount
          <br></br>
          by hiring an employee
        </h3>
        <p className="MainPage__paragraph">
          We are outstaffing company in
          {' '}
          <span className="MainPage__paragraph--yellow">
            IT and marketing,
          </span>
          {' '}
          and if you complete this quiz you
          will learn what our firm can do for you and how to find the
          {' '}
          <span className="MainPage__paragraph--blue">
            best remote helper
          </span>
          {' '}
          .And you&apos;ll
          {' '}
          <span className="MainPage__paragraph--red">
            get 15$ off
          </span>
          {' '}
          for the first month for every correct answer.
        </p>
        <Link to="/firstQuestion">
          <button
            type="button"
            className="MainPage__button"
          >
            Want a discount
          </button>
        </Link>

        <img
          className="MainPage__illustration"
          src={Illustration}
          alt="helper illustration"
        />
      </div>

      <footer className="footer">
        <ul className="MainPage__social">
          <li className="MainPage__social-item">
            <a
              href="https://wa.me/380997101033"
              className="MainPage__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={WhatsApp} alt="WhatsApp logo" className="MainPage__social-logo" />
              <span>+38 099 710 10 33</span>
            </a>
          </li>
          <li className="MainPage__social-item MainPage__social-item--desktop">
            <a
              href="viber://chat?number=972509014509"
              className="MainPage__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Viber} alt="Viber logo" className="MainPage__social-logo" />
              <span>+97 250 901 45 09</span>
            </a>
          </li>
          <li className="MainPage__social-item MainPage__social-item--desktop">
            <a
              href="skype:youisrael?chat"
              className="MainPage__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Skype} alt="Skype logo" className="MainPage__social-logo" />
              <span>youisrael</span>
            </a>
          </li>
          <li className="MainPage__social-item">
            <a
              href="https://telegram.me/nikokardc"
              className="MainPage__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Telegram} alt="Telegram logo" className="MainPage__social-logo" />
              <span>@nikokardc</span>
            </a>
          </li>
          <li className="MainPage__social-item">
            <a
              href="mailto:sales@rh-s.com"
              className="MainPage__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Email} alt="Email logo" className="MainPage__social-logo" />
              <span>sales@rh-s.com</span>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
