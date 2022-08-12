import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Illustration from '../../images/Rejected/ill.png';
import Logo from '../../images/Logo.svg';
import WhatsApp from '../../images/social/whatsapp.svg';
import Viber from '../../images/social/viber.svg';
import Skype from '../../images/social/skype.svg';
import Telegram from '../../images/social/telegram.svg';
import Email from '../../images/social/email.svg';
import '../Buttons/Buttons.scss';
import '../../utils/header.scss';
import '../../utils/footer.scss';
import '../../utils/star.scss';
import '../../utils/notification.scss';
// import '../../utils/numberOfItem.scss';
import '../../utils/container.scss';
import './AdditionalDiscount.scss';
import { PopUp } from '../PopUp/PopUp';

export const AdditionalDiscount: React.FC = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="AdditionalDiscount">
      <div className="AdditionalDiscount__content-wrapper">
        <div className="container container__AdditionalDiscount">
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

          <main className="AdditionalDiscount__main">
            <h3 className="AdditionalDiscount__title AdditionalDiscount__title--desktop">
              We give you a
              {' '}
              <span className="AdditionalDiscount__title--high">
                5% discount
              </span>
              {' '}
              for choosing our company.
            </h3>

            <h3 className="AdditionalDiscount__title AdditionalDiscount__title--mobile">
              We give you a
              {' '}
              <span className="AdditionalDiscount__title--high">
                5% discount
              </span>
              {' '}
              for choosing our company.
            </h3>

            <div className="AdditionalDiscount__paragraph">
              In the meantime, our employee hasn’t called you back yet. You can read
              {' '}
              <span className="AdditionalDiscount__paragraph--bold">
                our testimonials
              </span>
              {' '}
              or
              {' '}
              <span className="AdditionalDiscount__paragraph--bold">
                share
              </span>
              {' '}
              this link with your friends, which we would appreciate!
            </div>

            <div className="AdditionalDiscount__buttons">
              <button
                type="button"
                className="Approved__button Approved__button--blue"
                onClick={() => setModalActive(true)}
              >
                Share
              </button>
              <Link
                to="/approvedTestimonials"
                className="AdditionalDiscount__navigate"
              >
                <div className="AdditionalDiscount__button AdditionalDiscount__button--yellow">Testimonials</div>
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

      <div className="AdditionalDiscount__info">
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
        className="AdditionalDiscount__illustration--mobile"
      />

      <PopUp active={modalActive} setActive={setModalActive}>
        <h1>23</h1>
      </PopUp>
    </div>
  );
};
