import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Illustration from '../../images/Rejected/ill.png';
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
import './Rejected.scss';

export const Rejected: React.FC = () => {
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
    <div className="Rejected">
      <div className="Rejected__content-wrapper">
        <div className="container container__Rejected">
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

          <main className="Rejected__main">
            <h3 className="Rejected__title Rejected__title--desktop">
              You’re running out of time, and you want to hire a
              {' '}
              <span className="Rejected__title--yellow">
                remote employee?
              </span>
            </h3>

            <h3 className="Rejected__title Rejected__title--mobile">
              You’re running out of time, and you want to hire a
              {' '}
              <span className="Rejected__title--white">
                remote employee?
              </span>
            </h3>

            <div className="Rejected__paragraph">
              Thanks for participating in our quiz. Perhaps you’d be interested to read the
              {' '}
              <span className="Rejected__paragraph--bold">
                testimonials
              </span>
              {' '}
              about our company, or you have friends to whom you may
              {' '}
              <span className="Rejected__paragraph--bold">
                recommend us.
              </span>
              {' '}
              We would appreciate it.
            </div>

            <div className="Rejected__buttons">
              <Link
                to="/correctSecondAnswer"
                className="Rejected__navigate"
              >
                <div className="Rejected__button Rejected__button--blue">Testimonials</div>
              </Link>

              <Link
                to="/incorrectSecondAnswer"
                className="Rejected__navigate"
              >
                <div className="Rejected__button Rejected__button--yellow">Share</div>
              </Link>
            </div>

            <div className="numberOfItem">
              <span className="numberOfItem--active">
                4
              </span>
              /4
            </div>

            <div className="buttons Rejected__arrow">
              <Link
                className="buttons__previous"
                to="/firstQuestion"
              >
                <img className="buttons--desktop" src={PreviousBold} alt="arrow left" />
                Previous
              </Link>
            </div>
            <div className="buttons Rejected__arrow--mobile">
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

        <footer className="footer Rejected__footer">
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

      <div className="Rejected__info">
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
        className="Rejected__illustration--mobile"
      />
    </div>
  );
};
