import React from 'react'
import { Layout, Row, Col, Card, Typography } from 'antd'
import { isAuthTokenExpired } from '@Utils/auth'
import { Redirect } from 'react-router-dom'
import DeleteUserTableForm from './Form'
import routes from '@Routes'
import Header from '@Components/Layout/Header'

const { Text } = Typography;

const DeleteUserTable = () => {
  
  return (
    <Row justify="start" style={{ marginTop: '3%', marginLeft: '3%' }}>
      <Row className="layout" style={{ marginBottom: '2%' }}>
        <Card className = "card">
          <Text strong style={{ fontSize: "30px" }}>
            Borrar Usuario
          </Text>
        </Card>
      </Row>
      <Row type="flex" style={{ minHeight: '100vh', marginLeft: '3%', marginRight: '3%'  }}>
      <Col span={12} style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Card> {/*Crea el cuadrado del login*/}
            <DeleteUserTableForm />
          </Card>
        </Col>
      </Row>
    </Row>
  )
}

export default DeleteUserTable
