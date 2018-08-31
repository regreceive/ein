import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import './LayoutView.css';

const LayoutView = props => {
  let defaultPath = '/abc';
  if (props.currentLanguage !== 'en') {
    defaultPath += '?lang=' + props.currentLanguage;
  }

  return (
    <ConnectedRouter history={props.history}>
      <div>
        <section id="content">
          <Switch>
            <Route exact path="/" component={props.home} />
            <Redirect to={defaultPath} />
          </Switch>
        </section>
      </div>
    </ConnectedRouter>
  );
};

export default LayoutView;
