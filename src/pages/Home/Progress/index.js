import React from 'react';
import './Progress.css';

export default class Progress extends React.Component {
  componentDidMount = () => {};

  render() {
    return (
      <div styleName="Progress-box">
        <div styleName="line1" />
        <div styleName="step1">
          <div styleName="circle" />
        </div>
        <div styleName="line2" />
        <div styleName="step2">
          <div styleName="circle" />
        </div>
        <div styleName="line3" />
        <div styleName="step3">
          <div styleName="circle" />
        </div>
        <div styleName="line4" />
        <div styleName="s1TxtTop">3,000+ tx/s</div>
        <div styleName="s1TxtBot">I love web</div>
        <div styleName="s2TxtTop">5,000+ tx/s</div>
        <div styleName="s3TxtTop">10,000+ tx/s</div>
      </div>
    );
  }
}
