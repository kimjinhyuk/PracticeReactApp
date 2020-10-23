import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './style.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Record from './components/pages/Record';
import SignUp from './components/pages/SignUp';
import Models from './components/pages/Models';
import Screening from './components/pages/Screening';
import Test from './components/pages/Test';
import Visualization from './components/pages/Visualization';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/record' component={Record} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/models' component={Models} />
        <Route path='/screening' component={Screening} />
        <Route path='/test' component={Test} />
        <Route path='/visualization' component={Visualization} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
