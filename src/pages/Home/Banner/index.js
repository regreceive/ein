import React from 'react';
import { connect } from 'react-redux';

import { subscribe as actionSubscribe } from '../../../actions/userActions';
import Progress from '../Progress';
import Spot from './effects/Spot';
import { isEmail } from '../../../utils/common';

import './Banner.css';
import { getTranslate } from 'react-localize-redux/lib/index';

let fristAnimation = 1;

@connect(state => {
  return {
    translate: getTranslate(state.locale),
    subscribe: state.user.subscribe,
  };
})
export default class extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.inputMRef = React.createRef();
  }

  subscribeHandle = device => event => {
    if (this.props.subscribeStatus === 'waiting') {
      return;
    }

    let el;
    if (device === 'pc') {
      el = this.inputRef.current;
    } else {
      el = this.inputMRef.current;
    }
    const email = el.value;

    if (isEmail(email)) {
      this.props.dispatch(actionSubscribe(email));
    }
  };

  render() {
    console.log(111);
    const { translate, subscribe } = this.props;
    let result = translate('home.text-1');
    let testnet = null;
    let testnet1 = null;
    if (result.indexOf('Missing translationId') === -1) {
      testnet = result;
      testnet1 = testnet.split('');
      fristAnimation++;
    }
    return (
      <div styleName="root">
        <Spot />
        <div styleName="container">
          <div styleName="bg-font">{translate('home.soon')}</div>
          <div styleName="Latest-Testnet-Trial">
            <h4 styleName="text-style-1">
              {testnet1 &&
                fristAnimation === 2 &&
                testnet1.map((item, i) => (
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
              {testnet1 &&
                fristAnimation > 2 &&
                testnet1.map((item, i) => (
                  <span
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
            <ul>
              <li>{translate('home.li-1')}</li>
              {/* <li>{translate('home.li-2')}</li>
              <li>{translate('home.li-3')}</li> */}
            </ul>
            {/* <div styleName="text1">
              {translate('home.natework').substring(
                0,
                translate('home.natework').indexOf('/') + 1,
              )}
            </div>
            <div>
              {translate('home.natework').substring(
                translate('home.natework').indexOf('/') + 1,
              )}
            </div> */}
          </div>
          <div styleName="Rectangle">
            <input placeholder="Email" type="text" ref={this.inputRef} />
            <button
              styleName="Rectangle-3"
              onClick={this.subscribeHandle('pc')}
            >
              {translate('home.button')}
            </button>
            {subscribe.status === 'ok' && (
              <em styleName="response">
                {translate('home.subscribe_response')}
              </em>
            )}
          </div>
          <div styleName="mobile-Rectangle">
            <input
              placeholder="Subscribe for Updates"
              type="text"
              ref={this.inputMRef}
            />
            <div styleName="btn" onClick={this.subscribeHandle('mobile')}>
              <span styleName="arrow" />
            </div>
            {subscribe.status === 'ok' && (
              <em styleName="response">
                {translate('home.subscribe_response')}
              </em>
            )}
          </div>
        </div>
        <Progress />
      </div>
    );
  }
}
