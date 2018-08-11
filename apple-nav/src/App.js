import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import SubMac from './components/SubNav/SubMac';
import SubiPad from './components/SubNav/SubiPad';
import SubiPhone from './components/SubNav/SubiPhone';
import SubWatch from './components/SubNav/SubWatch';
import SubTV from './components/SubNav/SubTV';
import SubMusic from './components/SubNav/SubMusic';
import SubSupport from './components/SubNav/SubSupport';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={Navbar} />
        <Route path='/mac' component={SubMac} />
        <Route path='/ipad' component={SubiPad} />
        <Route path='/iphone' component={SubiPhone} />
        <Route path='/watch' component={SubWatch} />
        <Route path='/tv' component={SubTV} />
        <Route path='/music' component={SubMusic} />
        <Route path='/support' component={SubSupport} />
      </div>
    );
  }
}

export default App;
