import { Layout, Row, Typography } from 'antd'
import React from 'react'
import Background from '../../../assets/Wallpaper.png'
import MenuButton from '../MenuButton'

const { Text } = Typography

const secretaryRoutes = [
  {
    name: 'Crear proceso electoral',
    url: '/secretary/procesoElectoral/crear',
  },
  {
    name: 'Eliminar proceso electoral',
    url: '/secretary/procesoElectoral/eliminar',
  },
]

const MenuAdmin = () => {
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
        <Row style={{ marginBottom: '10%' }}>
          <Text strong style={{ fontSize: '30px' }}>
            Gestionar Procesos Electorales
          </Text>
        </Row>
        <Row>
          {secretaryRoutes.map(({ name, url }) => (
            <MenuButton name={name} url={url} key={name} />
          ))}
        </Row>
      </Row>
    </Layout>
  )
}

export default MenuAdmin
