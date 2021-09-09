import { render, screen } from '@testing-library/react'

import SectionHero from '.'

describe('<SectionHero />', () => {
  it('should render the heading', () => {
    const { container } = render(<SectionHero />)

    expect(screen.getByRole('heading', { name: /SectionHero/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
