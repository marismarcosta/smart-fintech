import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import BusinessMenu from './pages/BusinessMenu';
import Planning from './pages/Planning';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={BusinessMenu} />
      <Route path="/planning" component={Planning} />
    </BrowserRouter>
  );
}

export default Routes;
