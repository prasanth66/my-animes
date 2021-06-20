import { BrowserRouter as Router ,Route,Switch } from 'react-router-dom';
import React from 'react';

import AnimeDetailsPage from './pages/animeDetailsPage/animeDetailsPage';
import HomePage from './pages/homePage/homePage' ;
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/animeDetails">
             <AnimeDetailsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
