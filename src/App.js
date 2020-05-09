import React from 'react';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Symptoms from './Components/Symptoms/Symptoms';
import Prevention from './Components/Prevention/Prevention';
import Faq from './Components/Faq/Faq';
import StateDistrictData from './Components/StateDistrictData/StateDistrictData';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/symptoms'>
            <Symptoms />
          </Route>
          <Route exact path='/prevention'>
            <Prevention />
          </Route>
          <Route exact path='/faq'>
            <Faq />
          </Route>
          <Route
            exact
            path='/state/:state/:statecode'
            component={StateDistrictData}
          ></Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
