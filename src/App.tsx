import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppProps } from './Props';
import { AppState } from './States';
import {withRouter} from 'react-router-dom';
import {getHumans} from './api';

class App extends React.Component<AppProps, AppState> {

  state: AppState={
    human : []
  }

  componentDidMount(){
    getHumans(this);
  }

  render(){
    return (
      <div className="App">
        {this.state.human.map((item,index)=><p>{index}|{item.id}</p>)}
      </div>
    );
  }
}

export default withRouter(App);
