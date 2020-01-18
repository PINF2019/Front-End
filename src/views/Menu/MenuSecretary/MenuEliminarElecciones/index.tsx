import { useElectoralProcessesCrudQuery } from '@Generated/hooks'
import { Row, Typography } from 'antd'
import React from 'react'
import ButtonEliminar from './ButtonEliminar'

const { Text } = Typography

const MenuEliminarElecciones = () => {
  const { data, error } = useElectoralProcessesCrudQuery()
  if (data) {
    return (
      <Row justify="center" className="body">
        <Row style={{ marginTop: '3%', marginBottom: '1%' }}>
          <Text strong style={{ fontSize: '20px' }}>
            Eliminar Procesos Electorales
          </Text>
        </Row>
        <Row>
          {data.electoralProcesses.map(d => (
            <ButtonEliminar
              name={d.description}
              id={d.id}
              type={d.__typename}
              key={d.id}
            />
          ))}
        </Row>
      </Row>
    )
  }
  return <div>{JSON.stringify(error)}</div>
}

export default MenuEliminarElecciones
