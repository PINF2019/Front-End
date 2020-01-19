/* eslint-disable react/no-danger */
import { useResultForElectionQuery } from '@Generated/hooks'
import 'ant-design-pro/dist/ant-design-pro.css'
import { Bar, Pie } from 'ant-design-pro/lib/Charts'
import { Col, Divider, Row, Table, Typography } from 'antd'
import React from 'react'
import { useParams } from 'react-router'
import _ from 'lodash'
import moment from 'moment'
import { ColumnProps } from 'antd/lib/table'

const { Text } = Typography

const columns = (totalVotes: number): ColumnProps<any>[] => [
  {
    title: 'CANDIDATO',
    dataIndex: 'candidate',
    key: 'candidate',
    render: candidate => `${candidate.firstName} ${candidate.lastName}`,
  },
  {
    title: `PDVP`,
    dataIndex: 'PDVP',
    key: 'PDVP',
  },
  {
    title: `PNDVP`,
    dataIndex: 'PNDVP',
    key: 'PNDVP',
  },
  {
    title: `PDINVP`,
    key: 'PDINVP',
    dataIndex: 'PDINVP',
  },
  {
    title: `PAS`,
    key: 'PAS',
    dataIndex: 'PAS',
  },
  {
    title: `ALU`,
    key: 'ALU',
    dataIndex: 'ALU',
  },
  {
    title: 'TOTAL',
    render: (_t, record) => {
      return Object.values<any>(record).reduce(
        (prev, current) =>
          typeof current === 'number' ? current + prev : prev,
        0
      )
    },
  },
  {
    title: '% FINAL',
    render: (_t, record) =>
      `${Object.values<any>(_.omit(record, ['candidate']))
        .reduce((prev, value) => (value / totalVotes) * 100 + prev, 0)
        .toFixed(2)}%`,
  },
]

const columnsPond = (voteWeights: {
  [key: string]: number
}): ColumnProps<any>[] => [
  {
    title: 'CANDIDATO',
    dataIndex: 'candidate',
    key: 'candidate',
    render: candidate => `${candidate.firstName} ${candidate.lastName}`,
  },
  {
    title: `PDVP (${voteWeights.PDVP} %)`,
    dataIndex: 'PDVP',
    key: 'PDVP',
  },
  {
    title: `PNDVP (${voteWeights.PNDVP} %)`,
    dataIndex: 'PNDVP',
    key: 'PNDVP',
  },
  {
    title: `PDINVP  (${voteWeights.PDINVP} %)`,
    key: 'PDINVP',
    dataIndex: 'PDINVP',
  },
  {
    title: `PAS(${voteWeights.PAS} %)`,
    key: 'PAS',
    dataIndex: 'PAS',
  },
  {
    title: `ALU (${voteWeights.ALU} %)`,
    key: 'ALU',
    dataIndex: 'ALU',
  },
  {
    title: 'TOTAL',
    render: (_t, record) => {
      return Object.values<any>(record).reduce(
        (prev, current) =>
          typeof current === 'number' ? current + prev : prev,
        0
      )
    },
  }
]

const votesByColegiate = (results: any[]) => {
  const grouped = Object.values(
    _.groupBy(results, result => result.candidate.id)
  )
  return grouped.map(inner =>
    inner.reduce(
      (prev, current) => ({
        [current.group]: current.votes,
        candidate: current.candidate,
        ...prev,
      }),
      {}
    )
  )
}

const votesByColegiatePond = (results: any[], voteWeights: any[]) => {
  const grouped = Object.values(
    _.groupBy(results, result => result.candidate.id)
  )
  return grouped.map(inner =>
    inner.reduce(
      (prev, current) => ({
        [current.group]: (current.votes * voteWeights[current.group]) / 100,
        candidate: current.candidate,
        ...prev,
      }),
      {}
    )
  )
}

const voteWeightsToObject = (voteWeights: any[]) =>
  voteWeights.reduce(
    (prev, current) => ({ [current.group]: current.weight, ...prev }),
    {}
  )

