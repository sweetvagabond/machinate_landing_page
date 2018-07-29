import React, { Component } from 'react';
import './App.css';
import AppHeader from "./AppHeader.js";
import LandingPage from "./LandingPage.js";
import AppFooter from "./AppFooter.js";

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <LandingPage />
        <AppFooter />
      </div>
    );
  }
}

export default App;
