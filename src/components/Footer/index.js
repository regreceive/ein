import React from 'react';
import './Footer.css';
import Discord from './svg/Discord.svg';
import Medium from './svg/Medium.svg';
import Twitter from './svg/Twitter.svg';
import Facebook from './svg/Facebook.svg';
import Telegram from './svg/Telegram.svg';
import BitcoinTalk from './svg/BitcoinTalk.svg';
import Weibo from './svg/Weibo.svg';
import ZSXQ from './svg/ZSXQ.svg';
import Email from './svg/Email.svg';
import WeChat from './svg/WeChat.svg';
const Footer = props => {
  const { translate } = props;
  return (
    <div styleName="root">
      <div styleName="container">
        <div styleName="bottom-left">
          <ul>
            <li>{translate('footer.li-1')}</li>
            <li>{translate('footer.li-2')}</li>
            <li>{translate('footer.li-3')}</li>
          </ul>
        </div>
        <div styleName="bottom-right">
          <ul>
            <li>
              <a href="">
                <Discord />
              </a>
            </li>
            <li>
              <a href="">
                <Medium />
              </a>
            </li>
            <li>
              <a href="">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="">
                <Telegram />
              </a>
            </li>
            <li>
              <a href="">
                <BitcoinTalk />
              </a>
            </li>
            <li>
              <a href="">
                <Weibo />
              </a>
            </li>
            <li>
              <a href="">
                <ZSXQ />
              </a>
            </li>
            <li>
              <a href="">
                <Email />
              </a>
            </li>
            <li>
              <a href="">
                <WeChat />
              </a>
            </li>
          </ul>
          <p styleName="Copyright-Echoin-T">
            Copyright © Echoin Team 2014-2018 Echoin Contributors www.echoin.io
          </p>
        </div>
        <div>
          <ul styleName="mobile-bottom">
            <li styleName="Private-Policy-mobile">
              {translate('footer.li-1')}
            </li>
            <li styleName="Private-Policy-mobile">
              {translate('footer.li-3')}
            </li>
            <li styleName="Private-Policy-mobile">
              {translate('footer.li-2')}
            </li>
          </ul>
          <p styleName="Copyright-Echoin-T-mobile">
            Copyright © Echoin Team 2014-2018 Echoin Contributors www.echoin.io
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
