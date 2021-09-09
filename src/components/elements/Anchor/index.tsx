import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'

export type AnchorProps = {
  children: React.ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

const Anchor = ({ children, ...props }: AnchorProps) => (
  <Link href={props.href || '#'}>
    <a {...props}>{children}</a>
  </Link>
)

export default Anchor
