import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage';
import TrailsPage from '../TrailsPage/TrailsPage';

import './App.css';

function App() {

  return (
    <Router>
      {/* <Switch> */}
        <Route 
          exact path="/"
          component={LandingPage}
        />
        <Route path="/user/:username"></Route>
        <Route path="/trails/:trailName"></Route>
        <Route 
          path="/trails" 
          component={TrailsPage}
        />
      {/* </Switch> */}
    </Router>
  );
}

export default App;
