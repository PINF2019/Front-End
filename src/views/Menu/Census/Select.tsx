import React from 'react'
import { Row, Card, Button, Col, Icon, Typography } from 'antd'
const { Text } = Typography

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
          <Button className="boton" href = "./Census/Data">
            <Row
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignContent: 'space-between'
              }}
            >
              <Text strong style={{ marginTop: 'auto', marginBottom: 'auto', fontSize: '20px', display: 'flex', flex: '1' }}>{elec.name}</Text>

              <Text style={{ marginTop: 'auto', marginBottom: 'auto', fontSize: '20px', display: 'flex', flex: '1' }}>{elec.dateInit.toLocaleDateString()} {'-'}{' '}{elec.dateEnd.toLocaleDateString()}</Text> 

              <Icon
                type="caret-right"
                style={{
                  fontSize: '50px',
                  color: '#FFA500',
                  marginTop: '1.1%', //MODIFICAR
                  borderRadius: '50px',
                  display: 'flex'
                }}
              />
            </Row>
          </Button>
        </Row>
      ))}
    </ul>
  )
}

export default ElectionsListItems
