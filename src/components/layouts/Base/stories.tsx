import { Story, Meta } from '@storybook/react'
import Base, { BaseProps } from '.'

export default {
  title: 'Base',
  component: Base
} as Meta

export const Default: Story<BaseProps> = (args) => <Base {...args} />
