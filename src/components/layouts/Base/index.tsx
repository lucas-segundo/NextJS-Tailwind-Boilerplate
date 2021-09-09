import Header from 'components/modules/Header'
import React from 'react'

export type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

export default Base
