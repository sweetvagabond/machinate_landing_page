import React from "react"
import logo from './assets/logo/logo.svg';

const AppHeader = () => {
  return (
    <header className="app-header">
      <ul id="nav" className="nav navbar-nav">
        <li><a href="#home"><img src={logo} className="app-logo" alt="logo" /></a></li>
        <li><a href="#about">How it Works</a></li>
        <li><a href="#features">Use Cases</a></li>
        <li><a href="#screenshot">About Machine Learning</a></li>
        <li><a href="#team">Integrate</a></li>
        {/* <span className="pull-right"> */}
          <li><a href="#team">Contact</a></li>
          <li><a href="#team">Login</a></li>
        {/* </span> */}
      </ul>
    </header>
  )
}

export default AppHeader
