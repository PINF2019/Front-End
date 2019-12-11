import React from 'react'
import { Row, Card } from 'antd'

const ElectionsListItems = () => {
  const elecs = ['eleccion 1', 'eleccion 2', 'eleccion 3']
  // Con esto devuelves cada elemento del vector usando la funcion map de los arrays
  return (
    <ul>
      {elecs.map(elec => (
        <Row>
            <Card style= {{
                 marginTop: '5%',
                 borderRadius: '5px',
                 width: 'max-content',
                 minWidth: '50%',
                 marginLeft: 'auto',
                 marginRight: 'auto',
                 textAlign: 'center'
            }}>
                {elec}
            </Card>
        </Row>
      ))}
    </ul>
  )
}

export default ElectionsListItems