import React from 'react'
import { Layout, Typography, Icon, Button } from 'antd'
import './index.less'
//import logo from '@Assets/logo.png'
// <img src={logo} />
const { Text } = Typography

const Header = () => {
  return (
    //autocorregido el ()
    <Layout.Header className="header">
      <Button type="link" href="./Home">
        Inicio
      </Button>
      <Button type="link" href="./Results">
        Resultados
      </Button>
      <Button type="link" href="./Census">
        Censos
      </Button>
      <Icon type="user" style={{ color: '#FFA500' }} />
    </Layout.Header>
  )
}

export default Header
