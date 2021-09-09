import { HTMLAttributes } from 'react'

export type BoxProps = {
  children?: React.ReactNode
} & HTMLAttributes<HTMLDivElement>

const Box = ({ children = 'Box', ...props }: BoxProps) => (
  <div {...props} className={`rounded-lg shadow-lg ${props.className}`}>
    {children}
  </div>
)

export default Box
