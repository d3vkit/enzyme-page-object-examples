import React from 'react'
import { ShallowLogoSection } from './pages/logo.section'

describe('rendering the logo', () => {
  it('renders with the src /my/logo.png', () => {
    const page = new ShallowLogoSection()

    const result = page.src

    expect(result).toBe('/my/logo.png')
  })
})
