import { render, screen } from '@testing-library/react'

import Box from '.'

describe('<Box />', () => {
  it('should render correctly', () => {
    render(<Box />)

    expect(screen.getByText(/Box/i)).toBeInTheDocument()
  })
})
