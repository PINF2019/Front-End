import { Layout, Row, Typography } from 'antd'
import React from 'react'
import Background from '../../../assets/Wallpaper.png'
import MenuButton from '../MenuButton'

const { Text } = Typography

const secretaryRoutes = [
  { name: 'Eleccion', url: '/secretary/procesoElectoral/crear/eleccion' },
  { name: 'Votacion', url: '/secretary/procesoElectoral/crear/votacion' },
]

const MenuCrearEleccion = () => {
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
      <Row justify="center" className="body" style={{ marginTop: '3%' }}>
        <Row className="layout" style={{ marginBottom: '10%' }}>
          <Text strong style={{ fontSize: '30px' }}>
            Crear Proceso Electoral
          </Text>
        </Row>
        <Row>
          {secretaryRoutes.map(data => (
            <MenuButton name={data.name} url={data.url} key={data.name} />
          ))}
        </Row>
      </Row>
    </Layout>
  )
}

export default MenuCrearEleccion
