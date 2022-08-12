import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Illustration from '../../images/Form/ill.png';
import Logo from '../../images/Logo.svg';
import FirstCompany from '../../images/FourthQuizPage/1.png';
import SecondCompany from '../../images/FourthQuizPage/2.png';
import ThirdCompany from '../../images/FourthQuizPage/3.png';
import FourthCompany from '../../images/FourthQuizPage/4.png';
import FivthCompany from '../../images/FourthQuizPage/5.png';
import SixthCompany from '../../images/FourthQuizPage/6.png';
// import Previous from '../../images/buttons/previous.svg';
// import PreviousBold from '../../images/buttons/previousBold.svg';
import '../Buttons/Buttons.scss';
import '../../utils/header.scss';
import '../../utils/footer.scss';
import '../../utils/star.scss';
import '../../utils/notification.scss';
import '../../utils/numberOfItem.scss';
import '../../utils/container.scss';
import './Form.scss';
import { RootState } from '../../toolkitRedux';

export const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [numberDirty, setNumberDirty] = useState(false);
  const [nameError, setNameError] = useState('Name can not be empty');
  const [numberError, setNumberError] = useState('Number can not be empty');
  const [formValid, setFormValid] = useState(false);

  const navigate = useNavigate();

  const amountOfAnswers = useSelector((state: RootState) => {
    return Number(state.toolkit.firstQuestion.isTrue)
    + Number(state.toolkit.secondQuestion.isTrue)
    + Number(state.toolkit.thirdQuestion.isTrue);
  });

  useEffect(() => {
    if (nameError || numberError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, numberError, number, name]);

  const blurHandler = (e: React.FocusEvent<HTMLElement>) => {
    switch ((e.target as HTMLInputElement).name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'number':
        setNumberDirty(true);
        break;

      default:
        setNameDirty(false);
        setNumberDirty(false);
    }
  };

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    const re = /^[a-zA-Z ]+$/;

    if (!re.test(String(e.target.value)) && e.target.value) {
      setNameError('Name should contain English letters');
    } else if (!e.target.value.trim()) {
      setNameError('Name can not be empty');
    } else {
      setNameError('');
    }
  };

  const numberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);

    if (e.target.value.length < 5 || e.target.value.length > 15) {
      setNumberError('Size should be more than 5 and less than 15');
    } else if (!e.target.value.trim()) {
      setNumberError('Number can not be empty');
    } else {
      setNumberError('');
    }
  };

  const submitHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert('Thank you. We will coonect with you in 30 minutes');
  };

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

            <form action="post" className="Form__form" onSubmit={submitHandler}>
              {(nameDirty && nameError) && (
                <div className="Form__error">{nameError}</div>
              )}
              <input
                name="name"
                onChange={(e) => nameHandler(e)}
                value={name}
                onBlur={(e) => blurHandler(e)}
                type="text"
                placeholder="Name"
                className="Form__input"
              />
              {(numberDirty && numberError) && (
                <div className="Form__error">{numberError}</div>
              )}
              <input
                name="number"
                onChange={(e) => numberHandler(e)}
                value={number}
                onBlur={(e) => blurHandler(e)}
                type="number"
                placeholder="Phone"
                className="Form__input"
              />

              {amountOfAnswers > 0 && (
                <Link
                  to="/approved"
                >
                  <input
                    disabled={!formValid}
                    type="submit"
                    className="Form__form-button"
                    value="Get a consultation now"
                  />
                </Link>
              )}

              {!amountOfAnswers && (
                <Link
                  to="/5discount"
                >
                  <input
                    disabled={!formValid}
                    type="submit"
                    className="Form__form-button"
                    value="Get a consultation now"
                  />
                </Link>
              )}
            </form>

            <div className="numberOfItem">
              <span className="numberOfItem--active">
                4
              </span>
              /4
            </div>

            <button
              className="buttons Form__arrow"
              type="button"
              onClick={() => navigate(-1)}
            >
              Previous
            </button>
            <button
              className="buttons Form__arrow--mobile"
              type="button"
              onClick={() => navigate(-1)}
            >
              Previous
            </button>
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
        <button type="button" className="footer__text Form__footer-button">
          I&apos;m curious, want to get a consultation
        </button>
      </div>

      <img
        src={Illustration}
        alt="illustration"
        className="Form__illustration--mobile"
      />
    </div>
  );
};
