import React from 'react'
import { Layout as AntdLayout } from 'antd'
import Header from './Header'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <AntdLayout>
      <AntdLayout>
        <Header />
      </AntdLayout>
      <div>{children}</div>
    </AntdLayout>
  )
}

export default Layout
