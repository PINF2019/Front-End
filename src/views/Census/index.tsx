import React from 'react'
import { Row, Card, Button, Col, Typography } from 'antd'
import ElectionsListItems from './Select'
import './index.less'
const {Title, Text} = Typography
const Census = () => {
  return (
    <Row justify= 'center' className = "body">
        <Row className = "text" >
          <Title ><Text>Seleccione el censo que quiere conocer</Text></Title>
        </Row>
        <Row >
            <ElectionsListItems />
        </Row>
    </Row>
  )
}

export default Census