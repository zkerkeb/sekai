import React from 'react'
import PropTypes from 'prop-types'

import logo from '../../assets/logo.svg';
import './index.css'


const Header = (props) => {
    return(
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
        {props.label}
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
    )
}

Header.propTypes = {
  label: PropTypes.string
}

export default Header