import React from 'react'
import { Layout, Row, Col, Card, Typography } from 'antd'
import { isAuthTokenExpired } from '@Utils/auth'
import { Redirect } from 'react-router-dom'
import App from './Form'
import routes from '@Routes'
import Header from '@Components/Layout/Header'

const DeleteUserTable = () => {

  return (
    <div>
      <Typography.Title>Eliminar usuario</Typography.Title>
      <Row type="flex" style={{ minHeight: '100vh' }}>
        <Col
          span={24}
          style={{
            justifyContent: 'center',
            
            alignItems: 'center'
          }}>
          <Card> {/*Crea el cuadrado del login*/}
            <App />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default DeleteUserTable
