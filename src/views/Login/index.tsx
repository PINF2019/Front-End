import React from 'react'
import { Layout, Row, Col, Card, Typography } from 'antd'
import { isAuthTokenExpired } from '@Utils/auth'
import { Redirect } from 'react-router-dom'
import LoginForm from './Form'
import routes from '@Routes'
const { Text } = Typography

const Login = () => {
  if (!isAuthTokenExpired()) {
    return <Redirect to={routes.base} />
  }

  return (
    <Layout>
      <Row type="flex" style={{ minHeight: '100vh' }}>
        <Col
          span={12}
          style={{
            display: 'flex',
            justifyContent: 'center',
            //alignItems: 'center',
            width: '50%'
          }}>
          <Col
            span={12}
            style={{
              display: 'flex',
              justifyContent: 'center',
              //alignItems: 'center',
              marginTop: '20%',
              width: '50%'
            }}>
            <Text style={{ fontSize: '50px', lineHeight: '130%' }}>
              Tu voto, cómodamente
            </Text>
          </Col>
        </Col>
        <Col
          span={12}
          style={{
            justifyContent: 'center',
            display: 'flex',
            // alignItems: 'center',
            width: '50%'
          }}>
          <Card
            bordered={false}
            style={{
              borderRadius: '20px',
              marginTop: '20%',
              marginBottom: 'auto'
              // backgroundColor: '#f0f0f0'
            }}>
            {
              //Hay un marginTop en el LoginForm porque no queda bien
            }
            <LoginForm />
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default Login
