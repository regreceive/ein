import React from 'react';

import './Banner.css';
import { Icon } from 'antd';
import Progress from '../Progress';
const Banner = props => {
  const { translate } = props;

  return (
    <div styleName="container">
      <div styleName="Coming-Soon">{translate('home.soon')}</div>
      <div styleName="Latest-Testnet-Trial">
        <p styleName="text-style-1">{translate('home.text-1')}</p>
        <h4 styleName="text-style-2" />
      </div>
      <Progress />
      <div styleName="No-of-Shards-256-N">
        {/* <ul>
          <li>{translate('home.li-1')}</li>
          <li>{translate('home.li-2')}</li>
          <li>{translate('home.li-3')}</li>
        </ul> */}
        <p>{translate('home.natework')}</p>
      </div>
      <div styleName="Rectangle">
        <input placeholder="Email" type="text" />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button styleName="Rectangle-3">{translate('home.button')}</button>
      </div>
    </div>
  );
};

export default Banner;
