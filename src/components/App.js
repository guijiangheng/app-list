import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopFreeApps, fetchtopGrossingApps, filterBy } from '../actions';
import AppList, { getAppInfo } from './AppList';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTopFreeApps());
    dispatch(fetchtopGrossingApps());
  }

  handleChange = event => {
    const { dispatch } = this.props;
    dispatch(filterBy(event.target.value));
  }

  render() {
    const { filter, topFreeApps, topGrossingApps } = this.props;
    return (
      <div className="app">
        <div className="app__search">
          <input
            className="app__search-input"
            value={filter}
            onChange={this.handleChange}
            placeholder="搜索"
          />
        </div>
        <AppList {...topGrossingApps} vertical/>
        <AppList {...topFreeApps} />
      </div>
    );
  }
}

function filterApp(app, filter) {
  const info = getAppInfo(app);
  if (info.title.indexOf(filter) !== -1) return true;
  if (info.category.indexOf(filter) !== -1) return true;
  return false;
}

export default connect(
  state => {
    const { filter, topFreeApps, topGrossingApps } = state;
    return {
      filter,
      topFreeApps: {
        loading: topFreeApps.loading,
        items: topFreeApps.items.filter(app => filterApp(app, filter))
      },
      topGrossingApps: {
        loading: topGrossingApps.loading,
        items: topGrossingApps.items.filter(app => filterApp(app, filter))
      }
    }
  }
)(App);
