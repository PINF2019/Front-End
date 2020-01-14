import React from 'react'
import { Result, Icon, Button, Pagination, Row } from 'antd'
import { isAuthTokenExpired } from '@Utils/auth'
import { Redirect } from 'react-router'
import routes from '@Routes'

type Props = {
    title: string
}

const OverlayLayer = (props: Props) => {
 
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ height: '100vh' }}>
      <Row style={{ marginTop: '-200px' }}>
        <Result
          title={props.title}
          extra={
            <Button type="primary" href="/home">
              Aceptar
            </Button>
          }
        />
      </Row>
    </Row>
  )
}
export default OverlayLayer
