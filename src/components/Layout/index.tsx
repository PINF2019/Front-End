import { Layout as AntdLayout } from 'antd'
import React, { useState } from 'react'
import Header from './Header'
import './index.less'
import Sidebar from './Sidebar'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [collapse, setCollapse] = useState(true)
  return (
    <AntdLayout className="layout">
      <AntdLayout className="layout-2">
        <Header onClick={() => setCollapse(!collapse)} />
        <AntdLayout.Content className="content">
          <div className="children">{children}</div>
        </AntdLayout.Content>
      </AntdLayout>
      <Sidebar collapse={collapse} />
    </AntdLayout>
  )
}

export default Layout
