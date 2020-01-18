import { useDeleteElectoralProcessMutation } from '@Generated/hooks'
import routes from '@Routes'
import { Button, Icon, message, Popconfirm, Row, Typography } from 'antd'
import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

const { Text } = Typography

type Props = {
  name: string
  id: string
  type: string
}

const ButtonEliminar = ({ id, name, type }: Props) => {
  const [deleteElectoralProcess] = useDeleteElectoralProcessMutation()
  const history = useHistory()

  const onConfirm = useCallback(async () => {
    const variables = { election: false, poll: false, id }
    if (type === 'Election') {
      variables.election = true
    } else {
      variables.poll = true
    }
    const { errors } = await deleteElectoralProcess({ variables })
    if (errors) {
      message.error('Unable to delete')
    } else {
      history.push(routes.procesoEliminado)
    }
  }, [deleteElectoralProcess, history, id, type])

  return (
    <>
      <Button className="button">
        <Row className="RowCensusButton">
          <Text strong style={{ marginTop: 'auto', marginBottom: 'auto' }}>
            {name.length > 30 ? `${name.substring(0, 30 - 3)}...` : name}
          </Text>
          <Popconfirm
            title="Are you sure delete this task?"
            icon={
              <Icon
                type="delete"
                style={{
                  marginTop: '1.1%',
                  verticalAlign: 'middle',
                  fontSize: '50px',
                  color: '#FFA500',
                  marginLeft: 'auto',
                }}
              />
            }
            onConfirm={onConfirm}
            okText="Yes"
            cancelText="No"
          >
            Eliminar
          </Popconfirm>
        </Row>
      </Button>
      <br />
    </>
  )
}
export default ButtonEliminar
