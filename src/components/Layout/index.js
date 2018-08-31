import React from 'react';
import { connect } from 'react-redux';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';

import Home from '../../pages/Home/';

import history from '../../history';
import { changeLanguage } from '../../actions/globalActions';
import LayoutView from './LayoutView';

import Language from 'lang/index';

@connect(store => {
  return {
    translate: getTranslate(store.locale),
    locale: store.locale,
    currentLanguage: getActiveLanguage(store.locale).code,
  };
})
export default class extends React.Component {
  setActiveLanguage = language => {
    this.props.dispatch(
      changeLanguage(this.props.ethereumNode, language, this.props.locale),
    );
  };

  render() {
    return (
      <LayoutView
        history={history}
        home={Home}
        supportedLanguages={Language.supportLanguage}
        setActiveLanguage={this.setActiveLanguage}
        currentLanguage={this.props.currentLanguage}
      />
    );
  }
}
