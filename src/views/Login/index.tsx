import React from 'react'
import { Layout, Row, Col, Card, Typography } from 'antd'
import { isAuthTokenExpired } from '@Utils/auth'
import { Redirect } from 'react-router-dom'
import LoginForm from './Form'
import routes from '@Routes'

const Login = () => {
  if (!isAuthTokenExpired()) {
    return <Redirect to={routes.base} />
  }

  return (
    <Layout>
      <Row type="flex" style={{ minHeight: '100vh' }}>
        <Col span={12}>
          <Typography>Tu voto, cómodamente</Typography>
        </Col>
        <Col
          span={12}
          style={{
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center'
          }}>
          <Card>
            <LoginForm />
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default Login
