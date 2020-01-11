import React from 'react'
import { Layout, Row, Col, Card, Typography } from 'antd'
import { isAuthTokenExpired } from '@Utils/auth'
import { Redirect } from 'react-router-dom'
import AddUserForm from './Form'
import routes from '@Routes'
import Header from '@Components/Layout/Header'

const ModifyUser = () => {
  /*if (!isAuthTokenExpired()) {
    return <Redirect to={routes.base} />
  }*/

  return (
    <div>
      <Typography.Title>Modificar Usuario</Typography.Title>
      <Row type="flex" style={{ minHeight: '100vh' }}>
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
    </div>
  )
}

export default ModifyUser
