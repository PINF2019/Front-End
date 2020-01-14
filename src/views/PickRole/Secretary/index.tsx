import rol2 from '@Assets/secretario1.png'
import rol3 from '@Assets/usuario1.png'
import { Avatar, Col, Row, Typography } from 'antd'
import React from 'react'
import { useHistory } from 'react-router'

const { Text } = Typography

const PickRoleSecretary = () => {
  const history = useHistory()
  return (
    <>
      <Row
        type="flex"
        justify="center"
        style={{ height: '10vh', paddingTop: '30px' }}
      >
        <Text strong style={{ fontSize: '30px', paddingTop: '50px' }}>
          Seleccione su rol
        </Text>
      </Row>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ height: '70%' }}
      >
        <Row
          type="flex"
          justify="space-between"
          style={{ paddingTop: '100px', width: '70%' }}
        >
          <Col style={{ textAlign: 'center', marginBottom: '30px' }}>
            <Row
              style={{ cursor: 'pointer' }}
              onClick={() => history.push('/user')}
            >
              <Avatar
                shape="square"
                src={rol3}
                size={250}
                style={{
                  marginBottom: '20px',
                  backgroundColor: '#F0F0F0',
                  padding: '20px',
                  borderRadius: '20px',
                }}
              />
            </Row>
            <Row>
              <Text style={{ fontSize: '20px' }} strong>
                Elector
              </Text>
            </Row>
          </Col>

          <Col style={{ textAlign: 'center', marginBottom: '30px' }}>
            <Row
              style={{ cursor: 'pointer' }}
              onClick={() => history.push('/secretary')}
            >
              <Avatar
                shape="square"
                src={rol2}
                size={250}
                style={{
                  marginBottom: '20px',
                  backgroundColor: '#F0F0F0',
                  padding: '20px',
                  borderRadius: '20px',
                }}
              />
            </Row>
            <Row>
              <Text style={{ fontSize: '20px' }} strong>
                Secretario
              </Text>
            </Row>
          </Col>
        </Row>
      </Row>
    </>
  )
}

export default PickRoleSecretary
