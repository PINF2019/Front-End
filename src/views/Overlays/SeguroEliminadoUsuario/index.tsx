import React from 'react'
import { Result, Icon, Button, Pagination, Row } from 'antd'
import { isAuthTokenExpired } from '@Utils/auth'
import { Redirect } from 'react-router'
import routes from '@Routes'
const SeguroEliminadoUsuarioOverlay = () => {
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
          title="¿Está seguro de que quiere eliminar a este usuario?"
          icon={<Icon type="mail" theme="twoTone" />}
          extra={[
            <Button type="primary" href="/user">
              Cancelar
            </Button>,
            <Button href="/user">
            Publicar
          </Button>
          ]}
        />
      </Row>
    </Row>
  )
}
export default SeguroEliminadoUsuarioOverlay
