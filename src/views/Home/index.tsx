import { Role, useMeQuery } from '@Generated/hooks'
import React from 'react'
import MenuAdmin from '../Menu/MenuAdmin'
import MenuUser from '../Menu/MenuUser'
import MenuSecretary from '../Menu/MenuSecretary'

const Home = () => {
  const data = useMeQuery()
  if (data.data?.me.roles.includes(Role.Admin)) return <MenuAdmin />
  if (data.data?.me.roles.includes(Role.Secretary)) {
    return <MenuSecretary />
  }
  return <MenuUser />
}

export default Home
