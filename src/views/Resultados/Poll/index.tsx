/* eslint-disable react/no-danger */
import { useResultForPollQuery } from '@Generated/hooks'
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

const votesByOption = (results: any[]) => {
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

const ResultsPoll = () => {
  const { id } = useParams<{ id: string }>()
  const { data, error } = useResultForPollQuery({ variables: { id } })
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
                    {data.poll.description}
                  </Text>
                  <Row>
                    <Text
                      style={{
                        textAlign: 'center',
                        margin: 'auto',
                        fontSize: '15px',
                      }}
                    >
                      {`${moment(data.poll.start).format('L')} - ${moment(
                        data.poll.end
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
                <Text strong style={{ fontSize: '18px', position: 'static' }}>
                  Datos globales
                </Text>
              </Row>
            </Divider>

            <div style={{ marginTop: '1%', marginLeft: '2%' }}>
              <Row align="middle">
                <Col span={4}>
                  <Text strong>Número total de electores:</Text>
                </Col>
                <Col span={4}>{data.poll.results.voters}</Col>
              </Row>
              <Row>
                <Col span={4}>
                  <Text strong>Votos a candidaturas:</Text>
                </Col>
                <Col span={4}>
                  {' '}
                  {data.poll.results.votesCast - data.poll.results.whiteVotes}
                </Col>
              </Row>
              <Row>
                <Col span={4}>
                  <Text strong>Votos en blanco:</Text>
                </Col>
                <Col span={4}>{data.poll.results.whiteVotes}</Col>
              </Row>
              <Row>
                <Col span={4}>
                  <Text strong>Votos totales válidos:</Text>
                </Col>
                <Col span={4}>{data.poll.results.votesCast}</Col>
              </Row>
              <Row>
                <Col span={4}>
                  <Text strong>Participación:</Text>
                </Col>
                <Col span={4}>
                  {(
                    (data.poll.results.votesCast * 100) /
                    data.poll.results.voters
                  ).toFixed(2)}
                  %
                </Col>
              </Row>
              <Row>
                <Col span={4}>
                  <Text strong>Abstención:</Text>
                </Col>
                <Col span={4}>
                  {(
                    ((data.poll.results.voters - data.poll.results.votesCast) *
                      100) /
                    data.poll.results.voters
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
                    Votos totales
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
                  data.poll.results.votesCast - data.poll.results.whiteVotes
                )}
                dataSource={votesByOption(data.poll.resultsByGroup.results)}
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
                            __html: data.poll.results.results
                              .map(({ votes, option }) => ({
                                x: option.text,
                                y: votes,
                              }))
                              .reduce(
                                (pre: any, now: { y: any }) => now.y + pre,
                                0
                              ),
                          }}
                        />
                      )}
                      data={data.poll.results.results.map(
                        ({ votes, option }) => ({
                          x: option.text,
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
                      data={data.poll.results.results.map(
                        ({ votes, option }) => ({
                          x: option.text,
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

export default ResultsPoll
