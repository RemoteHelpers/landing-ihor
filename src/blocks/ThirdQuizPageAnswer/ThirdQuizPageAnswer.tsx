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
import Ill from '../../images/ThirdQuizPageAswer/third-ill.png';
import RedPoint from '../../images/ThirdQuizPageAswer/red-point.svg';
import GreenPoint from '../../images/ThirdQuizPageAswer/green-point.svg';
import './ThirdQuizPageAnswer.scss';
import '../../utils/header.scss';
import '../../utils/footer.scss';
import '../../utils/numberOfItem.scss';
import '../../utils/container.scss';

export const ThirdQuizPageAnswer: React.FC = () => {
  const isTrueAnswer = useSelector((state: RootState) => state.toolkit.thirdQuestion.isTrue);

  return (
    <div className="ThirdQuizPageAnswer">
      <div className="ThirdQuizPageAnswer__content-wrapper">
        <div className="container container__ThirdQuizPageAnswer">
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

          <main className="ThirdQuizPageAnswer__main">
            <h3 className="ThirdQuizPageAnswer__title">
              What percentage of candidates
              {' '}
              <span className="ThirdQuizPageAnswer__title--red">
                intern
              </span>
              {' '}
              with our company?
            </h3>

            <p className="ThirdQuizPageAnswer__paragraph">
              <span className="ThirdQuizPageAnswer__paragraph--red">
                100%!
              </span>
              {' '}
              All candidates are accurately selected by our recruiters. Then, candidates work
              for us for at least several months. Besides, they are trained to perform the tasks
              properly. And only then can you start cooperating with us in two simple steps:
            </p>

            <div className="ThirdQuizPageAnswer__points">
              <div className="ThirdQuizPageAnswer__point">
                <img src={GreenPoint} alt="point1" className="ThirdQuizPageAnswer__point-image" />
                <p className="ThirdQuizPageAnswer__point-paragraph">
                  After selecting the appropriate candidates,
                  {' '}
                  <span className="ThirdQuizPageAnswer__point-paragraph--bold">
                    we&apos;ll schedule
                  </span>
                  {' '}
                  an interview with them at your convenience.
                </p>
              </div>
              <div className="ThirdQuizPageAnswer__point">
                <img src={RedPoint} alt="point2" className="ThirdQuizPageAnswer__point-image" />
                <p className="ThirdQuizPageAnswer__point-paragraph">
                  Upon completing the interview, we sign
                  {' '}
                  <span className="ThirdQuizPageAnswer__point-paragraph--bold">
                    a contract
                  </span>
                  {' '}
                  with you where all details are agreed upon: terms, payment, and tasks.
                </p>
              </div>
            </div>

            <p className="ThirdQuizPageAnswer__content-submit">
              Now it&apos;s time for employee onboarding.
            </p>

            <div className="numberOfItem">
              <span className="numberOfItem--active">
                3
              </span>
              /4
            </div>

            <ButtonsDesktop
              previousUrl="/thirdQuestion"
              nextUrl="/fourthQuestion"
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

      <div className="ThirdQuizPageAnswer__info">
        <div className="ThirdQuizPageAnswer__info--content-wrapper">
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

          <main className="ThirdQuizPageAnswer__main--mobile">
            <h3 className="ThirdQuizPageAnswer__title ThirdQuizPageAnswer__title--mobile">
              What percentage of candidates
              {' '}
              <span className="ThirdQuizPageAnswer__title--red">
                intern
              </span>
              {' '}
              with our company?
            </h3>

            <p className="ThirdQuizPageAnswer__paragraph--mobile">
              <span className="ThirdQuizPageAnswer__paragraph--mobile--red">
                100%!
              </span>
              {' '}
              Our recruiters accurately select all candidates. After onboarding they will spend
              at least several month in training and performing tasks.
              <br />
              <br />
            </p>

            <p className="ThirdQuizPageAnswer__paragraph--mobile--add">
              And only then can you start cooperating with us in two simple steps:
            </p>

            <div className="ThirdQuizPageAnswer__points--mobile">
              <div className="ThirdQuizPageAnswer__point--mobile">
                <img src={GreenPoint} alt="point1" className="ThirdQuizPageAnswer__point-image--mobile" />
                <p className="ThirdQuizPageAnswer__point-paragraph--mobile">
                  Interview
                  <br />
                  with candidates.
                </p>
              </div>
              <div className="ThirdQuizPageAnswer__point--mobile">
                <img src={RedPoint} alt="point2" className="ThirdQuizPageAnswer__point-image--mobile" />
                <p className="ThirdQuizPageAnswer__point-paragraph--mobile">
                  Contract signing
                </p>
              </div>
            </div>

            <p className="ThirdQuizPageAnswer__content-submit--mobile">
              Now it&apos;s time for employee
              <br />
              onboarding.
            </p>

            <div className="numberOfItem--mobile">
              <span className="numberOfItem--active">
                3
              </span>
              /4
            </div>

            <Buttons
              previousUrl="/thirdQuestion"
              nextUrl="/fourthQuestion"
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

      <img src={Ill} alt="illustration" className="ThirdQuizPageAnswer__illustration--mobile" />

      {isTrueAnswer && (
        <div className="star star--true ThirdQuizPageAnswer__star"></div>
      )}

      {!isTrueAnswer && (
        <div className="star star--false ThirdQuizPageAnswer__star"></div>
      )}
    </div>
  );
};
