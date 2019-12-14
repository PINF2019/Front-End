import React from 'react'
import { Icon, Row, Card, Button, Col, Typography } from 'antd'

type election = {
  name: string
  key: number
  dateInit: Date
  dateEnd: Date
}

const {Title, Text} = Typography


const ElectionsListItems = () => {
  const elecs = [{ name: 'Eleccion 1', dateInit: new Date(), dateEnd: new Date() },
  { name: 'Eleccion 2', dateInit: new Date(), dateEnd: new Date()}]
  // Con esto devuelves cada elemento del vector usando la funcion map de los arrays
  return (
    <ul>
      {elecs.map(elec => (
        <Row>
         <Button className="boton">
          <Row className="RowBoton">
            <Text strong className = "NombreEleccion">
              {elec.name}
            </Text>

            <Text className = "FechaEleccion">
              {elec.dateInit.toLocaleDateString()} {'-'}
              {elec.dateEnd.toLocaleDateString()}
            </Text>

            <Icon
              type="caret-right" className = "Icono"/>
          </Row>
        </Button>
      </Row>
      ))}
    </ul>
  )
}

export default ElectionsListItems