import React from 'react'
import { Section } from 'enzyme-page-object'
import Logo from '../../Logo'

class LogoSection extends Section {
  get src() {
    return this.context.find('img').prop('src')
  }

  // 13: Section should always return a found element
  // The logo section here is unfortunately not making it easy to test the length of returned elements
  // https://trello.com/c/1uzkBvuQ/13-section-should-always-return-a-foundelement
  get length() {
    return this.context.length
  }
}

class ShallowLogoSection extends LogoSection {
  constructor(props) {
    super({ type: 'shallow', component: <Logo {...props} /> })
  }
}

export { LogoSection as default, ShallowLogoSection }
