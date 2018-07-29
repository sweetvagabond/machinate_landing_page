import React from "react"
import logo from './assets/logo/footer-logo.svg';

const AppFooter = () => {
  return (
    <footer className="app-footer">
      <img src={logo} className="app-footer-logo" alt="logo" />
      <p>
        Privacy Policy | Terms and Conditions | 2018 Machinate, Inc. All Rights Reserved.
      </p>
    </footer>
  )
}

export default AppFooter
