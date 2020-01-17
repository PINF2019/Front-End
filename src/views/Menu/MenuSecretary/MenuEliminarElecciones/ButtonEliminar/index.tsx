import { useDeleteElectionMutation, useDeletePollMutation, useGetElectoralProcessQuery } from '@Generated/hooks'
import routes from '@Routes'
import { Button, Icon, Popconfirm, Row, Typography } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'

const { Text } = Typography

type Props = {
  name: string
  id: string
  href: string
}

const ButtonEliminar = (props: Props) => {
  const [deleteElection] = useDeleteElectionMutation()
  const [deletePoll] = useDeletePollMutation()
  const history = useHistory()
  const {data} = useGetElectoralProcessQuery({ variables: {props.id}})
  return (
    <>
      <Button
        // href={props.url}
        style={{
          backgroundColor: '#F0F0F0',
          marginTop: '2%',
          minWidth: '32%',
          minHeight: '63px',
          borderRadius: '12px',
          boxShadow: '0px 3px 3px grey',
        }}
      >
        <Row
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignContent: 'space-between',
          }}
        >
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
            onConfirm={async () => {
              try {
                if(data){
                   if(data.__typename === 'Election'){
                    const { data:data2 } = await deleteElection({ variables: { props.id } })
                   }
                   else{
                    const { data:data3 } = await deletePoll({ variables: { props.id } })
                   }
                   history.replace(routes.procesoEliminado)
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
        </Row>
      </Button>
      <br />
    </>
  )
}
export default ButtonEliminar
