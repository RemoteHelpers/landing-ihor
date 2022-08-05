import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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

type Props = {
  answer: boolean,
};

export const ApproveTestimonials: React.FC<Props> = ({ answer }) => {
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
                Your discount is 15$
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
                Your discount is 15$
              </span>
              {' '}
              , and we&apos;ll definitely consider it when paying
              for our employee&apos;s first month of work.
            </h3>

            <Swiper
              slidesPerView={1}
            >
              <SwiperSlide>
                Slide1
              </SwiperSlide>
              <SwiperSlide>
                Slide2
              </SwiperSlide>
              <SwiperSlide>
                Slide3
              </SwiperSlide>
            </Swiper>
          </main>
        </div>

        <footer>
          <button type="button" className="footer__text footer__button">
            I&apos;m curious, want to get a consultation
          </button>
        </footer>
      </div>

      {answer && (
        <div className="star star--true"></div>
      )}

      {!answer && (
        <div className="star star--false"></div>
      )}
    </div>
  );
};
