import AppPage from './pages/App.page'

describe('<App />', () => {
  let appPage, props

  const newAppPage = () => {
    appPage = appPage || new AppPage(props)

    return appPage
  }

  beforeEach(() => {
    appPage = undefined
    props = { name: undefined }
  })

  describe('rendering', () => {
    it('loads the logo', () => {
      const page = newAppPage()
      const result = page.logo.length

      expect(result).toBe(1)
    })

    it('loads the user menu', () => {
      const page = newAppPage()
      const result = page.userMenu.context.element.length

      expect(result).toBe(1)
    })

    it('passes the name to user menu', () => {
      props.name = 'Dean'
      const page = newAppPage()
      const userMenu = page.userMenu

      const result = userMenu.context.prop('name')

      expect(result).toEqual('Dean')
    })
  })
})
