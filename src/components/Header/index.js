import React from 'react';
import { connect } from 'react-redux';
import {
  getTranslate,
  getActiveLanguage,
  setActiveLanguage,
} from 'react-localize-redux';
import { Menu, Dropdown, Button, Icon } from 'antd';

import { setLanguage } from '../../services/language';
import './Header.css';
import Logo from './assets/Logo.svg';

const lang = {
  en: 'English',
  cn: '中文',
};

@connect(store => {
  return {
    translate: getTranslate(store.locale),
    currentLanguage: getActiveLanguage(store.locale).code,
    setActiveLanguage,
  };
})
export default class extends React.Component {
  constructor() {
    super();
    this.state = { language: true };
  }
  handleMenuClick = (e, language, status) => {
    const { dispatch, translate } = this.props;
    this.setState({
      language: status,
    });
    setLanguage(language, dispatch);
    dispatch(this.props.setActiveLanguage(language));
    console.log(e.target.key);
  };

  menu = (
    <Menu>
      <Menu.Item key="en">
        <Icon type="user" />
        English
      </Menu.Item>
      <Menu.Item key="cn">
        <Icon type="user" />
        中文
      </Menu.Item>
    </Menu>
  );

  render() {
    const { translate } = this.props;
    return (
      <div styleName="root">
        <div styleName="container">
          <a href="/" styleName="head-logo">
            <Logo />
          </a>
          <div styleName="head-Public-Chain-Ecology">
            {translate('header.slogan')}
          </div>

          {/* <ul styleName="head-nav">
            <li>
              <a href="#">菜单1</a>
            </li>
            <li styleName="head-padding" />
            <li styleName="head-user">
              <a href="#">登录</a>
            </li>
            <li styleName="head-user">
              <a href="#">注册</a>
            </li>
            <li>
              <Dropdown overlay={this.menu}>
                <Button style={{ marginLeft: 8 }}>
                  {lang[this.props.currentLanguage]} <Icon type="down" />
                </Button>
              </Dropdown>
            </li>
          </ul> */}
          {/* <ul styleName="head-nav">
            <li styleName="tab-language">
              [
              <span
                onClick={e => {
                  this.handleMenuClick(e, 'en', true);
                }}
                styleName={this.state.language == true ? '' : 'language '}
              >
                EN
              </span>
              |
              <span
                onClick={e => {
                  this.handleMenuClick(e, 'cn', false);
                }}
                styleName={this.state.language == false ? '' : 'language'}
              >
                CN
              </span>
              ]
            </li>
          </ul> */}
        </div>
      </div>
    );
  }
}
