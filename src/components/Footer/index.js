import React from 'react';

import './Footer.css';
const imgs = [
  require('./img/Email.png'),
  require('./img/Bitmap.png'),
  require('./img/zsxq.png'),
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
                <img alt="" src={imgs[1]} />
              </a>
            </li>
            <li>
              <a href="">
                <img alt="" src={imgs[1]} />
              </a>
            </li>
            <li>
              <a href="">
                <img alt="" src={imgs[1]} />
              </a>
            </li>
            <li>
              <a href="">
                <img alt="" src={imgs[1]} />
              </a>
            </li>
            <li>
              <a href="">
                <img alt="" src={imgs[1]} />
              </a>
            </li>
            <li>
              <a href="">
                <img alt="" src={imgs[1]} />
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
                <img alt="" src={imgs[0]} />
              </a>
            </li>
            <li>
              <a href="">
                <img alt="" src={imgs[1]} />
              </a>
            </li>
          </ul>
          <p styleName="Copyright-Echoin-T">
            Copyright © Echoin Team 2014-2018 Echoin Contributors www.echoin.io
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
