import { render, screen } from '@testing-library/react'

import Button, { ButtonColorEnum } from '.'

describe('<Button />', () => {
  it('should render correctly', () => {
    render(<Button>Button</Button>)

    expect(screen.getByRole('button', { name: /Button/i })).toBeInTheDocument()
  })

  it('should render like pill', () => {
    render(<Button isPill>Test Button</Button>)

    expect(screen.getByRole('button', { name: /Test Button/i })).toHaveClass(
      'rounded-full'
    )
  })

  it('should render yellow', () => {
    render(<Button color={ButtonColorEnum.YELLOW}>Test Button</Button>)

    expect(screen.getByRole('button', { name: /Test Button/i })).toHaveClass(
      ButtonColorEnum.YELLOW
    )
  })
})
