import React from 'react'
import { Button, Typography, Row, Col, Avatar } from 'antd'
import rol1 from '@Assets/rol1.png'
import rol2 from '@Assets/secretario1.png'
import rol3 from '@Assets/usuario1.png'
const { Title, Text } = Typography

const PickRole = () => (
  <>
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ height: '10vh', backgroundColor: '#FFFFFF' }}>
      <Text strong style={{ fontSize: '20px', marginTop: '3%' }}>
        Seleccione su rol
      </Text>
    </Row>
    <Row
      type="flex"
      justify="center"
      //align="middle"
      style={{ height: '70vh', backgroundColor: '#FFFFFF' }}>
      <Row
        type="flex"
        justify="space-between"
        style={{ marginTop: '7%', width: '50%', backgroundColor: '#FFFFFF' }}>
        <Col style={{ textAlign: 'center' }}>
          <Button type="link" href="./user" style={{ height: '150px' }}>
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
          </Button>
        </Col>
        <Col style={{ textAlign: 'center' }}>
          <Button type="link" href="./secretary" style={{ height: '150px' }}>
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
          </Button>
        </Col>

        <Col style={{ textAlign: 'center' }}>
          <Button type="link" href="./admin" style={{ height: '150px' }}>
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
          </Button>
        </Col>
      </Row>
    </Row>
  </>
)

export default PickRole
