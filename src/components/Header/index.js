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
import logo from './assets/Logo.svg';

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
  handleMenuClick = e => {
    const { dispatch, translate } = this.props;
    setLanguage(e.key, dispatch);
    dispatch(this.props.setActiveLanguage(e.key));
  };

  menu = (
    <Menu onClick={this.handleMenuClick}>
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
            <img src={logo} alt="" />
          </a>
          <div styleName="head-Public-Chain-Ecology">
            {translate('home.slogan')}
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
        </div>
      </div>
    );
  }
}
