import { Button, Icon, Row, Typography } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import './index.less'
import moment from 'moment'

const { Text } = Typography

type Props = {
  name: string
  dateInit: string
  dateEnd: string
  id: string
}

const CensusButton = ({ name, id, dateEnd, dateInit }: Props) => {
  const history = useHistory()

  return (
    <>
      <Button className="button" onClick={() => history.push(`census/${id}`)}>
        <Row className="RowCensusButton">
          <Text strong style={{ marginTop: 'auto', marginBottom: 'auto' }}>
            {name.length > 30 ? `${name.substring(0, 30 - 3)}...` : name}
          </Text>

          <Text style={{ textAlign: 'center', margin: 'auto' }}>
            {`${moment(dateInit).format('L')} ${moment(dateEnd).format('L')}`}
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
export default CensusButton
