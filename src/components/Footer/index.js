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
        <ul styleName="bottom-left">
          <li>Private Policy</li>
          <li>Terms of Use</li>
          <li>contact@echoin.io</li>
        </ul>
        <ul styleName="bottom-right">
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
          <p styleName="Copyright-Echoin-T">
            Copyright © Echoin Team 2014-2018 Echoin Contributors www.echoin.io
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
