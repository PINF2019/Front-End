import React from 'react'
import { Row, Card, Button, Col } from 'antd'
import ElectionsListItems from './Select'

const Census = () => {

  return (
    <Row>
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
            style={{
              marginLeft: '96%',
              marginTop: '7px'
            }}>
            X
          </Button>
        </Row>
        <Row>
          <h3>Seleccione el censo que quiere conocer:</h3>
        </Row>
        <Row>
          {' '}
          {/* Elections item es el componente creado que devuelve cada componente de un vector por individual, en ese vector
        ira lo que devuelva la consulta graphql cuando la implemente */}
            
            <ElectionsListItems />

        </Row>
      </Card>
    </Row>
  )
}

export default Census