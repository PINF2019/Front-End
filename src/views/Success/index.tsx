import { Button, Icon, Result, Row } from 'antd'
import React from 'react'

const Success = () => (
  <Row type="flex" justify="center" align="middle" style={{ height: '100vh' }}>
    <Row style={{ marginTop: '-200px' }}>
      <Result
        title="Su voto ha sido enviado"
        subTitle="Gracias por su participación"
        icon={<Icon type="mail" theme="twoTone" />}
        extra={
          <Button type="primary" href="/user">
            Aceptar
          </Button>
        }
        //<a href='/votacion_simple' /a>
      />
    </Row>
  </Row>
)

export default Success
