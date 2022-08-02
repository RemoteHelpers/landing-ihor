import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Illustration from '../../images/question1-ill.svg';
import Logo from '../../images/Logo.svg';
import WhatsApp from '../../images/social/whatsapp.svg';
import Viber from '../../images/social/viber.svg';
import Skype from '../../images/social/skype.svg';
import Telegram from '../../images/social/telegram.svg';
import Email from '../../images/social/email.svg';
import './FirstQuizPage.scss';
import '../header.scss';
import '../footer.scss';
import '../star.scss';
import '../notification.scss';
import '../numberOfItem.scss';

export const FirstQuizPage: React.FC = () => {
  const [timer, setTimer] = useState<number>(15);
  const [isNotification, setIsNotification] = useState<boolean>(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }

    if (timer === 0) {
      setIsNotification(true);
    }

    return undefined;
  }, [timer]);

  return (
    <div className="FirstQuizPage">
      <div className="FirstQuizPage__content-wrapper">
        <div className="container container__FirstQuizPage">
          <header className="header">
            <img
              src={Logo}
              alt="Logotype"
              className="header__logo"
            />
            <p className="header__text header__text--first-form">
              The outstaffing company in Digital Marketing
            </p>
          </header>

          <main className="FirstQuizPage__main">
            <h3 className="FirstQuizPage__title FirstQuizPage__title--desktop">
              How many
              {' '}
              <span className="FirstQuizPage__title--red">
                specialities
              </span>
              {' '}
              for your
              <br />
              business can we offer?
            </h3>

            <h3 className="FirstQuizPage__title FirstQuizPage__title--mobile">
              How many
              {' '}
              <span className="FirstQuizPage__title--red">
                specialities
              </span>
              {' '}
              <br />
              for your business can we offer?
            </h3>

            <div className="FirstQuizPage__radiobuttons">
              <Link
                to="/incorrectFirstAnswer"
                className="FirstQuizPage__navigate"
              >
                <label className="FirstQuizPage__radiobutton">
                  <input
                    type="radio"
                    className="FirstQuizPage__radio"
                    name="radiobutton1"
                  />
                  <span className="FirstQuizPage__fake FirstQuizPage__fake--red"></span>
                  <span className="FirstQuizPage__text">1</span>
                </label>
              </Link>

              <Link
                to="/incorrectFirstAnswer"
                className="FirstQuizPage__navigate"
              >
                <label className="FirstQuizPage__radiobutton">
                  <input
                    type="radio"
                    className="FirstQuizPage__radio"
                    name="radiobutton1"
                  />
                  <span className="FirstQuizPage__fake FirstQuizPage__fake--yellow"></span>
                  <span className="FirstQuizPage__text">5</span>
                </label>
              </Link>

              <Link
                to="/incorrectFirstAnswer"
                className="FirstQuizPage__navigate"
              >
                <label className="FirstQuizPage__radiobutton">
                  <input
                    type="radio"
                    className="FirstQuizPage__radio"
                    name="radiobutton1"
                  />
                  <span className="FirstQuizPage__fake FirstQuizPage__fake--green"></span>
                  <span className="FirstQuizPage__text">3</span>
                </label>
              </Link>

              <Link
                to="/correctFirstAnswer"
                className="FirstQuizPage__navigate"
              >
                <label className="FirstQuizPage__radiobutton">
                  <input
                    type="radio"
                    className="FirstQuizPage__radio"
                    name="radiobutton1"
                  />
                  <span className="FirstQuizPage__fake FirstQuizPage__fake--blue"></span>
                  <span className="FirstQuizPage__text">7</span>
                </label>
              </Link>
            </div>

            <img
              src={Illustration}
              alt="illustration"
              className="FirstQuizPage__illustration"
            />

            <div className="numberOfItem">
              <span className="numberOfItem--active">
                1
              </span>
              /4
            </div>
          </main>
        </div>

        <footer className="footer">
          <ul className="footer__social">
            <li className="footer__social-item">
              <a
                href="https://wa.me/380997101033"
                className="footer__social-link"
                target="_blank"
                rel="noreferrer"
              >
                <img src={WhatsApp} alt="WhatsApp logo" className="footer__social-logo" />
                <span>+38 099 710 10 33</span>
              </a>
            </li>
            <li className="footer__social-item footer__social-item--desktop">
              <a
                href="viber://chat?number=972509014509"
                className="footer__social-link"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Viber} alt="Viber logo" className="footer__social-logo" />
                <span>+97 250 901 45 09</span>
              </a>
            </li>
            <li className="footer__social-item footer__social-item--desktop">
              <a
                href="skype:youisrael?chat"
                className="footer__social-link"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Skype} alt="Skype logo" className="footer__social-logo" />
                <span>youisrael</span>
              </a>
            </li>
            <li className="footer__social-item">
              <a
                href="https://telegram.me/nikokardc"
                className="footer__social-link"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Telegram} alt="Telegram logo" className="footer__social-logo" />
                <span>@nikokardc</span>
              </a>
            </li>
            <li className="footer__social-item">
              <a
                href="mailto:sales@rh-s.com"
                className="footer__social-link"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Email} alt="Email logo" className="footer__social-logo" />
                <span>sales@rh-s.com</span>
              </a>
            </li>
          </ul>
        </footer>
      </div>

      <div className="FirstQuizPage__info">
        <header className="header--desktop">
          <img
            src={Logo}
            alt="Logotype"
            className="header__logo"
          />
          <p className="header__text">
            The outstaffing company
            <br />
            in Digital Marketing
          </p>
        </header>

        <footer>
          <button type="button" className="footer__text">
            I&apos;m curious, want to get a consultation
          </button>
        </footer>
      </div>

      {!isNotification && (
        <div className="star">
          <span className="star__text">{timer}</span>
        </div>
      )}

      {isNotification && (
        <div className="notification">
          Please click on your answer
        </div>
      )}
    </div>
  );
};
