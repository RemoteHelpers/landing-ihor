import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../toolkitRedux';
import { Buttons, ButtonsDesktop } from '../Buttons/Buttons';
import Logo from '../../images/Logo.svg';
import WhatsApp from '../../images/social/whatsapp.svg';
import Viber from '../../images/social/viber.svg';
import Skype from '../../images/social/skype.svg';
import Telegram from '../../images/social/telegram.svg';
import Email from '../../images/social/email.svg';
import Ill from '../../images/FirstAnswer/answer1-ill.png';
import './FirstQuizPageAnswer.scss';
import '../../utils/header.scss';
import '../../utils/footer.scss';
import '../../utils/numberOfItem.scss';
import '../../utils/container.scss';

export const FirstQuizPageAnswer: React.FC = () => {
  const isTrueAnswer = useSelector((state: RootState) => state.toolkit.firstQuestion.isTrue);

  return (
    <div className="FirstQuizPageAnswer">
      <div className="FirstQuizPageAnswer__content-wrapper">
        <div className="container container__FirstQuizPageAnswer">
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

          <main className="FirstQuizPageAnswer__main">
            <h3 className="FirstQuizPageAnswer__title">
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

            <p className="FirstQuizPageAnswer__text-answer">
              <span className="FirstQuizPageAnswer__text-answer--mobile--red">
                7!
              </span>
              {' '}
              We keep specialists in:
            </p>

            <div className="FirstQuizPageAnswer__vision-answer">
              <div className="FirstQuizPageAnswer__vision-answer--1">
                Development
              </div>
              <div className="FirstQuizPageAnswer__vision-answer--2">
                Design
              </div>
              <div className="FirstQuizPageAnswer__vision-answer--7">
                Sales
              </div>
              <div className="FirstQuizPageAnswer__vision-answer--4">
                Media
              </div>
              <div className="FirstQuizPageAnswer__vision-answer--5">
                Video editing
              </div>
              <div className="FirstQuizPageAnswer__vision-answer--6">
                Marketing
              </div>
              <div className="FirstQuizPageAnswer__vision-answer--3">
                Virtual Assistance
              </div>
            </div>

            <div className="numberOfItem">
              <span className="numberOfItem--active">
                1
              </span>
              /4
            </div>

            <ButtonsDesktop
              previousUrl="/firstQuestion"
              nextUrl="/secondQuestion"
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

      <div className="FirstQuizPageAnswer__info">
        <div className="FirstQuizPageAnswer__info--content-wrapper">
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

          <main className="FirstQuizPageAnswer__main--mobile">
            <h3 className="FirstQuizPageAnswer__title--mobile">
              How many
              {' '}
              <span className="FirstQuizPageAnswer__title--mobile--red">
                specialties
              </span>
              {' '}
              for your business can we offer?
            </h3>

            <p className="FirstQuizPageAnswer__text-answer--mobile">
              <span className="FirstQuizPageAnswer__text-answer--mobile--red">
                7!
              </span>
              {' '}
              We keep specialists in:
            </p>

            <div className="FirstQuizPageAnswer__vision-answer--mobile">
              <div className="FirstQuizPageAnswer__vision-answer--mobile--1">
                Development
              </div>
              <div className="FirstQuizPageAnswer__vision-answer--mobile--2">
                Design
              </div>
              <div className="FirstQuizPageAnswer__vision-answer--mobile--3">
                Virtual Assistance
              </div>
              <div className="FirstQuizPageAnswer__vision-answer--mobile--4">
                Media
              </div>
              <div className="FirstQuizPageAnswer__vision-answer--mobile--5">
                Video editing
              </div>
              <div className="FirstQuizPageAnswer__vision-answer--mobile--6">
                Marketing
              </div>
              <div className="FirstQuizPageAnswer__vision-answer--mobile--7">
                Sales
              </div>
            </div>

            <p className="FirstQuizPageAnswer__paragraph--mobile">
              ...who can work remotely the
              <br />
              day shift or the night shift.
            </p>

            <div className="numberOfItem--mobile">
              <span className="numberOfItem--active">
                1
              </span>
              /4
            </div>

            <Buttons
              previousUrl="/firstQuestion"
              nextUrl="/secondQuestion"
            />
          </main>
        </div>

        <footer>
          <button type="button" className="footer__text footer__button">
            I&apos;m curious, want to get a consultation
          </button>
        </footer>
      </div>

      <img src={Ill} alt="illustration" className="FirstQuizPageAnswer__illustration--mobile" />

      {isTrueAnswer && (
        <div className="star star--true FirstQuizPageAnswer__star"></div>
      )}

      {!isTrueAnswer && (
        <div className="star star--false FirstQuizPageAnswer__star"></div>
      )}
    </div>
  );
};
