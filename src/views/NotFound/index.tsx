import { Button, Result, Row } from 'antd'
import React from 'react'

const NotFound = () => (
  <Row type="flex" justify="center" align="middle" style={{ height: '100vh' }}>
    <Row style={{ marginTop: '-200px' }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" href="/pickrole">
            Back Home
          </Button>
        }
      />
    </Row>
  </Row>
)

export default NotFound
