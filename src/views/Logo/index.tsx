import { Role, useMeQuery } from '@Generated/hooks'
import React from 'react'
import MenuUser from '../Menu/MenuUser'
import PickRoleAdmin from '../PickRole/Admin'
import PickRoleSecretary from '../PickRole/Secretary'

const Logo = () => {
  const data = useMeQuery()
  if (data.data?.me.roles.includes(Role.Admin)) return <PickRoleAdmin />
  if (data.data?.me.roles.includes(Role.Secretary)) {
    return <PickRoleSecretary />
  }
  return <MenuUser />
}

export default Logo
