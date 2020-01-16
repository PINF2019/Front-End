import { Button, Icon, Row, Typography } from 'antd'
import React from 'react'

const { Text } = Typography

type Props = {
  name: string
  id: string
  href: string
}

const ButtonEliminar = ({ name }: Props) => {
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
        </Row>
      </Button>
      <br />
    </>
  )
}
export default ButtonEliminar
