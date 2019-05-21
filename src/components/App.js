import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopFreeApps } from '../actions';
import AppList from './AppList';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTopFreeApps());
  }

  render() {
    const { topFreeApps } = this.props;
    return (
      <div className="app">
        <AppList {...topFreeApps} />
      </div>
    );
  }
}

export default connect(
  state => state
)(App);
