import React from 'react'
import { Row, Col, Button, Icon, Typography } from 'antd'
const { Text } = Typography
type Props = {
  name: string
  dateInit: Date
  dateEnd: Date
  url: string
}

const ElectionButton = (props: Props) => {
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
          <Text strong style={{
            marginTop: 'auto',
            marginBottom: 'auto',
            fontSize: '15px',
            display: 'flex',
            flex: '1'
          }}
          >
            {props.name}
          </Text>

          <Text style={{
            textAlign: 'center',
            margin: 'auto',
            fontSize: '15px',
            display: 'flex',
            flex: '1'
          }}
          >
            {props.dateInit.toLocaleDateString()} {'-'}
            {props.dateEnd.toLocaleDateString()}
          </Text>

          <Icon
            type="caret-right"
            style={{
              marginTop: '1.1%',
              fontSize: '50px',
              color: 'rgb(255, 165, 0)',
              marginLeft: 'auto',
              display: 'flex'
            }}
          />
        </Row>
      </Button>

      <br></br>
    </>
  )
}
export default ElectionButton
