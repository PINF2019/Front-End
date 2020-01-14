import routes from '@Routes'
import { isAuthTokenExpired } from '@Utils/auth'
import { Button, Result, Row } from 'antd'
import React from 'react'
import { Redirect } from 'react-router'

const NotFound = () => {
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
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button type="primary">Back Home</Button>}
        />
        ,
      </Row>
    </Row>
  )
}
export default NotFound
