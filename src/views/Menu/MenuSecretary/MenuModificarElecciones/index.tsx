import { useElectoralProcessesQuery } from '@Generated/hooks'
import { Row, Typography } from 'antd'
import React from 'react'
import ButtonModificar from './ButtonModificar'

const { Text } = Typography

const MenuModificarElecciones = () => {
  const { data, error } = useElectoralProcessesQuery()
  if (data) {
    return (
      <Row justify="center" className="body">
        <Row style={{ marginTop: '3%', marginBottom: '1%' }}>
          <Text strong style={{ fontSize: '20px' }}>
            Modificar Procesos Electorales
          </Text>
        </Row>
        <Row>
          {data.electoralProcesses.map(d => (
            <ButtonModificar name={d.description} id={d.id} href="modificar" />
          ))}
        </Row>
      </Row>
    )
  }

  return <div>{JSON.stringify(error)}</div>
}

export default MenuModificarElecciones
