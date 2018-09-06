import React from 'react';
import throttle from 'lodash/throttle';

import './effects.css';

export default class extends React.Component {
  state = {
    width: 0,
  };

  throttled = throttle(() => {
    this.setState({ width: this.props.target.offsetLeft });
  }, 500);

  componentDidMount() {
    window.addEventListener('resize', this.throttled);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.target.offsetLeft !== this.state.width) {
      this.setState({ width: nextProps.target.offsetLeft });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.throttled);
  }

  render() {
    return (
      <svg styleName="time-line">
        <defs>
          <linearGradient x2="0" y2="0" x1="100%" y1="0" id="svg_2">
            <stop stopColor="#a5fecb" offset="0" />
            <stop stopColor="#20bdff" offset="42%" />
            <stop stopColor="#1a29ff" offset="100%" />
          </linearGradient>
        </defs>
        <rect styleName="line" />
        <rect
          styleName="rect"
          style={{ width: this.state.width + 10 }}
          stroke="url(#svg_2)"
        />
      </svg>
    );
  }
}
