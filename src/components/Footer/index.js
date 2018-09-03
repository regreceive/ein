import React from 'react';

import './Footer.css';
import { Icon } from 'antd';
import MessageSvg from './Icon/weibo.svg';
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
              <a href="" />
            </li>
            <li>
              <a href="" />2
            </li>
            <li>
              <a href="" />1
            </li>
            <li>
              <a href="" />2
            </li>
            <li>
              <a href="" />4
            </li>
            <li>
              <a href="" />3
            </li>
            <li>
              <a href="" />6
              <svg className="icon">
                <use xlinkHref="http://www.w3.org/1999/xlink" />
              </svg>
            </li>
            <li>
              <a href="" />5
            </li>
            <li>
              <a href="" />3
            </li>
            <li>
              <a href="" />2
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
