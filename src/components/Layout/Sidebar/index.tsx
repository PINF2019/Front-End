import { Avatar, Col, Divider, Icon, Layout, Row, Typography } from 'antd'
import React from 'react'
import { removeAuthToken } from '@Utils/auth'
import { useHistory, Link } from 'react-router-dom'
import routes from '@Routes'
import {useMeQuery} from '@Generated/hooks'
const { Text } = Typography

const data = {
  email: 'carmen.ruizdecelis@alum.uca.es',
  name: 'Carmen',
  secondName: 'Ruiz de Celis',
  NIF: '123456789',
  role: 'Elector'
}
const response = {
  file: 'http://releases.ubuntu.com/12.04.5/ubuntu-12.04.5-alternate-amd64.iso',
};

const Sidebar = (prop: { collapse: boolean }) => {

  const {me} = useMeQuery()
    
     
  const history = useHistory()
  return (
    <Layout.Sider
      collapsed={prop.collapse}
      collapsible
      collapsedWidth={0}
      trigger={null}
      width={300}
      style={{
        backgroundColor: '#f0f0f0',
        display: 'flex',
        flex: '1',
        flexDirection: 'column'
      }}
    >
      <Row
        type="flex"
        style={{
          justifyContent: 'center',
          marginTop: '15%',
          display: 'flex',
          flex: '1',
          flexDirection: 'column'
        }}
      >
        <Row
          type="flex"
          style={{
            marginLeft: '10%',
            justifyContent: 'center',
            width: '40%',
            display: 'flex'
          }}
        >
          <Avatar size={90} style={{ backgroundColor: '#FFA500' }}>
            <Icon type="user" style={{ fontSize: '80px', margin: 'auto' }} />
          </Avatar>
        </Row>
        <Row type="flex" style={{ paddingTop: '20px', display: 'flex' }}>
          <Text strong style={{ fontSize: '15px', marginLeft: '10%' }}>
            {data.email}
          </Text>
        </Row>

        <Row
          type="flex"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10%',
            fontSize: '15px',
            flex: '1'
          }}
        >
          <Col style={{ width: '40%', marginLeft: '10%' }}>
            <Row style={{ paddingBottom: '10px' }}>
              <Text strong>Apellido</Text>
            </Row>
            <Row style={{ paddingBottom: '10px' }}>
              <Text strong>Nombre</Text>
            </Row>
            <Row style={{ paddingBottom: '10px' }}>
              <Text strong>NIF/NIE</Text>
            </Row>
            <Row style={{ paddingBottom: '10px' }}>
              <Text strong>Rol</Text>
            </Row>
          </Col>
          <Col style={{ width: '50%' }}>
            <Row style={{ paddingBottom: '10px' }}>
              <Text></Text>
            </Row>
            <Row style={{ paddingBottom: '10px' }}>
              <Text>{/*{me.name}*/}</Text>
            </Row>
            <Row style={{ paddingBottom: '10px' }}>
              <Text>{/*{me.NIF}*/}</Text>
            </Row>
            <Row style={{ paddingBottom: '10px' }}>
              <Text>{/*{me.role}*/}</Text>
            </Row>
          </Col>
        </Row>

        <Row type="flex" style={{ flexDirection: 'column', display: 'flex' }}>
          <Row>
            <a href="https://si.ua.es/es/documentos/documentacion/pdf-s/mozilla12-pdf.pdf"> <Text style={{ color: '#FFA500', marginLeft: '10%' }} strong >
              Ayuda
            </Text></a>
           
          </Row>
          <Row>
            <Text style={{ color: '#FFA500', marginLeft: '10%' }} strong>
              Contacto
            </Text>
          </Row>
          <Divider />
          <Row>
            <div
              onClick={() => {
                removeAuthToken()
                history.replace(routes.login)
              }}
              style={{ marginLeft: '10%' }}
            >
              <Text style={{ color: '#FC3F32', cursor: 'pointer' }}  strong>
                Cerrar Sesión
              </Text>
            </div>
          </Row>
        </Row>
      </Row>
    </Layout.Sider>
  )
}

export default Sidebar
