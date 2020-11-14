import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import BusinessMenu from "./pages/BusinessMenu";
import Planning from "./pages/Planning";
import CreditPlanning from "./pages/CreditPlanning";
import SupportingMaterials from "./pages/SupportingMaterials";
import PlannigHome from "./pages/PlanningHome";
import PlanDetails from "./pages/PlanDetails";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={BusinessMenu} />
      <Route path="/planning" component={Planning} />
      <Route path="/planning-options" component={PlannigHome} />
      <Route path="/planning-details" component={PlanDetails} />

      <Route path="/planning-credit" component={CreditPlanning} />
      <Route path="/supporting-materials" component={SupportingMaterials} />
    </BrowserRouter>
  );
}

export default Routes;
