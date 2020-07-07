import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Routes path="/" component={Main} />
    </Switch>
  </BrowserRouter>
)

export default Routes;