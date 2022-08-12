import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/swiper.scss';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import WhatsApp from '../../images/social/whatsapp.svg';
import Viber from '../../images/social/viber.svg';
import Skype from '../../images/social/skype.svg';
import Telegram from '../../images/social/telegram.svg';
import Email from '../../images/social/email.svg';
import Testimonials1 from '../../images/ApproveTestimonials/testimonials1.svg';
import Testimonials2 from '../../images/ApproveTestimonials/testimonials2.svg';
import Testimonials3 from '../../images/ApproveTestimonials/testimonials3.svg';
import './ApproveTestimonials.scss';
import '../../utils/header.scss';
import '../../utils/footer.scss';
import '../../utils/container.scss';
import { RootState } from '../../toolkitRedux';

export const ApproveTestimonials: React.FC = () => {
  const amountOfDiscount = useSelector((state: RootState) => {
    return Number(state.toolkit.firstQuestion.isTrue) * 15
    + Number(state.toolkit.secondQuestion.isTrue) * 15
    + Number(state.toolkit.thirdQuestion.isTrue) * 15;
  });

  return (
    <div className="ApproveTestimonials">
      <div className="ApproveTestimonials__content-wrapper">
        <div className="container container__ApproveTestimonials">
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

          <main className="ApproveTestimonials__main">
            <h3 className="ApproveTestimonials__title">
              Thanks for choosing our company.
              {' '}
              <span className="ApproveTestimonials__title--high">
                Your discount is
                {' '}
                {amountOfDiscount}
                $
              </span>
              {' '}
              , and we&apos;ll definitely consider it when paying
              for our employee&apos;s first month of work.
            </h3>

            <div className="ApproveTestimonials__testimonials">
              <img src={Testimonials1} alt="testimonial" className="ApproveTestimonials__testimonial1" />
              <img src={Testimonials2} alt="testimonial" className="ApproveTestimonials__testimonial2" />
              <img src={Testimonials3} alt="testimonial" className="ApproveTestimonials__testimonial3" />
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

      <div className="ApproveTestimonials__info">
        <div className="ApproveTestimonials__info--content-wrapper">
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

          <main className="ApproveTestimonials__main--mobile">
            <h3 className="ApproveTestimonials__title ApproveTestimonials__title--mobile">
              Thanks for choosing our company.
              {' '}
              <span className="ApproveTestimonials__title--high">
                Your discount is
                {' '}
                {amountOfDiscount}
                $
              </span>
              {' '}
              , and we&apos;ll definitely consider it when paying
              for our employee&apos;s first month of work.
            </h3>

            <Swiper
              className="ApproveTestimonials__slider"
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={13}
              slidesPerView={1.2}
            >
              <SwiperSlide>
                <div className="ApproveTestimonials__slide ApproveTestimonials__slide--1">
                  <p className="ApproveTestimonials__slide-paragraph">
                    We urgently needed an English speaking content creator for customer
                    projects and demo&apos;s. We were given 4 great matches very quickly and the
                    opportunity to interview them all online. Based on that we were quickly through
                    to the final selection phase and implementation.
                  </p>
                  <div className="ApproveTestimonials__name-wrapper">
                    <span className="ApproveTestimonials__name-wrapper--name">
                      Anders Willumsen
                    </span>
                    <span className="ApproveTestimonials__name-wrapper--position">
                      CEO at Eurekos Systems ApS
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ApproveTestimonials__slide ApproveTestimonials__slide--2">
                  <p className="ApproveTestimonials__slide-paragraph">
                    Remote Helpers have found us a great Content Manager for our company.
                    We are working with her for a year already. So far very happy.
                    We are happy with the content manager that they have found us.
                  </p>
                  <div className="ApproveTestimonials__name-wrapper">
                    <span className="ApproveTestimonials__name-wrapper--name">
                      Svitlana Sheina
                    </span>
                    <span className="ApproveTestimonials__name-wrapper--position">
                      Client
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ApproveTestimonials__slide ApproveTestimonials__slide--3">
                  <p className="ApproveTestimonials__slide-paragraph">
                    The fast reaction on our demands and the constructive an creative way
                    the employee worked with us. Excellent, nice communication and fast recruitment.
                  </p>
                  <div className="ApproveTestimonials__name-wrapper">
                    <span className="ApproveTestimonials__name-wrapper--name">
                      Andy Kulosa
                    </span>
                    <span className="ApproveTestimonials__name-wrapper--position">
                      CEO at Terranova Werbung
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </main>

        </div>

        <footer>
          <Link
            to="/incorrectSecondAnswer"
            className="ApproveTestimonials__navigate"
          >
            <div className="ApproveTestimonials__button ApproveTestimonials__button--blue">Share</div>
          </Link>
          <ul className="footer__social ApproveTestimonials__footer">
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
    </div>
  );
};
