import { Button, Icon, Result, Row } from 'antd'
import React from 'react'

const Success = () => {
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ height: '100vh' }}
    >
      <Row style={{ marginTop: '-200px' }}>
        <Result
          title="Su voto ha sido registrado"
          subTitle="Gracias por su participación"
          icon={<Icon type="mail" theme="twoTone" />}
          extra={
            <Button type="primary" href="/user">
              Aceptar
            </Button>
          }
        />
      </Row>
    </Row>
  )
}
export default Success
