import React from 'react';

import './Footer.css';
const imgs = [
  require('./img/what.png'),
  require('./img/m.png'),
  require('./img/ti.png'),
  require('./img/face.png'),
  require('./img/fei.png'),
  require('./img/Bitmap.png'),
  require('./img/weibo.png'),
  require('./img/zsxq.png'),
  require('./img/Email.png'),
  require('./img/weichat.png'),
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
        {/* <div styleName="Private-Policy">
          <ul>
            <li>Private Policy</li>
            <li>contact@echoin.io</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <p styleName="Copyright">
          Copyright © Echoin Team 2014-2018 Echoin Contributors www.echoin.io
        </p> */}
      </div>
    </div>
  );
};

export default Footer;
