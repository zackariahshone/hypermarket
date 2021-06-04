/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from '../../containers/HomePage';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Models from '../Models';
import TopNav from '../../components/TopNav';
import BrandBanners from '../../components/BrandBanners';
import brands from '../../bannerInfo.json';
// import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <Router>
    <div>
      <TopNav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/brandbanners"
          component={() => <BrandBanners brands={brands} />}
        />
        <Route exact path="/model/:id" component={Models} />
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
     
      {/* <GlobalStyle /> */}
    </div>
    </Router>

  );
}
