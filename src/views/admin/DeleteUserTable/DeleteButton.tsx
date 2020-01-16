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
      title="Are you sure delete this task?"
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
      okText="Yes"
      cancelText="No"
    >
      Eliminar
    </Popconfirm>
  )
}
export default DeleteButton
