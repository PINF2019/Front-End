import React from 'react'
import { Layout, Row, Col, Card, Typography } from 'antd'
import { isAuthTokenExpired } from '@Utils/auth'
import { Redirect } from 'react-router-dom'
import LoginForm from './Form'
import routes from '@Routes'
import Background from '../../assets/Wallpaper.png'
import logo from '@Assets/logo.png'
const { Text } = Typography

const Login = () => {
  if (!isAuthTokenExpired()) {
    return <Redirect to={routes.base} />
  }

  return (
    <Layout style={{
      backgroundImage: "url(" + Background + ")",
      height: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}
    >
      <Row type="flex" style={{ minHeight: '100vh' }}>
        <Col
          span={12}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            flexDirection: 'column'
          }}
        >
          <Row
            style={{
              display: 'flex',
              justifyContent: 'center',
              //alignItems: 'center',
              //marginTop: '20%',
              width: '50%',
              paddingBottom: '100px'
            }}
          >
            <img src={logo} width="300px" ></img>
          </Row>
          <Row
            style={{
              display: 'flex',
              justifyContent: 'center',
              //alignItems: 'center',
              //marginTop: '20%',
              width: '50%',
              textAlign: 'center'
            }}
          >
            <Text style={{ fontSize: '50px', lineHeight: '130%' }}>
              Tu voto, cómodamente
            </Text>
          </Row>
        </Col>
        <Col
          span={12}
          style={{
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            width: '50%',
            backgroundColor: '#ffffff'
          }}>
          <Card
            bordered={false}
            style={{
              width: '60%',
              height: 'auto',
              borderRadius: '20px',
              //marginTop: '20%',
              //marginBottom: 'auto'
              backgroundColor: '#f0f0f0'
            }}>
            {
              //Hay un marginTop en el LoginForm porque no queda bien
            }
            <LoginForm />
          </Card>
        </Col>
      </Row>
    </Layout >
  )
}

export default Login