const ResultsElection = () => {
  const { id } = useParams<{ id: string }>()
  const { data, error } = useResultForElectionQuery({ variables: { id } })

  if (data) {
    return (
      <section id="target-pacing">
        <Row
          style={{
            height: '100%',
            backgroundColor: '#ffffff',
          }}
        >
          <Row
            style={{
              height: '100%',
              backgroundColor: '#ffffff',
              marginLeft: '3%',
            }}
          >
            <Row style={{ marginTop: '4%', marginBottom: '3%', width: '100%' }}>
              <Divider
                type="vertical"
                style={{
                  height: '50%',
                  width: '0.2%',
                  borderRadius: '20%',
                  backgroundColor: '#206489',
                }}
              >
                <Row style={{ width: '500%' }}>
                  <Text strong style={{ fontSize: '25px' }}>
                    {data.election.description}
                  </Text>
                  <Row>
                    <Text
                      style={{
                        textAlign: 'center',
                        margin: 'auto',
                        fontSize: '15px',
                      }}
                    >
                      {`${moment(data.election.start).format('L')} - ${moment(
                        data.election.end
                      ).format('L')}`}
                    </Text>
                  </Row>
                </Row>
              </Divider>
            </Row>
            <Divider
              type="vertical"
              style={{
                height: '3%',
                width: '0.2%',
                borderRadius: '20%',
                backgroundColor: '#FFA500',
              }}
            >
              <Row style={{ width: '500%' }}>
                <Text strong style={{ fontSize: '20px', position: 'static' }}>
                  Datos globales
                </Text>
              </Row>
            </Divider>

            <div
              style={{ marginTop: '1%', marginLeft: '2%', fontSize: '18px' }}
            >
              <Row style={{ marginBottom: '0.5%' }}>
                <Col span={4}>
                  <Text strong>Número total de electores:</Text>
                </Col>
                <Col span={4}>{data.election.results.voters}</Col>
              </Row>
              <Row style={{ marginBottom: '0.5%' }}>
                <Col span={4}>
                  <Text strong>Votos a candidaturas:</Text>
                </Col>
                <Col span={4}>
                  {data.election.results.votesCast -
                    data.election.results.whiteVotes}
                </Col>
              </Row>
              <Row style={{ marginBottom: '0.5%' }}>
                <Col span={4}>
                  <Text strong>Votos en blanco:</Text>
                </Col>
                <Col span={4}>{data.election.results.whiteVotes}</Col>
              </Row>
              <Row style={{ marginBottom: '0.5%' }}>
                <Col span={4}>
                  <Text strong>Votos totales válidos:</Text>
                </Col>
                <Col span={4}>{data.election.results.votesCast}</Col>
              </Row>
              <Row style={{ marginBottom: '0.5%' }}>
                <Col span={4}>
                  <Text strong>Participación:</Text>
                </Col>
                <Col span={4}>
                  {(
                    (data.election.results.votesCast * 100) /
                    data.election.results.voters
                  ).toFixed(2)}
                  %
                </Col>
              </Row>
              <Row style={{ marginBottom: '0.5%' }}>
                <Col span={4}>
                  <Text strong>Abstención:</Text>
                </Col>
                <Col span={4}>
                  {(
                    ((data.election.results.voters -
                      data.election.results.votesCast) *
                      100) /
                    data.election.results.voters
                  ).toFixed(2)}
                  %
                </Col>
              </Row>
            </div>

            <Row
              style={{
                marginTop: '6%',
                marginBottom: '8%',
              }}
            >
              <Divider
                type="vertical"
                style={{
                  height: '3%',
                  width: '0.2%',
                  borderRadius: '20%',
                  backgroundColor: '#FFA500',
                }}
              >
                <Row style={{ width: '500%' }}>
                  <Text strong style={{ fontSize: '20px' }}>
                    Votos por candidaturas
                  </Text>
                </Row>
              </Divider>
              <Table
                style={{
                  width: '93%',
                  marginLeft: '2%',
                  marginTop: '2%',
                }}
                columns={columns(
                  data.election.results.votesCast -
                    data.election.results.whiteVotes
                )}
                dataSource={votesByColegiate(
                  data.election.resultsByGroup.results
                )}
                pagination={false}
                bordered
              />
            </Row>

            <Row
              style={{
                marginTop: '6%',
                marginBottom: '8%',
              }}
            >
              <Divider
                type="vertical"
                style={{
                  height: '3%',
                  width: '0.2%',
                  borderRadius: '20%',
                  backgroundColor: '#FFA500',
                }}
              >
                <Row style={{ width: '500%' }}>
                  <Text strong style={{ fontSize: '20px' }}>
                    Votos ponderados por candidatura
                  </Text>
                </Row>
              </Divider>
              <Table
                style={{
                  width: '93%',
                  marginLeft: '2%',
                  marginTop: '2%',
                }}
                columns={columnsPond(
                  voteWeightsToObject(data.election.voteWeights)
                )}
                dataSource={votesByColegiatePond(
                  data.election.resultsByGroup.results,
                  voteWeightsToObject(data.election.voteWeights)
                )}
                pagination={false}
                bordered
              />
            </Row>

            <Row justify="center" style={{ marginBottom: '4%' }}>
              <Col
                span={12}
                style={{
                  justifyContent: 'center',
                  width: '45%',
                }}
              >
                <Col
                  style={{
                    width: '90%',
                  }}
                >
                  <Divider
                    type="vertical"
                    style={{
                      height: '3%',
                      width: '0.4%',
                      borderRadius: '20%',
                      backgroundColor: '#FFA500',
                    }}
                  >
                    <Row style={{ width: '500%' }}>
                      <Text strong style={{ fontSize: '18px' }}>
                        Porcentaje de votos
                      </Text>
                    </Row>
                  </Divider>
                  <Row style={{ marginTop: '5%' }}>
                    <Pie
                      hasLegend
                      title="Votos"
                      subTitle="Votos"
                      total={() => (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: data.election.results.results
                              .map(({ votes, candidate }) => ({
                                x: `${candidate.lastName}, ${candidate.firstName}`,
                                y: votes,
                              }))
                              .reduce(
                                (pre: any, now: { y: any }) => now.y + pre,
                                0
                              ),
                          }}
                        />
                      )}
                      data={data.election.results.results.map(
                        ({ votes, candidate }) => ({
                          x: `${candidate.lastName}, ${candidate.firstName}`,
                          y: votes,
                        })
                      )}
                      valueFormat={val => (
                        <span
                          style={{ paddingLeft: '200%' }}
                          dangerouslySetInnerHTML={{ __html: val }}
                        />
                      )}
                      height={256}
                    />
                  </Row>
                </Col>
              </Col>
              <Col span={12} style={{ width: '45%', marginLeft: '10%' }}>
                <Col
                  style={{
                    width: '90%',
                  }}
                >
                  <Divider
                    type="vertical"
                    style={{
                      height: '3%',
                      width: '0.4%',
                      borderRadius: '20%',
                      backgroundColor: '#FFA500',
                    }}
                  >
                    <Row style={{ width: '500%' }}>
                      <Text strong style={{ fontSize: '18px' }}>
                        Total de votos
                      </Text>
                    </Row>
                  </Divider>
                  <Row style={{ marginTop: '5%' }}>
                    <Bar
                      style={{}}
                      height={300}
                      title=""
                      data={data.election.results.results.map(
                        ({ votes, candidate }) => ({
                          x: `${candidate.lastName}, ${candidate.firstName}`,
                          y: votes,
                        })
                      )}
                    />
                  </Row>
                </Col>
              </Col>
            </Row>
          </Row>
        </Row>
      </section>
    )
  }
  return <div>{JSON.stringify(error)}</div>
}

export default ResultsElection
