import { Story, Meta } from '@storybook/react'
import Anchor, { AnchorProps } from '.'

export default {
  title: 'Elements/Anchor',
  component: Anchor
} as Meta

export const Default: Story<AnchorProps> = (args) => <Anchor {...args} />

Default.args = {
  children: 'Link'
}
