import { Typography, Layout, Row, Col, Avatar } from 'antd'

import React, { Component } from 'react'
import { string } from 'prop-types'
import { Icon } from 'antd';
import { Divider } from 'antd';
const { Text } = Typography
const { Footer } = Layout

/*
import { Layout, Col, Avatar, Typography } from 'antd'
import { useState } from 'react'
import { bool } from 'prop-types'
const { Text } = Typography
type Props = {
  email: string
  name: string
  secondName: string
  NIF: string
  role: number
}

class Sidebar extends Component {
  constructor(props: Props) {
    super(props)
    this.data = {
      email: props.email,
      name: props.name,
      secondName: props.secondName,
      NIF: props.NIF,
      role: props.role
    }
  }

  state = {
    collapsed: true
  }
  data = {
    email: 'email',
    name: 'name',
    secondName: 'secondName',
    NIF: 'NIF',
    role: 1
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    if (this.state.collapsed)
      return (
        <Col style={{ height: '30%' }}>
          <Avatar icon="user"></Avatar>
          <Text>{this.data.email} </Text>
          <Text strong>Apellido</Text> <Text>{this.data.secondName}</Text>
          <Text strong>Nombre</Text> <Text>{this.data.name}</Text>
          <Text strong>NIF/NIE</Text> <Text>{this.data.NIF}</Text>
          <Text strong>Rol</Text> <Text>{this.data.role}</Text>
        </Col>
      )
    else return <Col style={{ height: '0%' }}></Col>
  }
}

export default Sidebar
*/
const data = {
  email: 'carmen.ruizdecelis@alum.uca.es',
  name: 'Carmen',
  secondName: 'Ruiz de Celis',
  NIF: '123456789',
  role: 'Elector'
}

const Sidebar = (prop: { collapse: boolean }) => {
  return (
    <Layout.Sider
      collapsed={prop.collapse}
      collapsible
      collapsedWidth={0}
      trigger={null}
      width={300}
      style={{ backgroundColor: '#f0f0f0', display: 'flex', flex: '1', flexDirection: 'column'}}>
      <Row
        type='flex'
        style={{ justifyContent: 'center', marginTop: '15%', display: 'flex', flex: '1', flexDirection: 'column' }}>
        <Row
          type='flex'
          style={{
            marginLeft: '10%',
            justifyContent: 'center',
            width: '40%',
            display: 'flex'
          }}
        >
          <Avatar
            size={90}
            style={{ backgroundColor: '#FFA500' }}
          >
            <Icon type="user" style={{ fontSize: '80px', margin: 'auto' }} />
          </Avatar>
        </Row>
        <Row
          type='flex'
          style={{ paddingTop: '20px', display: 'flex'}}>
          <Text strong style={{ fontSize: '15px', marginLeft: '10%', }}>
            {data.email}
          </Text>
        </Row>

        <Row
          type='flex'
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10%',
            fontSize: '15px',
            flex: '1'
          }}>
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
              <Text>{data.secondName}</Text>
            </Row>
            <Row style={{ paddingBottom: '10px' }}>
              <Text>{data.name}</Text>
            </Row>
            <Row style={{ paddingBottom: '10px' }}>
              <Text>{data.NIF}</Text>
            </Row>
            <Row style={{ paddingBottom: '10px' }}>
              <Text>{data.role}</Text>
            </Row>
          </Col>
        </Row>

        <Row
          type='flex'
          style={{ flexDirection: 'column', display: 'flex' }}
        >
          <Row>
            <Text style={{ color: '#FFA500', marginLeft: '10%' }} strong>Ayuda</Text>
          </Row>
          <Row>
            <Text style={{ color: '#FFA500', marginLeft: '10%' }} strong>Contacto</Text>
          </Row>

          <Divider />

          <Row>
            <a href="/login" style={{ marginLeft: '10%' }}><Text style={{ color: '#FC3F32' }} strong>Cerrar Sesión</Text></a>
          </Row>
        </Row>
      </Row>
    </Layout.Sider >
  )
}

export default Sidebar
