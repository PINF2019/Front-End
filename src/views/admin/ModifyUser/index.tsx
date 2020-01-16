import { Card, Col, Row, Typography } from 'antd'
import React from 'react'
import { useParams } from 'react-router'
import MofifyUserForm from './Form'

const { Text } = Typography

const ModifyUser = () => {
  const { id, name, lastnames, sex, rol, colegiateBody } = useParams()
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
      <Row type="flex" style={{ minHeight: '100vh', marginLeft: '3%' }}>
        <Col
          span={12}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card>
            <MofifyUserForm
              id={id || ''}
              name={name || ''}
              lastnames={lastnames || ''}
              sex={sex || ''}
              rol={rol || ''}
              colegiateBody={colegiateBody || ''}
            />
          </Card>
        </Col>
        <Col span={12} />
      </Row>
    </Row>
  )
}

export default ModifyUser
