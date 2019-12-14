import React, { useState } from 'react'
import { Layout as AntdLayout } from 'antd'
import Header from './Header'
import Sidebar from './Sidebar'
import wallpaper from '@Assets/Wallpaper.png'
import './index.less'
// style={{backgroundImage: 'url(${wallpaper})'}}
type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [collapse, setCollapse] = useState(true)
  return (
    <AntdLayout className="layout">
      <Sidebar collapse={collapse} />
      <AntdLayout className="layout-2">
        <Header onClick={() => setCollapse(!collapse)} />
        <AntdLayout.Content className="content">
          <div className="children">{children}</div>
        </AntdLayout.Content>
      </AntdLayout>
    </AntdLayout>
  )
}

export default Layout
