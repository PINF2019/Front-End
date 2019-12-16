import React from 'react'
import { Icon, Row, Card, Button, Col, Typography } from 'antd'
import {useElectionNameQuery} from '@Generated/hooks'

const {Title, Text} = Typography

type election = {
  name: string
  key: number
  startTime: Date
  endTime: Date
}


const ElectionsListItems = () => {
  const elecs = useElectionNameQuery()
  // Con esto devuelves cada elemento del vector usando la funcion map de los arrays
  const elecstaticarray = [{ idSecretary: 'Eleccion 1', startTime: new Date(), endTime: new Date() },
  { idSecretary: 'Eleccion 2', startTime: new Date(), endTime: new Date()}]
  return (
    <ul>
      {//elecs.data?.elections.map
      elecstaticarray.map(elec =>
        <Row>
         <Button className="boton">
          <Row className="RowBoton">
            <Text strong className = "NombreEleccion">
              {elec.idSecretary}
            </Text>

            <Text className = "FechaEleccion">
              {elec.startTime.toLocaleDateString()} {'-'}
              {elec.endTime.toLocaleDateString()}
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