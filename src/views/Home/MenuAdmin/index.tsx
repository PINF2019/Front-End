import { isAuthTokenExpired } from '@Utils/auth'
import { Redirect } from 'react-router-dom'
import React from 'react'
import { Row, Card, Button } from 'antd'
import routes from '@Routes'
import AdminOptions from './Select'

const MenuAdmin = () => {
  if (!isAuthTokenExpired()) {
    return <Redirect to={routes.base} />
  }

  return (
    <Row style={{ backgroundColor: '#FFFFFF' }}>
      <Card
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '5%',
          border: '0.5px solid black',
          maxWidth: '80%',
          borderRadius: '5px'
        }}>
        <Row>
          <Button
            href="./login"
            style={{
              marginLeft: '96%',
              marginTop: '7px'
            }}>
            X
          </Button>
        </Row>
        <Row>
          <h3>Seleccione la operación que desee realizar:</h3>
        </Row>
        <Row>
          {' '}
          <ul>
            <>
              <AdminOptions />
            </>
          </ul>
        </Row>
      </Card>
    </Row>
  )
}

export default MenuAdmin
