import { Layout, Row, Typography } from 'antd'
import React from 'react'
import Background from '../../../assets/Wallpaper.png'
import MenuButton from '../MenuButton'

const { Text } = Typography

const adminRoutes = [
  { name: 'Añadir usuario', url: '/admin/adduser' },
  { name: 'Modificar usuario', url: '/admin/modifyusertable' },
  { name: 'Eliminar usuario', url: '/admin/deleteusertable' },
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
            Gestionar Usuarios
          </Text>
        </Row>
        <Row>
          {adminRoutes.map(data => (
            <MenuButton name={data.name} url={data.url} key={data.name} />
          ))}
        </Row>
      </Row>
    </Layout>
  )
}

export default MenuAdmin
