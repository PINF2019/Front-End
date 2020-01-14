import { Button } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'

type Props = {
  id: string
  name: string
  lastnames: string
  sex: string
  rol: string
}

const ModifyButton = (props: Props) => {
  const history = useHistory()

  return (
    <>
      <Button
        type="primary"
        onClick={() =>
          history.push(
            `/admin/modifyuser/${props.id}/${props.name}/${props.lastnames}/${props.sex}/${props.rol}`
          )
        }
      >
        Modificar
      </Button>
    </>
  )
}
export default ModifyButton
