import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Illustration from '../../images/question1-ill.svg';
import Logo from '../../images/Logo.svg';
import FirstCompany from '../../images/FourthQuizPage/1.png';
import SecondCompany from '../../images/FourthQuizPage/2.png';
import ThirdCompany from '../../images/FourthQuizPage/3.png';
import FourthCompany from '../../images/FourthQuizPage/4.png';
import FivthCompany from '../../images/FourthQuizPage/5.png';
import SixthCompany from '../../images/FourthQuizPage/6.png';
import Previous from '../../images/buttons/previous.svg';
import PreviousBold from '../../images/buttons/previousBold.svg';
import '../Buttons/Buttons.scss';
import '../../utils/header.scss';
import '../../utils/footer.scss';
import '../../utils/star.scss';
import '../../utils/notification.scss';
import '../../utils/numberOfItem.scss';
import '../../utils/container.scss';
import './Form.scss';

export const Form: React.FC = () => {
  const [timer, setTimer] = useState<number>(15);

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
    <div className="Form">
      <div className="Form__content-wrapper">
        <div className="container container__Form">
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

          <main className="Form__main">
            <h3 className="Form__title Form__title--desktop">
              You’re running out of time, and you want to hire a
              {' '}
              <span className="Form__title--yellow">
                remote employee?
              </span>
            </h3>

            <h3 className="Form__title Form__title--mobile">
              You’re running out of time, and you want to hire a
              {' '}
              <span className="Form__title--white">
                remote employee?
              </span>
            </h3>

            <p className="Form__paragraph">
              Leave contact details, and we&apos;ll contact you within half an hour.
              We&apos;ll find a specialist to help you solve your business problems.
            </p>

            <form action="post" className="Form__form">
              <input
                type="text"
                placeholder="Name"
                className="Form__input"
              />
              <input
                type="text"
                placeholder="Phone"
                className="Form__input"
              />

              <input
                type="submit"
                className="Form__form-button"
                value="Get a consultation now"
              />
            </form>

            <img
              src={Illustration}
              alt="illustration"
              className="Form__illustration"
            />

            <div className="numberOfItem">
              <span className="numberOfItem--active">
                4
              </span>
              /4
            </div>

            <div className="buttons Form__arrow">
              <Link
                className="buttons__previous"
                to="/firstQuestion"
              >
                <img className="buttons--desktop" src={PreviousBold} alt="arrow left" />
                Previous
              </Link>
            </div>
            <div className="buttons Form__arrow--mobile">
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

        <footer className="footer Form__footer">
          <ul className="footer__social--companies">
            <li className="footer__social-item">
              <img src={FirstCompany} alt="FirstCompany" className="footer__social-logo--companies" />
            </li>
            <li className="footer__social-item">
              <img src={SecondCompany} alt="SecondCompany" className="footer__social-logo--companies" />
            </li>
            <li className="footer__social-item footer__social-item--desktop">
              <img src={ThirdCompany} alt="ThirdCompany" className="footer__social-logo--companies" />
            </li>
            <li className="footer__social-item">
              <img src={FourthCompany} alt="FourthCompany" className="footer__social-logo--companies" />
            </li>
            <li className="footer__social-item">
              <img src={FivthCompany} alt="FivthCompany" className="footer__social-logo--companies" />
            </li>
            <li className="footer__social-item">
              <img src={SixthCompany} alt="SixthCompany" className="footer__social-logo--companies" />
            </li>
          </ul>
        </footer>
      </div>

      <div className="Form__info">
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
    </div>
  );
};
