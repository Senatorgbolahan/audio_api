import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch,} from "react-router-dom";

// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleAudio from './pages/SingleAudio'
import Error from './pages/Error'

// import navbar
import Navbar from './components/Navbar';


function App() {
  return (
    
    <Router>
        <Navbar/>
      <Switch>
      <Route exact path="/">
          <Home/>
      </Route>
      <Route path='/about'>
          <About/>
      </Route>
      <Route path='/audio/:id'>
          <SingleAudio/>
      </Route>
      <Route path='*'>
          <Error/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
