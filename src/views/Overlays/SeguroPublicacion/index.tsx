import routes from '@Routes'
import { isAuthTokenExpired } from '@Utils/auth'
import { Button, Icon, Result, Row } from 'antd'
import React from 'react'
import { Redirect } from 'react-router'

const Success = () => {
  if (!isAuthTokenExpired()) {
    return <Redirect to={routes.success} />
  }
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ height: '100vh' }}
    >
      <Row style={{ marginTop: '-200px' }}>
        <Result
          title="¿Está seguro que quiere publicar este proceso electoral?"
          icon={<Icon type="mail" theme="twoTone" />}
          extra={[
            <Button type="primary" href="/user">
              Cancelar
            </Button>,
            <Button href="/user">Publicar</Button>,
          ]}
        />
      </Row>
    </Row>
  )
}
export default Success
