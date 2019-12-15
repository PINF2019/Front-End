import React from 'react'
import { Button, Typography, Row, Col, Avatar } from 'antd'
import rol1 from '@Assets/rol1.png'
import rol2 from '@Assets/secretario1.png'
import rol3 from '@Assets/usuario1.png'
import { useHistory } from 'react-router'
const { Title, Text } = Typography

const PickRole = () => {
  const history = useHistory()
  return (
    <>
      <Row
        type="flex"
        justify="center"
        style={{ height: '10vh', backgroundColor: '#FFFFFF' }}>
        <Text strong style={{ fontSize: '20px', marginTop: '3%' }}>
          Seleccione su rol
        </Text>
      </Row>
      <Row
        type="flex"
        justify="center"
        //align="middle"
      >
        <Row
          type="flex"
          justify="space-between"
          style={{ marginTop: '7%', width: '50%', backgroundColor: '#FFFFFF' }}>
          <Col style={{ textAlign: 'center' }}>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => history.push('/user')}>
              <Avatar
                shape="square"
                src={rol3}
                size={150}
                style={{
                  marginBottom: '10%',
                  backgroundColor: '#F0F0F0'
                }}></Avatar>
              <br></br>
              <Text strong>Elector</Text>
            </div>
          </Col>
          <Col style={{ textAlign: 'center' }}>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => history.push('/secretary')}>
              <Avatar
                shape="square"
                src={rol1}
                size={150}
                style={{
                  marginBottom: '10%',
                  backgroundColor: '#F0F0F0'
                }}></Avatar>
              <br></br>
              <Text strong>Secretario</Text>
            </div>
          </Col>

          <Col style={{ textAlign: 'center' }}>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => history.push('/admin')}>
              <Avatar
                shape="square"
                src={rol2}
                size={150}
                style={{
                  marginBottom: '10%',
                  backgroundColor: '#F0F0F0'
                }}></Avatar>
              <br></br>
              <Text strong>Administrador</Text>
            </div>
          </Col>
        </Row>
      </Row>
    </>
  )
}

export default PickRole
