import React from 'react'
import { Section } from 'enzyme-page-object'
import UserMenu from '../../UserMenu'

// This can be used when there is an existing page
class UserMenuSection extends Section {
  get greeting() {
    return this.context.find('span#greeting').text()
  }
}

// This can be used when there is no page created
class ShallowUserMenuSection extends UserMenuSection {
  constructor(props) {
    super({ type: 'shallow', component: <UserMenu {...props} /> })
  }
}

export { UserMenuSection as default, ShallowUserMenuSection }
