import React from 'react'
import { Row, Card, Button, Col, Icon } from 'antd'

type election = {
  name: string
  key: number
  dateInit: Date
  dateEnd: Date
}

const ElectionsListItems = () => {
  const elecs = [
    { name: 'Eleccion 1', dateInit: new Date(), dateEnd: new Date() },
    { name: 'Eleccion 2', dateInit: new Date(), dateEnd: new Date() }
  ]
  // Con esto devuelves cada elemento del vector usando la funcion map de los arrays
  return (
    <ul>
      {elecs.map(elec => (
        <Row>
          <Button className="boton">
            {elec.name} {'\t'} {elec.dateInit.toLocaleDateString()} {'-'}{' '}
            {elec.dateEnd.toLocaleDateString()}
          </Button>
          <Icon
            type="caret-right"
            style={{
              verticalAlign: 'middle',
              fontSize: '50px',
              color: '#FFA500'
            }}
          />
        </Row>
      ))}
    </ul>
  )
}

export default ElectionsListItems
