import { render, screen } from '@testing-library/react'

import Anchor from '.'

describe('<Anchor />', () => {
  it('should render the heading', () => {
    const { container } = render(<Anchor>Test</Anchor>)

    expect(screen.getByRole('link', { name: /Test/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
