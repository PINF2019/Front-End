import { isAuthTokenExpired } from '@Utils/auth'
import { Redirect } from 'react-router-dom'
import React from 'react'
import { Row, Card, Button } from 'antd'
import routes from '@Routes'

const MenuUser = () => {
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
          <h3>Seleccione los resultados que desee consultar:</h3>
        </Row>
        <Row>
          {' '}
          <ul>
            <>
              <Row>
                <Button
                  href="http://localhost:3000/Census"
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'inline-block',
                    marginTop: '2%',
                    border: '0.5px solid black',
                    maxWidth: '80%',
                    borderRadius: '5px'
                  }}>
                  ConsultarCenso
                </Button>
              </Row>
              <Row>
                <Button
                  href="http://localhost:3000/Home"
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'inline-block',
                    marginTop: '2%',
                    border: '0.5px solid black',
                    maxWidth: '80%',
                    borderRadius: '5px'
                  }}>
                  Votación
                </Button>
              </Row>
              <Row>
                <Button
                  href="http://localhost:3000/Home"
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'inline-block',
                    marginTop: '2%',
                    border: '0.5px solid black',
                    maxWidth: '80%',
                    borderRadius: '5px'
                  }}>
                  Elección
                </Button>
              </Row>
              <Row>
                <Button
                  href="http://localhost:3000/MenuResultados"
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'inline-block',
                    marginTop: '2%',
                    border: '0.5px solid black',
                    maxWidth: '80%',
                    borderRadius: '5px'
                  }}>
                  ConsultarResultados
                </Button>
              </Row>
            </>
          </ul>
        </Row>
      </Card>
    </Row>
  )
}

export default MenuUser
