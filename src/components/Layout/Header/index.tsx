import React from 'react'
import { Row, Col, Layout, Typography, Button, Avatar } from 'antd'
import './index.less'
import logo from '@Assets/logo.png'
import Sidebar from '../Sidebar'
import { statement } from '@babel/template'
const { Text } = Typography

const Header = (props: { onClick: () => void }) => {
  return (
    //autocorregido el ()
    <Layout.Header className="header">
      <Row
        style={{
          display: 'flex',
          width: '100%'
        }}>
        <Col style={{ marginRight: 'auto' }}>
          <img src={logo} width="150px"></img>
        </Col>
        <Col style={{ marginLeft: 'auto' }}>
          <Button type="link" href="./">
            <Text strong>Inicio</Text>
          </Button>
          <Button type="link" href="./Results">
            <Text strong>Resultados</Text>
          </Button>
          <Button type="link" href="./Census">
            <Text strong>Censos</Text>
          </Button>
          <Button
            type="primary"
            shape="circle"
            icon="user"
            size={'small'}
            style={{ marginLeft: '10px' }}
            onClick={props.onClick}
          />
        </Col>
      </Row>
    </Layout.Header>
  )
}

export default Header
