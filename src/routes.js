import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import BusinessMenu from './pages/BusinessMenu';
import Planning from './pages/Planning';
import CreditPlanning from './pages/CreditPlanning'
import PlannigHome from './pages/PlanningHome';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={BusinessMenu} />
      <Route path="/planning" component={Planning} />
      <Route path="/financial" component={PlannigHome}/>
      
      <Route path="/credit-planning" component={CreditPlanning} />
    </BrowserRouter>
  );
}

export default Routes;
