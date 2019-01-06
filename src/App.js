import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import HOC from './HOC/HOC';
import Navigation from './components/Navigation/Navigation';
import PricingTool from './containers/PricingTool/PricingTool';
import Rules from './containers/Rules/Rules';
import Reports from './containers/Reports/Reports';
import Auth from './containers/Auth/Auth';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <HOC>
          <Navigation />
          <Route exact path="/" component={PricingTool}/>
          <Route exact path="/rules-dashboard" component={Rules}/>
          <Route exact path="/reports" component={Reports}/>
          <Route exact path="/auth" component={Auth}/>
        </HOC>
      </BrowserRouter>
    );
  }
}

export default App;
