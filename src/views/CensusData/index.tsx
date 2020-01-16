import { useCensusQuery } from '@Generated/hooks'
import { Card, Row, Typography } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import './index.less'

import moment from 'moment'

const { Title, Text } = Typography

const CensusData = () => {
  const { id } = useParams<{ id: string }>()
  const { data } = useCensusQuery({ variables: { id } })
  return (
    <Row className="RowGlo">
      <Row className="RowGlo2">
        <Row style={{ marginTop: '3%' }}>
          <Card className="card">
            <Title>
              <Text>Censo de {data?.election.description}</Text>
            </Title>
            <Text>{`${moment(data?.election.start).format('L')} ${moment(
              data?.election.end
            ).format('L')}`}</Text>
          </Card>
        </Row>
        <Row className="Rowtext">
          <Text strong style={{ fontSize: '30px', paddingTop: '50px' }}>
            Secretario:
          </Text>
          <ul>
            <li>
              {data?.election.secretary.lastName},{' '}
              {data?.election.secretary.firstName}
            </li>
          </ul>
          <Text strong style={{ fontSize: '30px', paddingTop: '50px' }}>
            Subsecretarios:
          </Text>
          <ul>
            {data?.election.delegates.map(({ firstName, lastName }) => (
              <li>{`${firstName} ${lastName}`}</li>
            ))}
          </ul>
          <Text strong style={{ fontSize: '30px', paddingTop: '50px' }}>
            Votantes:
          </Text>
          <ul>
            {data?.election.censuses.map(elec => (
              <Row>
                {elec.voters.map(vot => (
                  <li key={vot.firstName}>
                    <Text style={{ fontSize: '15px' }}>
                      {`${vot.lastName},${vot.firstName}`}
                    </Text>
                  </li>
                ))}
              </Row>
            ))}
          </ul>
        </Row>
      </Row>
    </Row>
  )
}

export default CensusData
