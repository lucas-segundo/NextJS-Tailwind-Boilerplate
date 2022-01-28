import { render, screen } from '@testing-library/react'

import Base from '.'

describe('<Base />', () => {
  it('should render the heading', () => {
    render(<Base>children</Base>)

    expect(screen.getByText(/children/i)).toBeInTheDocument()
  })
})
