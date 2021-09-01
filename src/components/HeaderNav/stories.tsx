import { Story, Meta } from '@storybook/react'
import HeaderNav, { HeaderNavProps } from '.'

export default {
  title: 'HeaderNav',
  component: HeaderNav
} as Meta

export const Default: Story<HeaderNavProps> = (args) => <HeaderNav {...args} />
