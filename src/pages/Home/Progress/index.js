import React from 'react';
import './Progress.css';

export default class Progress extends React.Component {
  componentDidMount = () => {};

  render() {
    return (
      <div styleName="Progress-box">
        <div styleName="line1" />
        <div styleName="step1" />
        <div styleName="line2" />
        <div styleName="step2" />
        <div styleName="line3" />
        <div styleName="step3" />
        <div styleName="line4" />
        <div styleName="s1TxtTop">
          <span>3,</span>
          <span>000+ tx/s</span>
        </div>
        {/* <div styleName="s1TxtBot">I love web</div> */}
        <div styleName="s2TxtTop">5,000+ tx/s</div>
        <div styleName="s3TxtTop">10,000+ tx/s</div>
      </div>
    );
  }
}
