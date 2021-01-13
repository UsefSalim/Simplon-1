import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home'
import Service from './pages/Service'
import NotFound from './pages/NotFound'
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/" exact component={Home} />
          <Route path="/service" exact component={Service} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;