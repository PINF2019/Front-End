import React from 'react'
import { Row, Card, Button, Col, Typography } from 'antd'
import ElectionsListItems from './Select'
import './index.less'
const { Title, Text } = Typography
const Census = () => {
  return (
    <Row justify="center" className="body">
      <Row
        type="flex"
        justify="center"
        style={{ height: '10vh', paddingTop: '30px' }}
      >
        <Text strong style={{ fontSize: '30px', paddingTop: '50px' }}>
          Seleccione el censo que quiere conocer
        </Text>
      </Row>
      <Row
        justify="center"
        align="middle"
        style={{ height: '100%', marginTop: '50px' }}
      >
        <ElectionsListItems />
      </Row>
    </Row>
  )
}

export default Census
