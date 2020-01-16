import { Card, Col, Row, Typography } from 'antd'
import React from 'react'
import AddUserForm from './Form'

const { Text } = Typography

const AddUser = () => {
  return (
    <Row
      justify="start"
      style={{ marginTop: '3%', marginLeft: '3%', overflow: 'auto' }}
    >
      <Row className="layout" style={{ marginBottom: '2%' }}>
        <Card className="card">
          <Text strong style={{ fontSize: '30px' }}>
            Añadir Usuario
          </Text>
        </Card>
      </Row>
      <Row type="flex" style={{ minHeight: '100vh', marginLeft: '3%' }}>
        <Col
          span={12}
          style={{
            justifyContent: 'center',

            alignItems: 'center',
          }}
        >
          <Card>
            {' '}
            {/* Crea el cuadrado del login */}
            <AddUserForm />
          </Card>
        </Col>
        <Col span={12} />
      </Row>
    </Row>
  )
}

export default AddUser
