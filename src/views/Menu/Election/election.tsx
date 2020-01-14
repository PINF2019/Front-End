import { Button, Icon, Row, Typography } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'

const { Text } = Typography

type Props = {
  name: string
  dateInit: string
  dateEnd: string
  id: string
  href: string
}

const ElectionButton = (props: Props) => {
  const history = useHistory()

  return (
    <>
      <Button
        className="button"
        onClick={() => history.push(`${props.href}/${props.id}`)}
      >
        <Row className="RowCensusButton">
          <Text
            strong
            style={{ marginTop: 'auto', marginBottom: 'auto', flexShrink: 1 }}
          >
            {props.name.length > 30
              ? `${props.name.substring(0, 30 - 3)}...`
              : props.name}
          </Text>

          <Text style={{ textAlign: 'center', margin: 'auto' }}>
            {props.dateInit.substring(8, 10)}/{props.dateInit.substring(5, 7)}/
            {props.dateInit.substring(0, 4)} -{props.dateEnd.substring(8, 10)}/
            {props.dateEnd.substring(5, 7)}/{props.dateEnd.substring(0, 4)}
          </Text>

          <Icon
            type="caret-right"
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
export default ElectionButton
