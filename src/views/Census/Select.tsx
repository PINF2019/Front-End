import React from 'react'
import { Icon, Row, Card, Button, Col, Typography } from 'antd'
import {useElectionNameQuery} from '@Generated/hooks'



const {Title, Text} = Typography


const ElectionsListItems = () => {
  const elecs = useElectionNameQuery()
  // Con esto devuelves cada elemento del vector usando la funcion map de los arrays
  
  return (
    <ul>
      {elecs.data?.elections.map(elec =>
        <Row>
         <Button className="boton">
          <Row className="RowBoton">
            <Text strong className = "NombreEleccion">
              {elec.idSecretary}
            </Text>

            <Text className = "FechaEleccion">
              {elec.startTime} {'-'}
              {elec.endTime}
            </Text>

            <Icon
              type="caret-right" className = "Icono"/>
          </Row>
        </Button>
      </Row>
      )}
    </ul>
  )
}

export default ElectionsListItems