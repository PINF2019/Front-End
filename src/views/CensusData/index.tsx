import { useCensusQuery } from '@Generated/hooks'
import { Card, Row, Typography } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import './index.less'

import moment from 'moment'

const { Title, Text } = Typography

const CensusData = () => {
  const { id } = useParams<{ id: string, type: string }>()
  const { data } = useCensusQuery({ variables: { id } })

  return (
    <Row className="RowGlo">
      <Row className="RowGlo2">
        <Row style={{ marginTop: '3%' }}>
          <Card className="card">
            <Title>
              <Text>Censo de {data?.electoralProcess.description}</Text>
            </Title>
            <Text style={{ fontSize: "20px" }}>{`${moment(data?.electoralProcess.start).format('L')} - ${moment(
              data?.electoralProcess.end
            ).format('L')}`}</Text>
          </Card>
        </Row>
        <Row className="Rowtext">
          <Text strong style={{ fontSize: '30px', paddingTop: '10%', marginBottom: "2%" }}>
            Secretario:
          </Text>
          <ul>
            <li style={{ fontSize: "20px" }}>
              {data?.electoralProcess.secretary.lastName},{' '}
              {data?.electoralProcess.secretary.firstName}
            </li>
          </ul>
          <Text strong style={{ fontSize: '30px', paddingTop: '1%' }}>
            Subsecretarios:
          </Text>
          <ul style={{ marginTop: "1%", marginBottom: "3%" }}>
            {data?.electoralProcess.delegates.map(({ firstName, lastName }) => (
              <li style={{ fontSize: "20px" }}>
                {`${firstName}, ${lastName}`}
              </li>
            ))}
          </ul>
          <Text strong style={{ fontSize: '30px', paddingTop: '1%' }}>
            Votantes:
          </Text>
          <ul style={{ marginTop: "1%", marginBottom: "3%" }}>
            {data?.electoralProcess.censuses.map(elec => (
              <Row>
                {elec.voters.map(vot => (
                  <li key={vot.firstName}>
                    <Text style={{ fontSize: '20px' }}>
                      {`${vot.lastName}, ${vot.firstName}`}
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
