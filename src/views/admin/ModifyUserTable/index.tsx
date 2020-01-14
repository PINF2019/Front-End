import React from 'react'
import { Layout, Row, Col, Card, Typography } from 'antd'
import { isAuthTokenExpired } from '@Utils/auth'
import { Redirect } from 'react-router-dom'
import ModifyUserTableForm from './Form'
import routes from '@Routes'
import Header from '@Components/Layout/Header'

const { Text } = Typography;

const ModifyUserTable = () => {
  /*if (!isAuthTokenExpired()) {
    return <Redirect to={routes.base} />
  }*/

  return (
    <Row justify="start" style={{ marginTop: '3%', marginLeft: '3%', overflow: 'auto' }}> 
      <Row className="layout" style={{ marginBottom: '2%' }}>
        <Card className = "card">
          <Text strong style={{ fontSize: "30px" }}>
            Modificar Usuario
          </Text>
        </Card>
      </Row>
      <Row type="flex" style={{ minHeight: '100vh', marginLeft: '3%', marginRight: '3%' }}>
      <Col span={24} style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Card> {/*Crea el cuadrado del login*/}
            <ModifyUserTableForm />
          </Card>
        </Col>
      </Row>
    </Row>
  )
}

export default ModifyUserTable
