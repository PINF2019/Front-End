import React from 'react'
import { Layout, Row, Col, Card, Typography } from 'antd'
import { isAuthTokenExpired } from '@Utils/auth'
import { Redirect } from 'react-router-dom'
import AddUserForm from './Form'
import routes from '@Routes'
import Header from '@Components/Layout/Header'

const { Text } = Typography;

const AddUser = () => {

  return (
    <Row justify="start" style={{ marginTop: '3%', marginLeft: '3%' }}>
      <Row className="layout" style={{ marginBottom: '2%' }}>
        <Card className = "card">
        <Text strong style={{ fontSize: "30px" }}>
          Añadir Usuario
        </Text>
        </Card>
      </Row>
      <Row type="flex" style={{ minHeight: '100vh', marginLeft: '3%' }}>
        <Col
          span={12}
          style={{
            justifyContent: 'center',

            alignItems: 'center'
          }}>
          <Card> {/*Crea el cuadrado del login*/}
            <AddUserForm />
          </Card>
        </Col>
        <Col span={12}>
        </Col>
      </Row>
    </Row>
  )
}

export default AddUser
