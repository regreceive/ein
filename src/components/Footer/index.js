import React from 'react';
import { Modal } from 'antd';
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
import star from './img/star.png';
import starMobile from './img/star-mobile.png';
import weChat from './img/wechat-mobile.png';
var flag = true;
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.judge = this.judge.bind(this);
    this.state = {
      visible: false,
      isImg: '',
    };
  }
  //判断当前设备是移动端还是PC端
  judge = e => {
    var userAgentInfo = navigator.userAgent;
    var Agents = [
      'Android',
      'iPhone',
      'SymbianOS',
      'Windows Phone',
      'iPad',
      'iPod',
    ];
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
  };
  showModal = modal => {
    this.setState({
      visible: true,
      isImg: modal,
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render() {
    const { translate } = this.props;
    this.judge();
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
                <a href={translate('footer.Telegram')} target="_blank">
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
                {flag && (
                  <a href="javascript:void(0)">
                    <img styleName="wechat-img" src={star} />
                    <ZSXQ />
                  </a>
                )}
                {!flag && (
                  <a
                    href="javascript:void(0)"
                    onClick={() => this.showModal('star')}
                  >
                    <ZSXQ />
                  </a>
                )}
              </li>
              <li>
                <a href="mailto:contact@echoin.io">
                  <Email />
                </a>
              </li>
              <li>
                {flag && (
                  <a href="javascript:void(0)">
                    <img styleName="wechat-img" src={qrc} />
                    <WeChat />
                  </a>
                )}
                {!flag && (
                  <a
                    href="javascript:void(0)"
                    onClick={() => this.showModal('wechat')}
                  >
                    <WeChat />
                  </a>
                )}
              </li>
            </ul>
            <p styleName="Copyright-Echoin-T">
              Copyright © Echoin Team 2014-2018 Echoin Contributors
              www.echoin.io
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
              Copyright © Echoin Team 2014-2018 Echoin Contributors
              www.echoin.io
            </p>
          </div>
        </div>
        <Modal
          visible={this.state.visible}
          footer={null}
          centered={true}
          closable={false}
          onCancel={this.handleCancel}
        >
          {this.state.isImg == 'star' ? (
            <img src={starMobile} />
          ) : (
            <img src={weChat} />
          )}
        </Modal>
      </div>
    );
  }
}
