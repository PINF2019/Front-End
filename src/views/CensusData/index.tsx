import { useCensusQuery } from '@Generated/hooks'
import { Card, Row, Typography } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import './index.less'

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
              <Text>Censo de {{ data }.data?.election.description}</Text>
            </Title>
            <Text>
              {'\n'}
              {`${{ data }.data?.election.start.substring(8, 10)}/${{
                data,
              }.data?.election.start.substring(5, 7)}/${{
                data,
              }.data?.election.start.substring(0, 4)}-${{
                data,
              }.data?.election.end.substring(8, 10)}/${{
                data,
              }.data?.election.end.substring(5, 7)}/${{
                data,
              }.data?.election.end.substring(0, 4)}`}
            </Text>
          </Card>
        </Row>
        <Row className="Rowtext">
          <Text strong style={{ fontSize: '30px', paddingTop: '50px' }}>
            Secretario:
          </Text>
          <ul>
            <li>
              {{ data }.data?.election.secretary.lastName},{' '}
              {{ data }.data?.election.secretary.firstName}
            </li>
          </ul>
          <Text strong style={{ fontSize: '30px', paddingTop: '50px' }}>
            Subsecretarios:
          </Text>
          <ul>
            <li>
              {' '}
              {{ data }.data?.election.delegates.map(
                del => (del.lastName, del.firstName)
              )}
            </li>
          </ul>
          <Text strong style={{ fontSize: '30px', paddingTop: '50px' }}>
            Votantes:
          </Text>
          <ul>
            {{ data }.data?.election.censuses.map(elec => (
              <Row>
                {elec.voters.map(vot => (
                  <li>
                    <Text style={{ fontSize: '15px' }}>
                      {`${vot.lastName},${vot.firstName}`}{' '}
                    </Text>{' '}
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
