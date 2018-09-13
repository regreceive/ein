import React from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux/lib/index';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from './Banner';
@connect(store => {
  return {
    translate: getTranslate(store.locale),
  };
})
export default class extends React.Component {
  // 这里请求一些当前页面所需的全局状态
  componentWillReceiveProps(nextProps) {}

  render() {
    const { translate } = this.props;
    return (
      <React.Fragment>
        <Header />
        <Banner />
        <Footer translate={translate} />
      </React.Fragment>
    );
  }
}
