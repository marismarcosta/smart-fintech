import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import BusinessMenu from './pages/BusinessMenu';
import Planning from './pages/Planning';
import CreditPlanning from './pages/CreditPlanning';
import SupportingMaterials from './pages/SupportingMaterials';
import PlannigHome from './pages/PlanningHome';
import PlanDetails from './pages/PlanDetails';
import BlogLinker from './pages/BlogLinker';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={BusinessMenu} />
      <Route path="/planning" component={Planning} />
      <Route path="/financial/:id/:name" component={PlannigHome}/>
      <Route path="/details/:id/:name" component={PlanDetails}/>
      <Route path="/credit-planning" component={CreditPlanning} />
      <Route path="/supporting-materials" component={SupportingMaterials} />
      <Route path="/blog-linker" component={BlogLinker} />
    </BrowserRouter>
  );
}

export default Routes;
