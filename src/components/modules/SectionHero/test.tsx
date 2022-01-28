import { render, screen } from '@testing-library/react'

import SectionHero from '.'

describe('<SectionHero />', () => {
  it('should render the heading', () => {
    render(<SectionHero />)

    expect(
      screen.getByRole('heading', { name: /SectionHero/i })
    ).toBeInTheDocument()
  })
})
