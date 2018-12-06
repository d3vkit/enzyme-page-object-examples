import React from 'react'
import { Section } from 'enzyme-page-object'
import Logo from '../../Logo'

class LogoSection extends Section {
  get src() {
    return this.context.find('img').prop('src')
  }
}

class ShallowLogoSection extends LogoSection {
  constructor(props) {
    super({ type: 'shallow', component: <Logo {...props} /> })
  }
}

export { LogoSection as default, ShallowLogoSection }
