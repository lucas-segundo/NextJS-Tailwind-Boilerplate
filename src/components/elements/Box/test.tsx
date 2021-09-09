import { render, screen } from '@testing-library/react'

import Box from '.'

describe('<Box />', () => {
  it('should render correctly', () => {
    const { container } = render(<Box />)

    expect(screen.getByText(/Box/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
