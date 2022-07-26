import React from 'react';

import Logo from '../../images/Logo.svg';
import Illustration from '../../images/main-ill.svg';
// import WhatsApp from '../../images/social/whatsapp.svg';
// import Viber from '../../images/social/viber.svg';
// import Skype from '../../images/social/skype.svg';
// import Telegram from '../../images/social/telegram.svg';
// import Email from '../../images/social/email.svg';
import './MainPage.scss';

export const MainPage: React.FC = () => {
  return (
    <div className="MainPage">
      <img
        className="MainPage__logo"
        src={Logo}
        alt="Logo"
      />
      <h3 className="MainPage__title">
        Get a discount by hiring an employee
      </h3>
      <p className="MainPage__paragraph">
        We are outstaffing company in IT and marketing, and if you complete this quiz you
        will learn what our firm can do for you and how to find the best remote helper.
        And you&apos;ll get 15$ off for the first month for every correct answer.
      </p>
      <button
        type="button"
        className="MainPage__button"
      >
        Want a discount
      </button>
      <img
        className="MainPage__illustration"
        src={Illustration}
        alt="helper illustration"
      />
      {/* <ul className="MainPage__social">
        <li className="MainPage__social-item">
          <a href="https://wa.me/380997101033">
            <img src={WhatsApp} alt="WhatsApp logo" />
            +38 099 710 10 33
          </a>
        </li>
        <li className="MainPage__social-item">
          <a href="#">
            <img src={Viber} alt="Viber logo" />
            +97 250 901 45 09
          </a>
        </li>
        <li className="MainPage__social-item">
          <a href="#">
            <img src={Skype} alt="Skype logo" />
            youisrael
          </a>
        </li>
        <li className="MainPage__social-item">
          <a href="#">
            <img src={Telegram} alt="Telegram logo" />
            youisrael
          </a>
        </li>
        <li className="MainPage__social-item">
          <a href="#">
            <img src={Email} alt="Email logo" />
            youisrael
          </a>
        </li>
      </ul> */}
    </div>
  );
};
