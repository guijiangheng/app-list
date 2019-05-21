import { combineReducers } from 'redux';
import { ActionType } from './actions';

function filter(state = '', action) {
  switch (action.type) {
    case ActionType.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function topFreeApps(
  state = {
    loading: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case ActionType.REQUEST_TOP_FREE_APPS:
      return {
        ...state,
        loading: true
      };
    case ActionType.RECEIVE_TOP_FREE_APPS:
      return {
        loading: false,
        items: action.json.feed.entry
      };
    default:
      return state;
  }
}

export default combineReducers({ filter, topFreeApps });
