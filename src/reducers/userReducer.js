const initState = (function() {
  return {
    subscribe: '',
  };
})();

const user = (state = initState, action) => {
  switch (action.type) {
    case 'USER.USER_DATA_COMPLETE': {
      const assets = action.payload;
      return { ...state, assets };
    }
    case 'USER.SUBSCRIBE': {
      return { ...state, subscribe: 'waiting' };
    }
    case 'USER.SUBSCRIBE_COMPLETE': {
      const { payload: subscribe } = action;
      return { ...state, subscribe };
    }
    default:
      return state;
  }
};

export default user;
