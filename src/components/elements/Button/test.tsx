import { render, screen } from '@testing-library/react'

import Button, { ButtonColorEnum } from '.'

describe('<Button />', () => {
  it('should render correctly', () => {
    const { container } = render(<Button>Button</Button>)

    expect(screen.getByRole('button', { name: /Button/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render like pill', () => {
    const { container } = render(<Button isPill>Test Button</Button>)

    expect(screen.getByRole('button', { name: /Test Button/i })).toHaveClass(
      'rounded-full'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render yellow', () => {
    const { container } = render(
      <Button color={ButtonColorEnum.YELLOW}>Test Button</Button>
    )

    expect(screen.getByRole('button', { name: /Test Button/i })).toHaveClass(
      ButtonColorEnum.YELLOW
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
