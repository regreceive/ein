import React from 'react';
import s from './Progress.css';

export default class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isover: false,
    };
  }
  componentDidMount = () => {
    var step1 = document.getElementById('step1');
    step1.addEventListener('webkitAnimationEnd', () => {
      this.setState({
        isover: true,
      });
    });
  };

  render() {
    const { isover } = this.state;
    return (
      <div styleName="Progress-box">
        <div styleName="line" />
        <div styleName="line1" />
        <div
          className={isover === false ? s.animation1 : s.animation2}
          id="step1"
        />
        <div styleName="step2" />
        <div styleName="step3" />
        <div styleName="s1TxtTop">
          <span>3,000+ tx/s</span>
        </div>
        {/* <div styleName="s1TxtBot">I love web</div> */}
        <div styleName="s2TxtTop">5,000+ tx/s</div>
        <div styleName="s3TxtTop">10,000+ tx/s</div>
      </div>
    );
  }
}
