import { combineReducers } from 'redux';
import { localizeReducer as locale } from 'react-localize-redux';
import user from './userReducer';

const appReducer = combineReducers({
  locale,
  user,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
