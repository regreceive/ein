import React from 'react';

import './Banner.css';

const Banner = props => {
  const { translate } = props;
  return (
    <div styleName="container">
      <p styleName="slogan">{translate('home.slogan')}</p>
    </div>
  );
};

export default Banner;
