import React from 'react'
import { MountedPage } from 'enzyme-page-object'
import LogoSection from './Logo.section'
import UserMenuSection from './UserMenu.section'
import App from '../../App'
import UserMenu from '../../UserMenu'
import Logo from '../../Logo'

class AppPage extends MountedPage {
  constructor(props) {
    super(<App {...props} />)
  }

  get userMenu() {
    return new UserMenuSection({ page: this.header.find(UserMenu) })
  }

  get logo() {
    return new LogoSection({ page: this.header.find(Logo) })
  }

  get header() {
    return this.find('.header')
  }
}

export default AppPage
