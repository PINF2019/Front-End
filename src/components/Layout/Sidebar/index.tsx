import { Typography, Layout, Row, Col, Avatar } from 'antd'

import React, { Component } from 'react'
import { string } from 'prop-types'
const { Text } = Typography

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
      width={250}
      style={{ backgroundColor: '#f0f0f0' }}>
      <Row>
        <Col
          style={{ height: '80%', justifyContent: 'center', marginTop: '15%' }}>
          <Row
            style={{
              marginLeft: '10%',
              justifyContent: 'center',
              width: '40%'
            }}>
            <Avatar
              icon="user"
              size={60}
              style={{ backgroundColor: '#FFA500' }}></Avatar>
            <br></br>
            <br></br>
            <Text strong style={{ fontSize: '90%' }}>
              {data.email}
            </Text>
            <br></br>
          </Row>

          <Row
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '10%'
            }}>
            <Col style={{ width: '40%' }}>
              <Text strong>Apellido</Text>
              <br></br>
              <Text strong>Nombre</Text>
              <br></br>
              <Text strong>NIF/NIE</Text>
              <br></br>
              <Text strong>Rol</Text>
              <br></br>
            </Col>
            <Col style={{ width: '40%' }}>
              <Text>{data.secondName}</Text>
              <br></br>
              <Text>{data.name}</Text>
              <br></br>
              <Text>{data.NIF}</Text>
              <br></br>
              <Text>{data.role}</Text>
              <br></br>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout.Sider>
  )
}

export default Sidebar
