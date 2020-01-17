import { useUsersQuery } from '@Generated/hooks'
import { Table } from 'antd'
import React from 'react'
import ModifyButton from './ModifyButton'

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
    render: (text: React.ReactNode, record: any) => (
      <ModifyButton
        id={record.id}
        name={record.name}
        lastnames={record.lastnames}
        sex={record.sex}
        rol={record.rol}
        colegiateBody={record.colegiateBody}
      />
    ),
  },
]
const ModifyUserTable = () => {
  const { data, loading, error } = useUsersQuery()
  // Las variables entre llaves son las cosas que podemos obtener de la query
  if (loading) {
    // Loading es un booleano que comprueba si se está realizando la query
    return <div>Loading...</div>
  }

  if (data) {
    // Data contiene los datos que hemos solicitado y se puede mapear
    // A la estructura que queramos. En este caso es un map. Nota: index,
    // Tal y como indica es el índice que lo recorre
    const firstNames = data.users.map(user => user.firstName)
    const ids = data.users.map(user => user.id)
    const nifs = data.users.map(user => user.dni)
    const lastnames = data.users.map(user => user.lastName)
    const sexes = data.users.map(user => user.genre)
    const roles = data.users.map(user => user.roles)
    const colegiateBodys = data.users.map(user => user.colegiateBody.id)

    const array = new Array(data.users.length)
    for (let i = 0; i < data.users.length; ++i) {
      // let rol = ''
      // roles[i].forEach(element => rol = rol + element || ' ')
      array[i] = {
        key: i,
        nif: nifs[i],
        name: firstNames[i],
        id: ids[i],
        lastnames: lastnames[i],
        sex: sexes[i],
        rol: roles[i][0],
        colegiateBody: colegiateBodys[i],
      }
    }

    return (
      /* <div>
        {data.users.map((user, index) => (
          <div key={index}>{user.firstName}</div>
        ))}
      </div> */

      <Table bordered pagination={false} columns={columns} dataSource={array} />
    )
  }

  // En caso de que ninguno de los otros ifs funcione, se devolvería la variable de error
  return <div>{JSON.stringify(error)}</div>
}

export default ModifyUserTable
