import React from 'react'
import { Row, Col, Button, Icon, Typography } from 'antd'
const { Text } = Typography

type Props = {
  name: string
  url: string
}

const MenuButton = (props: Props) => {
  return (
    <>
      <Button
      href={props.url}
        style={{
          backgroundColor: '#F0F0F0',
          marginTop: '2%',
          minWidth: '32%',
          minHeight: '63px',
          borderRadius: '12px',
          boxShadow: '0px 3px 3px grey'
        }}>
        <Row
          style={{
            
            width: '100%',
            height: '100%',
            display: 'flex',
            alignContent: 'space-between'
          }}>
          <Text strong style={{ marginTop: 'auto', marginBottom: 'auto' }}>
            {props.name}
          </Text>

          <Icon
            type="caret-right"
            style={{
              verticalAlign: 'middle',
              fontSize: '50px',
              color: '#FFA500',
              marginLeft: 'auto',
              marginTop: '1.1%', //MODIFICAR
            }}
          />
        </Row>
       
      </Button>

      <br></br>
    </>
  )
}
export default MenuButton
