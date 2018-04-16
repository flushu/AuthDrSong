import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Superbill from '../components/templates/superbill/app';
import PrepPage from '../components/PrepPage';

export default () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/' component={PrepPage} exact={true}/>
        <Route path="/superbill" component={Superbill} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);