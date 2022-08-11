import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { addAnswer3 } from '../../toolkitRedux/toolkitReducer';

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
import './ThirdQuizPage.scss';

export const ThirdQuizPage: React.FC = () => {
  const [timer, setTimer] = useState<number>(15);
  const [answer, setAnswer] = useState<string>('Move here');
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

    if (answer !== 'Move here') {
      setIsNotification(false);
    }

    return undefined;
  }, [timer, answer]);

  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const star = classNames('star', {
    'star--true': answer === '100',
    'star--false': answer !== '100' && answer !== 'Move here',
  });

  return (
    <div className="ThirdQuizPage">
      <div className="ThirdQuizPage__content-wrapper">
        <div className="container container__ThirdQuizPage">
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

          <main className="ThirdQuizPage__main">
            <h3 className="ThirdQuizPage__title ThirdQuizPage__title--desktop">
              What percentage of candidates
              {' '}
              <span className="ThirdQuizPage__title--red">
                intern
              </span>
              {' '}
              with our company?
            </h3>

            <h3 className="ThirdQuizPage__title ThirdQuizPage__title--mobile">
              What percentage of candidates
              {' '}
              <span className="ThirdQuizPage__title--red">
                intern
              </span>
              {' '}
              with our company?
            </h3>

            <div className="ThirdQuizPage__slider">
              {answer === 'Move here' && (
                <h2 className="ThirdQuizPage__slider--hint">{`${answer}`}</h2>
              )}
              {answer !== 'Move here' && (
                <h2 className="ThirdQuizPage__slider--value">{`${answer}%`}</h2>
              )}
              <input
                type="range"
                className="ThirdQuizPage__fader"
                onChange={handleOnChange}
              />
            </div>

            {(isNotification && answer === 'Move here') && (
              <p className="notification">
                Please, choose your answer
              </p>
            )}

            <img
              src={Illustration}
              alt="illustration"
              className="ThirdQuizPage__illustration"
            />

            <div className="numberOfItem">
              <span className="numberOfItem--active">
                3
              </span>
              /4
            </div>

            <div className="SecondQuizPage__arrows">
              <div className="SecondQuizPage__arrow SecondQuizPage__arrow--desktop">
                <Link
                  className="SecondQuizPage__previous"
                  to="/secondAnswer"
                >
                  <img className="SecondQuizPage__arrow--desktop" src={PreviousBold} alt="arrow left" />
                  Previous
                </Link>
              </div>
              <div className="SecondQuizPage__arrow--mobile">
                <Link
                  className="SecondQuizPage__previous"
                  to="/secondAnswer"
                >
                  <img className="SecondQuizPage__arrow--mobile" src={Previous} alt="arrow left" />
                  Previous
                </Link>
              </div>

              {answer !== 'Move here' && (
                <>
                  <div className="SecondQuizPage__arrow SecondQuizPage__arrow--desktop">
                    <Link
                      className="SecondQuizPage__next"
                      to="/thirdAnswer"
                      onClick={() => dispatch(addAnswer3(answer))}
                    >
                      Next
                      <img className="SecondQuizPage__arrow--desktop" src={NextBold} alt="arrow left" />
                    </Link>
                  </div>
                  <div className="SecondQuizPage__arrow--mobile">
                    <Link
                      className="SecondQuizPage__next"
                      to="/thirdAnswer"
                      onClick={() => dispatch(addAnswer3(answer))}
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

      <div className="ThirdQuizPage__info">
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
          {(answer === 'Move here') && (
            <span className="star__text">{timer}</span>
          )}
        </div>
      )}
    </div>
  );
};
