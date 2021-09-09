import { render, screen } from '@testing-library/react'

import Box from '.'

describe('<Box />', () => {
  it('should render the heading', () => {
    const { container } = render(<Box />)

    expect(screen.getByRole('heading', { name: /Box/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
