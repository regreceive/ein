import React from 'react';
import './Footer.css';
const imgs = [
  require('./svg/Discord.svg'),
  require('./svg/Medium.svg'),
  require('./svg/Twitter.svg'),
  require('./svg/Facebook.svg'),
  require('./svg/Telegram.svg'),
  require('./svg/BitcoinTalk.svg'),
  require('./svg/Weibo.svg'),
  require('./svg/ZSXQ.svg'),
  require('./svg/Email.svg'),
  require('./svg/WeChat.svg'),
];
const Footer = () => {
  return (
    <div styleName="root">
      <div styleName="container">
        <div styleName="bottom-left">
          <ul>
            <li>Private Policy</li>
            <li>Terms of Use</li>
            <li>contact@echoin.io</li>
          </ul>
        </div>
        <div styleName="bottom-right">
          <ul>
            <li>
              <a href="">
                <img alt="" src={imgs[0]} />
              </a>
            </li>
            <li>
              <a href="">
                <img alt="" src={imgs[1]} />
              </a>
            </li>
            <li>
              <a href="">
                <img alt="" src={imgs[2]} />
              </a>
            </li>
            <li>
              <a href="">
                <img alt="" src={imgs[3]} />
              </a>
            </li>
            <li>
              <a href="">
                <img alt="" src={imgs[4]} />
              </a>
            </li>
            <li>
              <a href="">
                <img alt="" src={imgs[5]} />
              </a>
            </li>
            <li>
              <a href="">
                <img alt="" src={imgs[6]} />
              </a>
            </li>
            <li>
              <a href="">
                <img alt="" src={imgs[7]} />
              </a>
            </li>
            <li>
              <a href="">
                <img alt="" src={imgs[8]} />
              </a>
            </li>
            <li>
              <a href="">
                <img alt="" src={imgs[9]} />
              </a>
            </li>
          </ul>
          <p styleName="Copyright-Echoin-T">
            Copyright © Echoin Team 2014-2018 Echoin Contributors www.echoin.io
          </p>
        </div>
        <div>
          <ul styleName="mobile-bottom">
            <li styleName="Private-Policy-mobile">Private Policy</li>
            <li styleName="Private-Policy-mobile">contact@echoin.io</li>
            <li styleName="Private-Policy-mobile">Terms of Use</li>
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
