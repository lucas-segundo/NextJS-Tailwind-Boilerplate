import { render, screen } from '@testing-library/react'

import HeaderNav from '.'

describe('<HeaderNav />', () => {
  it('should render the heading', () => {
    const { container } = render(<HeaderNav />)

    expect(
      screen.getByRole('heading', { name: /HeaderNav/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
