import React from 'react';
import throttle from 'lodash/throttle';

import './effects.css';

export default class extends React.Component {
  ref = React.createRef();

  throttled = throttle(({ clientX, clientY }) => {
    const el = this.ref.current;
    const radius = this.maskSize / 2;
    el.style.WebkitMaskPosition = `${clientX - radius}px ${clientY -
      radius +
      this.offsetY}px`;
    el.style.maskPosition = `${clientX - radius}px ${clientY - radius}px`;
  }, 100);

  offsetY = 0;
  viewWidth = 0;
  viewHeight = 0;
  maskSize = 1289;

  resizeThrottled = throttle(() => {
    this.viewWidth = this.ref.current.offsetWidth;
    this.viewHeight = this.ref.current.offsetHeight;
    this.maskSize = (this.viewWidth * 690) / 1920;

    this.ref.current.style.WebkitMaskSize = `${this.maskSize}px ${
      this.maskSize
    }px`;
    this.ref.current.style.maskSize = `${this.maskSize}px ${this.maskSize}px`;
  }, 500);

  scrollThrottled = throttle(() => {
    this.offsetY = document.documentElement.scrollTop;
  }, 500);

  componentDidMount() {
    this.ref.current.addEventListener('mousemove', this.throttled);
    // window.addEventListener('resize', this.resizeThrottled);
    window.addEventListener('scroll', this.scrollThrottled);
    // this.resizeThrottled();
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    this.ref.current.removeEventListener('mousemove', this.throttled);
    // window.removeEventListener('resize', this.resizeThrottled);
    window.removeEventListener('scroll', this.scrollThrottled);
  }

  render() {
    return <div ref={this.ref} styleName="spot" />;
  }
}
