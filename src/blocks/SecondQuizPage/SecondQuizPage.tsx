import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { addAnswer2 } from '../../toolkitRedux/toolkitReducer';

import Illustration from '../../images/question1-ill.png';
import Logo from '../../images/Logo.svg';
import WhatsApp from '../../images/social/whatsapp.svg';
import Viber from '../../images/social/viber.svg';
import Skype from '../../images/social/skype.svg';
import Telegram from '../../images/social/telegram.svg';
import Email from '../../images/social/email.svg';
import Previous from '../../images/buttons/previous.svg';
import PreviousBold from '../../images/buttons/previousBold.svg';
import Next from '../../images/buttons/next.svg';
import NextBold from '../../images/buttons/nextBold.svg';
import '../Buttons/Buttons.scss';
import '../../utils/header.scss';
import '../../utils/footer.scss';
import '../../utils/star.scss';
import '../../utils/notification.scss';
import '../../utils/numberOfItem.scss';
import '../../utils/container.scss';
import './SecondQuizPage.scss';

export const SecondQuizPage: React.FC = () => {
  const [timer, setTimer] = useState<number>(15);
  const [answer, setAnswer] = useState<string | null>(null);
  const [isNotification, setIsNotification] = useState<boolean>(false);

  const dispatch = useDispatch();

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

    if (answer) {
      setIsNotification(false);
    }

    return undefined;
  }, [timer, answer]);

  const handleEvent = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLInputElement;

    setAnswer(target.value);
  };

  const star = classNames('star', {
    'star--true': answer === 'true',
    'star--false': answer === 'false' && answer !== null,
  });

  return (
    <div className="SecondQuizPage">
      <div className="SecondQuizPage__content-wrapper">
        <div className="container container__SecondQuizPage">
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

          <main className="SecondQuizPage__main">
            <h3 className="SecondQuizPage__title SecondQuizPage__title--desktop">
              Our candidates work
              {' '}
              <span className="SecondQuizPage__title--blue">
                8 and 4 hours
              </span>
              {' '}
              a day
            </h3>

            <h3 className="SecondQuizPage__title SecondQuizPage__title--mobile">
              Our candidates work
              {' '}
              <span className="SecondQuizPage__title--blue">
                8 and 4 hours
              </span>
              {' '}
              a day
            </h3>

            <div className="SecondQuizPage__buttons">
              <button
                type="button"
                className="SecondQuizPage__button SecondQuizPage__button--true"
                onClick={handleEvent}
                value="true"
              >
                True
              </button>

              <button
                type="button"
                className="SecondQuizPage__button SecondQuizPage__button--false"
                onClick={handleEvent}
                value="false"
              >
                False
              </button>
            </div>

            {(isNotification && answer === null) && (
              <p className="notification">
                Please, choose your answer
              </p>
            )}

            <img
              src={Illustration}
              alt="illustration"
              className="SecondQuizPage__illustration"
            />

            <div className="numberOfItem">
              <span className="numberOfItem--active">
                2
              </span>
              /4
            </div>

            <div className="SecondQuizPage__arrows">
              <div className="SecondQuizPage__arrow SecondQuizPage__arrow--desktop">
                <Link
                  className="SecondQuizPage__previous"
                  to="/firstAnswer"
                >
                  <img className="SecondQuizPage__arrow--desktop" src={PreviousBold} alt="arrow left" />
                  Previous
                </Link>
              </div>
              <div className="SecondQuizPage__arrow--mobile">
                <Link
                  className="SecondQuizPage__previous"
                  to="/firstAnswer"
                >
                  <img className="SecondQuizPage__arrow--mobile" src={Previous} alt="arrow left" />
                  Previous
                </Link>
              </div>

              {answer && (
                <>
                  <div className="SecondQuizPage__arrow SecondQuizPage__arrow--desktop">
                    <Link
                      className="SecondQuizPage__next"
                      to="/secondAnswer"
                      onClick={() => dispatch(addAnswer2(answer))}
                    >
                      Next
                      <img className="SecondQuizPage__arrow--desktop" src={NextBold} alt="arrow left" />
                    </Link>
                  </div>
                  <div className="SecondQuizPage__arrow--mobile">
                    <Link
                      className="SecondQuizPage__next"
                      to="/secondAnswer"
                      onClick={() => dispatch(addAnswer2(answer))}
                    >
                      Next
                      <img className="SecondQuizPage__arrow--mobile" src={Next} alt="arrow left" />
                    </Link>
                  </div>
                </>
              )}
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

      <div className="SecondQuizPage__info">
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
          <Link
            to="/form"
          >
            <button type="button" className="footer__text">
              I&apos;m curious, want to get a consultation
            </button>
          </Link>
        </footer>
      </div>

      {!isNotification && (
        <div className={star}>
          {(answer === null) && (
            <span className="star__text">{timer}</span>
          )}
        </div>
      )}
    </div>
  );
};
