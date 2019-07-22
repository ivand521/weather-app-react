import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Weather from '../components/Weather';
import About from '../components/About';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Weather} exact={true} />
      <Route path='/about' component={About} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter;