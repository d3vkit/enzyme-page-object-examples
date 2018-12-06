import { ShallowUserMenuSection } from './pages/UserMenu.section'

describe('<UserMenu />', () => {
  let userMenu, props

  const newUserMenu = () => {
    userMenu = userMenu || new ShallowUserMenuSection(props)

    return userMenu
  }

  beforeEach(() => {
    userMenu = undefined
    props = {}
  })

  describe('rendering', () => {
    describe('when name is undefined', () => {
      it('uses a default name of Guest', () => {
        props.name = undefined
        const userMenu = newUserMenu()

        const results = userMenu.greeting

        expect(results).toBe('Welcome Guest')
      })
    })

    describe('when name is empty string', () => {
      it('uses a default name of Guest', () => {
        props.name = ''
        const userMenu = newUserMenu()

        const results = userMenu.greeting

        expect(results).toBe('Welcome Guest')
      })
    })

    describe('when name is space', () => {
      it('uses a default name of Guest', () => {
        props.name = '   '
        const userMenu = newUserMenu()

        const results = userMenu.greeting

        expect(results).toBe('Welcome Guest')
      })
    })

    describe('when name is given', () => {
      it('uses a default name of Guest', () => {
        props.name = 'Dean'
        const userMenu = newUserMenu()

        const results = userMenu.greeting

        expect(results).toBe('Welcome Dean')
      })
    })
  })
})
