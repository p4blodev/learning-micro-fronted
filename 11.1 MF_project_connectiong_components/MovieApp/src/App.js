import React, { Suspense } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";

const HomePage = React.lazy(() => import("homepage/HomePage"));
const DetailsPage = React.lazy(() => import("detailspage/DetailsPage"));
const SeatSelectionPage = React.lazy(() =>
  import("seatselection/SeatSelection")
);

const App = () => {
  return (
    <Switch>
      <Suspense fallback={<p>Loading Home Page</p>}>
        <Route path="/details">
          <DetailsPage></DetailsPage>
        </Route>
        <Route path="/book">
          <SeatSelectionPage></SeatSelectionPage>
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Suspense>
    </Switch>
  );
};

export default App;
