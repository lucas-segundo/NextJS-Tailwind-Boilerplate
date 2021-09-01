import HeaderNav from 'components/HeaderNav'
import { ReactNode } from 'react'

type IMainProps = {
  meta: ReactNode
  children: ReactNode
}

const Main = ({ children, meta }: IMainProps) => (
  <>
    {meta}
    <HeaderNav />
    {children}
  </>
)

export { Main }
