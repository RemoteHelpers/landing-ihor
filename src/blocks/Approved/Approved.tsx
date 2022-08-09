import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../toolkitRedux';

import Illustration from '../../images/Rejected/ill.png';
import Logo from '../../images/Logo.svg';
import WhatsApp from '../../images/social/whatsapp.svg';
import Viber from '../../images/social/viber.svg';
import Skype from '../../images/social/skype.svg';
import Telegram from '../../images/social/telegram.svg';
import Email from '../../images/social/email.svg';
import Previous from '../../images/buttons/previous.svg';
import PreviousBold from '../../images/buttons/previousBold.svg';
import '../Buttons/Buttons.scss';
import '../../utils/header.scss';
import '../../utils/footer.scss';
import '../../utils/star.scss';
import '../../utils/notification.scss';
import '../../utils/container.scss';
import './Approved.scss';

export const Approved: React.FC = () => {
  const [timer, setTimer] = useState<number>(15);

  const amountOfDiscount = useSelector((state: RootState) => {
    return Number(state.toolkit.firstQuestion.isTrue) * 15
    + Number(state.toolkit.secondQuestion.isTrue) * 15
    + Number(state.toolkit.thirdQuestion.isTrue) * 15;
  });

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }

    return undefined;
  }, [timer]);

  return (
    <div className="Approved">
      <div className="Approved__content-wrapper">
        <div className="container container__Approved">
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

          <main className="Approved__main">
            <h3 className="Approved__title Approved__title--desktop">
              Thanks for choosing our company.
              {' '}
              <span className="Approved__title--high">
                Your discount is
                {' '}
                {amountOfDiscount}
                $
              </span>
              {' '}
              , and we&apos;ll definitely consider it when paying
              for our employee&apos;s first month of work.
            </h3>

            <h3 className="Approved__title Approved__title--mobile">
              Thanks for choosing our company.
              {' '}
              <span className="Approved__title--high">
                Your discount is
                {amountOfDiscount}
                $
              </span>
              {' '}
              , and we&apos;ll definitely consider it when paying
              for our employee&apos;s first month of work.
            </h3>

            <div className="Approved__paragraph">
              In the meantime, our employee hasn’t called you back yet. You can read
              {' '}
              <span className="Approved__paragraph--bold">
                our testimonials
              </span>
              {' '}
              or
              {' '}
              <span className="Approved__paragraph--bold">
                share
              </span>
              {' '}
              this link with your friends, which we would appreciate!
            </div>

            <div className="Approved__buttons">
              <Link
                to="/correctSecondAnswer"
                className="Approved__navigate"
              >
                <div className="Approved__button Approved__button--blue">Testimonials</div>
              </Link>

              <Link
                to="/incorrectSecondAnswer"
                className="Approved__navigate"
              >
                <div className="Approved__button Approved__button--yellow">Share</div>
              </Link>
            </div>

            <div className="buttons Approved__arrow">
              <Link
                className="buttons__previous"
                to="/firstQuestion"
              >
                <img className="buttons--desktop" src={PreviousBold} alt="arrow left" />
                Previous
              </Link>
            </div>
            <div className="buttons Approved__arrow--mobile">
              <Link
                className="buttons__previous"
                to="/firstQuestion"
              >
                <img className="buttons--mobile" src={Previous} alt="arrow left" />
                Previous
              </Link>
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

      <div className="Approved__info">
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
      </div>

      <img
        src={Illustration}
        alt="illustration"
        className="Approved__illustration--mobile"
      />
    </div>
  );
};
