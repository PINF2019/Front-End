import React from 'react'
import { Result, Icon, Button, Pagination, Row } from 'antd'
import { isAuthTokenExpired } from '@Utils/auth'
import { Redirect } from 'react-router'
import routes from '@Routes'
const Success = () => {
  if (!isAuthTokenExpired()) {
    return <Redirect to={routes.success} />
  }
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ height: '100vh' }}>
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
