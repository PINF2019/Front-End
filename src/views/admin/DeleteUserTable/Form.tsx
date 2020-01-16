import { useUsersQuery } from '@Generated/hooks'
import { Table } from 'antd'
import React from 'react'
import DeleteButton from './DeleteButton'

const columns = [
  {
    title: 'NIF/NIE',
    dataIndex: 'nif',
    key: 'nif',
  },
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Apellidos',
    dataIndex: 'lastnames',
    key: 'lastnames',
  },
  {
    title: 'Sexo',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: 'Rol',
    dataIndex: 'rol',
    key: 'rol',
  },
  {
    title: 'Acción',
    key: 'modify',
    render: (text: React.ReactNode, record: any) => {
      return <DeleteButton id={record.id} />
    },
  },
]

const DeleteUserTable = () => {
  const { data, loading, error } = useUsersQuery()
  if (loading) {
    return <div>Loading...</div>
  }

  if (data) {
    const ids = data.users.map(user => user.id)
    const firstNames = data.users.map(user => user.firstName)
    const nifs = data.users.map(user => user.dni)
    const lastnames = data.users.map(user => user.lastName)
    const sexes = data.users.map(user => user.genre)
    const roles = data.users.map(user => user.roles)
    const array = new Array(data.users.length)
    for (let i = 0; i < data.users.length; i += 1) {
      array[i] = {
        key: i,
        id: ids[i],
        name: firstNames[i],
        nif: nifs[i],
        lastnames: lastnames[i],
        sex: sexes[i],
        rol: roles[i][0],
      }
    }
    return (
      <Table bordered pagination={false} columns={columns} dataSource={array} />
    )
  }
  return <div>{JSON.stringify(error)}</div>
}

export default DeleteUserTable
