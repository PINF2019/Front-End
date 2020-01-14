import { Card, Col, Row, Typography } from 'antd'
import React from 'react'
import UserForm from './Form'

const gestionarUsuarios = () => {
  /* if (!isAuthTokenExpired()) {
      return <Redirect to={routes.base} />
    } */

  return (
    // <Layout>
    <Row>
      <Col>
        <Row>
          <Typography.Text style={{ fontSize: '25px', textAlign: 'center' }}>
            Gestión Usuario
          </Typography.Text>
        </Row>
        <Row type="flex" justify="center" align="middle">
          <Col span={8} />
          <Col
            span={8}
            style={{
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Card>
              {' '}
              {/* Crea el cuadrado del login */}
              <UserForm />
            </Card>
          </Col>
          <Col span={8} />
        </Row>
      </Col>
    </Row>
    // </Layout>
  )
}

export default gestionarUsuarios
