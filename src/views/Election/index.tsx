import { Button, Checkbox, Col, Layout, Radio, Row, Typography } from 'antd'
import React from 'react'
import wallpaper from '../../assets/Wallpaper.png'
import ElectionButton from './button'
import './index.less'

const { Text } = Typography

const data = [
  { name: 'Raúl Escribano Corrales' },
  { name: 'Claudia Soriano' },
  { name: 'Kevin López Cala' },
]

const Election = () => {
  return (
    <Row type="flex" justify="center" align="middle" style={{ height: '100%' }}>
      <Col
        style={{
          width: '50%',
          height: '100%',
          textAlign: 'center',
          backgroundColor: '#f7f7f7',
        }}
      >
        <Layout
          style={{
            height: '100%',
            backgroundImage: `url(${wallpaper})`,
          }}
        >
          <Row
            type="flex"
            justify="center"
            // align="middle"
            style={{
              marginTop: '25%',
            }}
          >
            <Text strong style={{ fontSize: '40px', lineHeight: '100%' }}>
              Elecciones <br />
              Delegado de Ing. Informática
            </Text>
          </Row>
        </Layout>
      </Col>
      <Col
        style={{
          width: '50%',
          height: '100%',
        }}
      >
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ height: '100%' }}
        >
          <Radio.Group>
            <Col>
              <Text strong style={{ fontSize: '22px' }}>
                Su voto:
              </Text>
              <br />
              {data.map((candidate, index) => (
                <ElectionButton
                  name={candidate.name}
                  index={index}
                  key={candidate.name}
                />
              ))}
            </Col>
            <Row
              style={{
                display: 'flex',
                alignContent: 'space-between',
                width: '100%',
              }}
            >
              <Button
                style={{
                  backgroundColor: '#206489',
                  width: '70%',
                  marginRight: 'auto',
                }}
              >
                <Checkbox>
                  <Text style={{ color: '#FFFFFF' }}>Validar mi elección</Text>
                </Checkbox>
              </Button>

              <Button href="/success" type="primary">
                Vota!
              </Button>
            </Row>
          </Radio.Group>
        </Row>
      </Col>
    </Row>
  )
}

export default Election
