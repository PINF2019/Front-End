import { Card, Col, Row, Typography } from 'antd'
import React from 'react'
import ModifyUserTableForm from './Form'

const { Text } = Typography

const ModifyUserTable = () => {
  return (
    <Row
      justify="start"
      style={{ marginTop: '3%', marginLeft: '3%', overflow: 'auto' }}
    >
      <Row className="layout" style={{ marginBottom: '2%' }}>
        <Card className="card">
          <Text strong style={{ fontSize: '30px' }}>
            Modificar Usuario
          </Text>
        </Card>
      </Row>
      <Row
        type="flex"
        style={{ minHeight: '100vh', marginLeft: '3%', marginRight: '3%' }}
      >
        <Col
          span={24}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card>
            <ModifyUserTableForm />
          </Card>
        </Col>
      </Row>
    </Row>
  )
}

export default ModifyUserTable
