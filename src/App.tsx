import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppProps } from './Props';
import { AppState } from './States';
import {withRouter} from 'react-router-dom';
import {getHumans} from './api';
import {Switch, Route} from 'react-router-dom';
import Home from './home';

class App extends React.Component<AppProps, AppState> {

  state: AppState={
    human : []
  }

  render(){
    return (
      <Switch>
        <Route component={Home}></Route>
      </Switch>
    );
  }
}

export default withRouter(App);
