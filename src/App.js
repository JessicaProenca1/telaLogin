import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Carteira from './Components/Carteira';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/carteira" component={Carteira} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;