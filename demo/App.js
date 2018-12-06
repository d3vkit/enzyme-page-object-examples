import React from 'react';
import PropTypes from 'prop-types'
import Logo from './Logo'
import UserMenu from './UserMenu'

const propTypes = {
  name: PropTypes.string,
}

const defaultProps = {
  name: 'Guest',
}

const App = ({ name }) => (
  <div className="header">
    <Logo />
    <UserMenu name={name} />
  </div>
)

App.propTypes = propTypes
App.defaultProps = defaultProps

export default App
