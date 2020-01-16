import { Button, Result, Row } from 'antd'
import React from 'react'

type Props = {
  title: string
}

const OverlayLayer = ({ title }: Props) => {
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ height: '100vh' }}
    >
      <Row style={{ marginTop: '-200px' }}>
        <Result
          title={title}
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
