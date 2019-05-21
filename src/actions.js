export const ActionType = {
  SET_FILTER: Symbol('SET_FILTER'),
  REQUEST_TOP_FREE_APPS: Symbol('REQUEST_TOP_FREE_APPS'),
  RECEIVE_TOP_FREE_APPS: Symbol('RECEIVE_TOP_FREE_APPS'),
  REQUEST_TOP_GROSSING_APPS: Symbol('REQUEST_TOP_GROSSING_APPS'),
  RECEIVE_TOP_GROSSING_APPS: Symbol('RECEIVE_TOP_GROSSING_APPS')
};

export function filterBy(filter) {
  return {
    type: ActionType.SET_FILTER,
    filter: filter
  };
}

export function requestTopFreeApps() {
  return {
    type: ActionType.REQUEST_TOP_FREE_APPS
  };
}

export function receiveTopFreeApps(json) {
  return {
    type: ActionType.RECEIVE_TOP_FREE_APPS,
    json
  };
}

export function fetchTopFreeApps() {
  return dispatch => {
    dispatch(requestTopFreeApps());
    return fetch('http://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json')
      .then(res => res.json())
      .then(json => dispatch(receiveTopFreeApps(json)));
  }
}

export function requestTopGrossingApps() {
  return {
    type: ActionType.REQUEST_TOP_GROSSING_APPS
  };
}


export function receiveTopGrossingApps(json) {
  return {
    type: ActionType.RECEIVE_TOP_GROSSING_APPS,
    json
  };
}

export function fetchtopGrossingApps() {
  return dispatch => {
    dispatch(requestTopGrossingApps());
    return fetch('https://itunes.apple.com/hk/rss/topgrossingapplications/limit=10/json')
      .then(res => res.json())
      .then(json => dispatch(receiveTopGrossingApps(json)));
  }
}
