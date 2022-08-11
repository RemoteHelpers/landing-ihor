import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../toolkitRedux';
import { Buttons, ButtonsDesktop } from '../Buttons/Buttons';
import Logo from '../../images/Logo.svg';
import WhatsApp from '../../images/social/whatsapp.svg';
import Viber from '../../images/social/viber.svg';
import Skype from '../../images/social/skype.svg';
import Telegram from '../../images/social/telegram.svg';
import Email from '../../images/social/email.svg';
import Euro from '../../images/SecondQuizPageAnswer/Euro.svg';
import Ill from '../../images/SecondQuizPageAnswer/secondAnswer-ill.png';
import './SecondQuizPageAnswer.scss';
import '../../utils/header.scss';
import '../../utils/footer.scss';
import '../../utils/numberOfItem.scss';
import '../../utils/container.scss';

export const SecondQuizPageAnswer: React.FC = () => {
  const isTrueAnswer = useSelector((state: RootState) => state.toolkit.secondQuestion.isTrue);

  return (
    <div className="SecondQuizPageAnswer">
      <div className="SecondQuizPageAnswer__content-wrapper">
        <div className="container container__SecondQuizPageAnswer">
          <header className="header">
            <img
              src={Logo}
              alt="Logotype"
              className="header__logo"
            />
            <p className="header__text">
              The outstaffing company in Digital Marketing
            </p>
          </header>

          <main className="SecondQuizPageAnswer__main">
            <h3 className="SecondQuizPageAnswer__title">
              Our candidates work
              {' '}
              <span className="SecondQuizPageAnswer__title--blue">
                8 and 4 hours
              </span>
              {' '}
              a day
            </h3>

            <p className="SecondQuizPageAnswer__text-answer">
              Candidates work 8 and 4 hours a day, no matter which
              <br />
              country they live in.
            </p>

            <div className="SecondQuizPageAnswer__vision-answer">
              <div className="SecondQuizPageAnswer__vision-answer--el">
                <span className="SecondQuizPageAnswer__vision-answer--prof">
                  Virtual Assistance
                </span>
                <span className="SecondQuizPageAnswer__vision-answer--price">
                  <img src={Euro} alt="euro" />
                  800/500
                </span>
              </div>
              <div className="SecondQuizPageAnswer__vision-answer--el">
                <span className="SecondQuizPageAnswer__vision-answer--prof">
                  Marketing
                </span>
                <span className="SecondQuizPageAnswer__vision-answer--price">
                  <img src={Euro} alt="euro" />
                  1000/700
                </span>
              </div>
              <div className="SecondQuizPageAnswer__vision-answer--el">
                <span className="SecondQuizPageAnswer__vision-answer--prof">
                  Design
                </span>
                <span className="SecondQuizPageAnswer__vision-answer--price">
                  <img src={Euro} alt="euro" />
                  1200/900
                </span>
              </div>
              <div className="SecondQuizPageAnswer__vision-answer--el">
                <span className="SecondQuizPageAnswer__vision-answer--prof">
                  Media
                </span>
                <span className="SecondQuizPageAnswer__vision-answer--price">
                  <img src={Euro} alt="euro" />
                  1000/700
                </span>
              </div>
              <div className="SecondQuizPageAnswer__vision-answer--el">
                <span className="SecondQuizPageAnswer__vision-answer--prof">
                  Sales
                </span>
                <span className="SecondQuizPageAnswer__vision-answer--price">
                  <img src={Euro} alt="euro" />
                  1200/900
                </span>
              </div>
              <div className="SecondQuizPageAnswer__vision-answer--el">
                <span className="SecondQuizPageAnswer__vision-answer--prof">
                  Video editing
                </span>
                <span className="SecondQuizPageAnswer__vision-answer--price">
                  <img src={Euro} alt="euro" />
                  1200/900
                </span>
              </div>
              <div className="SecondQuizPageAnswer__vision-answer--el">
                <span className="SecondQuizPageAnswer__vision-answer--prof">
                  Development
                </span>
                <span className="SecondQuizPageAnswer__vision-answer--price">
                  <img src={Euro} alt="euro" />
                  1400/1100
                </span>
              </div>
            </div>

            <p className="SecondQuizPageAnswer__paragraph">
              <span className="SecondQuizPageAnswer__paragraph--red">
                *
              </span>
              <span className="SecondQuizPageAnswer__paragraph--blue">
                8
              </span>
              {' '}
              hours a day /
              {' '}
              <span className="SecondQuizPageAnswer__paragraph--blue">
                4
              </span>
              {' '}
              hours a day
            </p>

            <div className="numberOfItem">
              <span className="numberOfItem--active">
                2
              </span>
              /4
            </div>

            <ButtonsDesktop
              previousUrl="/secondQuestion"
              nextUrl="/thirdQuestion"
            />
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
            <li className="footer__social-item MainPage__social-item--desktop">
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

      <div className="SecondQuizPageAnswer__info">
        <div className="SecondQuizPageAnswer__info--content-wrapper">
          <header className="header--desktop">
            <img
              src={Logo}
              alt="Logotype"
              className="header__logo header__logo--info"
            />
            <p className="header__text">
              The outstaffing company
              <br />
              in Digital Marketing
            </p>
            <p className="header__text--inline">
              The outstaffing company in Digital Marketing
            </p>
          </header>

          <main className="SecondQuizPageAnswer__main--mobile">
            <h3 className="SecondQuizPageAnswer__title">
              Our candidates work
              {' '}
              <span className="SecondQuizPageAnswer__title--blue">
                8 and 4 hours
              </span>
              {' '}
              a day
            </h3>

            <p className="SecondQuizPageAnswer__text-answer--mobile">
              Candidates work 8 and 4 hours a day, no matter which country they live in.
            </p>

            <div className="SecondQuizPageAnswer__vision-answer--mobile">
              <div className="SecondQuizPageAnswer__vision-answer--mobile--el">
                <span className="SecondQuizPageAnswer__vision-answer--mobile--prof">
                  Virtual Assistance
                </span>
                <span className="SecondQuizPageAnswer__vision-answer--mobile--price">
                  <img src={Euro} alt="euro" />
                  800/500
                </span>
              </div>
              <div className="SecondQuizPageAnswer__vision-answer--mobile--el">
                <span className="SecondQuizPageAnswer__vision-answer--mobile--prof">
                  Marketing
                </span>
                <span className="SecondQuizPageAnswer__vision-answer--mobile--price">
                  <img src={Euro} alt="euro" />
                  1000/700
                </span>
              </div>
              <div className="SecondQuizPageAnswer__vision-answer--mobile--el">
                <span className="SecondQuizPageAnswer__vision-answer--mobile--prof">
                  Design
                </span>
                <span className="SecondQuizPageAnswer__vision-answer--mobile--price">
                  <img src={Euro} alt="euro" />
                  1200/900
                </span>
              </div>
              <div className="SecondQuizPageAnswer__vision-answer--mobile--el">
                <span className="SecondQuizPageAnswer__vision-answer--mobile--prof">
                  Media
                </span>
                <span className="SecondQuizPageAnswer__vision-answer--mobile--price">
                  <img src={Euro} alt="euro" />
                  1000/700
                </span>
              </div>
              <div className="SecondQuizPageAnswer__vision-answer--mobile--el">
                <span className="SecondQuizPageAnswer__vision-answer--mobile--prof">
                  Sales
                </span>
                <span className="SecondQuizPageAnswer__vision-answer--mobile--price">
                  <img src={Euro} alt="euro" />
                  1200/900
                </span>
              </div>
              <div className="SecondQuizPageAnswer__vision-answer--mobile--el">
                <span className="SecondQuizPageAnswer__vision-answer--mobile--prof">
                  Video editing
                </span>
                <span className="SecondQuizPageAnswer__vision-answer--mobile--price">
                  <img src={Euro} alt="euro" />
                  1200/900
                </span>
              </div>
              <div className="SecondQuizPageAnswer__vision-answer--mobile--el">
                <span className="SecondQuizPageAnswer__vision-answer--mobile--prof">
                  Development
                </span>
                <span className="SecondQuizPageAnswer__vision-answer--mobile--price">
                  <img src={Euro} alt="euro" />
                  1400/1100
                </span>
              </div>
            </div>

            <p className="SecondQuizPageAnswer__paragraph--mobile">
              <span className="SecondQuizPageAnswer__paragraph--mobile--red">
                *
              </span>
              <span className="SecondQuizPageAnswer__paragraph--mobile--blue">
                8
              </span>
              {' '}
              hours a day /
              {' '}
              <span className="SecondQuizPageAnswer__paragraph--mobile--blue">
                4
              </span>
              {' '}
              hours a day
            </p>

            <div className="numberOfItem--mobile">
              <span className="numberOfItem--active">
                2
              </span>
              /4
            </div>

            <Buttons
              previousUrl="/secondQuestion"
              nextUrl="/thirdQuestion"
            />
          </main>
        </div>

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

      <img src={Ill} alt="illustration" className="SecondQuizPageAnswer__illustration--mobile" />

      {isTrueAnswer && (
        <div className="star star--true SecondQuizPageAnswer__star"></div>
      )}

      {!isTrueAnswer && (
        <div className="star star--false SecondQuizPageAnswer__star"></div>
      )}
    </div>
  );
};
