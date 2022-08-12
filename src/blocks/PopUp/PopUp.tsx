/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './PopUp.scss';
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  ViberIcon,
  WhatsappIcon,
} from 'react-share';

type Props = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PopUp: React.FC<Props> = ({ active, setActive }) => {
  const url = 'https://testfive.rh-s.com/';

  return (
    <div className={active ? 'modal modal--active' : 'modal'} onClick={() => setActive(false)}>
      <div
        className={active ? 'modal__content modal__content--active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        <EmailShareButton url={url}>
          <EmailIcon />
        </EmailShareButton>
        <FacebookShareButton url={url}>
          <FacebookIcon />
        </FacebookShareButton>
        <InstapaperShareButton url={url}>
          <InstapaperIcon />
        </InstapaperShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon />
        </LinkedinShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon />
        </TelegramShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon />
        </TwitterShareButton>
        <ViberShareButton url={url}>
          <ViberIcon />
        </ViberShareButton>
        <WhatsappShareButton url={url}>
          <WhatsappIcon />
        </WhatsappShareButton>
      </div>
    </div>
  );
};
