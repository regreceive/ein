import React from 'react';
import './Footer.css';
import Medium from './svg/Medium.svg';
import Twitter from './svg/Twitter.svg';
import Facebook from './svg/Facebook.svg';
import Telegram from './svg/Telegram.svg';
import BitcoinTalk from './svg/BitcoinTalk.svg';
import Weibo from './svg/Weibo.svg';
import ZSXQ from './svg/ZSXQ.svg';
import Email from './svg/Email.svg';
import WeChat from './svg/WeChat.svg';
import qrc from './img/wechat.png';
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
              <a href="https://medium.com/@echo_realm" target="_blank">
                <Medium />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Echoin_io" target="_blank">
                <Twitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Echoin-199615797563357/"
                target="_blank"
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a href="https://t.me/EchoinEN" target="_blank">
                <Telegram />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <BitcoinTalk />
              </a>
            </li>
            <li>
              <a href="https://weibo.com/u/6481472691" target="_blank">
                <Weibo />
              </a>
            </li>
            <li>
              <a href="">
                <ZSXQ />
              </a>
            </li>
            <li>
              <a href="mailto:contact@echoin.io">
                <Email />
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                {/* <img styleName="wechat-img" src={qrc} /> */}
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
