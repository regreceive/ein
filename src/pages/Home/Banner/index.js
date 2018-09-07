import React from 'react';

import './Banner.css';

import Progress from '../Progress';
import Spot from './effects/Spot';

const Banner = props => {
  const { translate } = props;
  let result = translate('home.text-1');
  let ycc = null;
  let ycc1 = null;
  if (result.indexOf('Missing translationId') == -1) {
    ycc = result;
    ycc1 = ycc.split('');
  }

  if (ycc1 == null) {
    return false;
  }
  return (
    <div styleName="root">
      <Spot />
      <div styleName="container">
        <div styleName="bg-font">{translate('home.soon')}</div>
        <div styleName="Latest-Testnet-Trial">
          <h4 styleName="text-style-1">
            {ycc1.map((item, i) => (
              <span
                styleName="aniSpan"
                style={{
                  animationDelay: i / 60 + 's',
                }}
                key={i}
              >
                {/\s/g.test(item) ? (
                  <div style={{ width: '16px', height: '3px' }} />
                ) : (
                  item
                )}
              </span>
            ))}
          </h4>
        </div>
        <div styleName="No-of-Shards-256-N">
          <ul styleName="company_name">
            <li>{translate('home.li-1')}</li>
            <li>{translate('home.li-2')}</li>
            <li>{translate('home.li-3')}</li>
          </ul>
          <p styleName="company_name">{translate('home.natework')}</p>
        </div>
        <div styleName="Rectangle">
          <input placeholder="Email" type="text" />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button styleName="Rectangle-3">{translate('home.button')}</button>
        </div>
        <div styleName="mobile-Rectangle">
          <input />
          <div styleName="btn">
            <span styleName="arrow" />
          </div>
        </div>
      </div>
      <Progress />
    </div>
  );
};

export default Banner;
