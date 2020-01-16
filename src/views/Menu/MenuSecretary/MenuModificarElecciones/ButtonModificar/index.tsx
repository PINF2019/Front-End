import { Button, Icon, Row, Typography } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'

const { Text } = Typography

type Props = {
  id: string
  name: string
  href: string
}

const ElectionButtonModificar = (props: Props) => {
  return (
    <>
      <Button
        // href={props.url}
        style={{
          backgroundColor: '#F0F0F0',
          marginTop: '2%',
          minWidth: '150%',
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
            alignItems: 'space-between',
          }}
        >
          <Text strong style={{ marginTop: 'auto', marginBottom: 'auto' }}>
            {props.name.length > 30
              ? `${props.name.substring(0, 30 - 3)}...`
              : props.name}
          </Text>
          <Row>
            <Icon
              type="edit"
              style={{
                marginTop: '1.1%',
                verticalAlign: 'middle',
                fontSize: '50px',
                color: '#FFA500',
                marginLeft: 'auto',
              }}
              /* onClick={() => {async (input: any, actions) => {
        try {
          const { data } = await modify({ variables: { input, id }})
          if (data) {
            history.replace(routes.base)
          }
        } catch {
          const message = 'Usuario Incorrectos'
          actions.setErrors({ name: message })
        }
      }} */
            />
            <Icon
              type="vertical-align-top"
              style={{
                marginTop: '1.1%',
                verticalAlign: 'middle',
                fontSize: '50px',
                color: '#FFA500',
                marginLeft: 'auto',
              }}
              /* onClick={() => async (id: any, actions: any) => {
        try {
          const { data } = await useDeleteElectionMutation({ variables: { id } });
          if (data) {
            console.log({ data, id });
            history.replace(routes.home);
          }
        } catch {
          const message = "No se pudo borrar el usuario";
          actions.setErrors({ id: message });
        }
      }} */
            />
          </Row>
        </Row>
      </Button>

      <br />
    </>
  )
}
export default ElectionButtonModificar
