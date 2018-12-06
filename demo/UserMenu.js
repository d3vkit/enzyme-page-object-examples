import React from 'react'
import PropTypes from 'prop-types'

const defaultName = 'Guest'

const propTypes = {
  name: PropTypes.string,
}

const defaultProps = {
  name: defaultName
}

const UserMenu = ({ name }) => {
  if (name.trim() === '') {
    name = defaultName
  }

  return (
    <span id="greeting">Welcome {name}</span>
  )
}

UserMenu.propTypes = propTypes
UserMenu.defaultProps = defaultProps

export default UserMenu
