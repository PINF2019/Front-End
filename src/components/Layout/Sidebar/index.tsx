import React, { Component } from 'react'
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
