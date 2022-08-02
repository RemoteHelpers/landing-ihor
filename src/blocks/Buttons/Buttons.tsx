import React from 'react';
import { Link } from 'react-router-dom';
import Previous from '../../images/buttons/previous.svg';
import Next from '../../images/buttons/next.svg';
import PreviousBold from '../../images/buttons/previousBold.svg';
import NextBold from '../../images/buttons/nextBold.svg';
import './Buttons.scss';

type Props = {
  previousUrl: string;
  nextUrl: string;
};

export const Buttons: React.FC<Props> = ({
  previousUrl,
  nextUrl,
}) => {
  return (
    <>
      <div className="buttons">
        <Link
          className="buttons__previous"
          to={previousUrl}
        >
          <img className="buttons--mobile" src={Previous} alt="arrow left" />
          Previous
        </Link>

        <Link
          className="buttons__next"
          to={nextUrl}
        >
          Next
          <img className="buttons--mobile" src={Next} alt="arrow right" />
        </Link>
      </div>
    </>
  );
};

export const ButtonsDesktop: React.FC<Props> = ({
  previousUrl,
  nextUrl,
}) => {
  return (
    <>
      <div className="buttons">
        <Link
          className="buttons__previous"
          to={previousUrl}
        >
          <img className="buttons--desktop" src={PreviousBold} alt="arrow left" />
          Previous
        </Link>

        <Link
          className="buttons__next"
          to={nextUrl}
        >
          Next
          <img className="buttons--desktop" src={NextBold} alt="arrow right" />
        </Link>
      </div>
    </>
  );
};
