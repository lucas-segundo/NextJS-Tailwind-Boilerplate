import { Story, Meta } from '@storybook/react'
import Box, { BoxProps } from '.'

export default {
  title: 'Elements/Box',
  component: Box,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<BoxProps> = (args) => <Box {...args} />
