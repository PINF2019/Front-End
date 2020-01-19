import { useElectoralProcessesCrudQuery } from '@Generated/hooks'
import { Row, Typography, Layout } from 'antd'
import Background from '../../../../assets/Wallpaper.png'
import React from 'react'
import ButtonModificar from './ButtonModificar'

const { Text } = Typography

const MenuModificarElecciones = () => {
  const { data, error } = useElectoralProcessesCrudQuery()
  if (data) {
    return (
      <Layout
        style={{
          backgroundImage: `url(${Background})`,
          height: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Row justify="center" className="body">
          <Row style={{ marginTop: '3%', marginBottom: '1%' }}>
            <Text strong style={{ fontSize: '20px' }}>
              Modificar Procesos Electorales
          </Text>
          </Row>
          <Row>
            {data.electoralProcesses.map(d => (
              <ButtonModificar
                name={d.description}
                id={d.id}
                type={d.__typename}
                key={d.id}
              />
            ))}
          </Row>
        </Row>
      </Layout>
    )
  }

  return <div>{JSON.stringify(error)}</div>
}

export default MenuModificarElecciones
