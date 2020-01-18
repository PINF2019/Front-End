import { useDeleteUserMutation } from '@Generated/hooks'
import routes from '@Routes'
import { Popconfirm } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'

type Props = {
  id: string
}
const DeleteButton = ({ id }: Props) => {
  const [deleteUser] = useDeleteUserMutation()
  const history = useHistory()

  return (
    <Popconfirm
      title="¿Está seguro que quiere eliminar a este usuario?"
      onConfirm={async () => {
        try {
          const { data } = await deleteUser({ variables: { id } })
          if (data) {
            history.replace(routes.usuarioEliminado)
          }
        } catch {
          console.warn('Errors')
        }
      }}
      okText="Aceptar"
      cancelText="Cancelar"
    >
      <p style={{ color: "#ff2a00" }}>Eliminar</p>
    </Popconfirm>
  )
}
export default DeleteButton
