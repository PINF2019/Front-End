import { useResultForElectionQuery } from '@Generated/hooks'
import 'ant-design-pro/dist/ant-design-pro.css'
import { Bar, Pie } from 'ant-design-pro/lib/Charts'
import { Col, Divider, Row, Table, Typography } from 'antd'
import React from 'react'
import { useParams } from 'react-router'


const { Text } = Typography

const columns = [
  {
    headerStyle: { textAlign: 'center' },
    title: 'CANDIDATO',
    dataIndex: 'candidato',
    key: 'candidato',
  },
  {
    title: 'PDVP',
    dataIndex: 'pdvp',
    key: 'pdvp',
  },
  {
    title: 'PNDVP',
    dataIndex: 'pndvp',
    key: 'pndvp',
  },
  {
    title: 'PDINVP',
    key: 'pdnivp',
    dataIndex: 'pdnivp',
  },
  {
    title: 'PAS',
    key: 'pas',
    dataIndex: 'pas',
  },
  {
    title: 'ALU',
    key: 'alu',
    dataIndex: 'alu',
  },
  {
    title: 'TOTAL',
    key: 'total',
    dataIndex: 'total',
  },
  {
    title: '% FINAL',
    key: 'final',
    dataIndex: 'final',
  },
]

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
                    Resultados de la elección de Delegados/as
                  </Text>

                  <Text style={{ textAlign: 'center', margin: 'auto', fontSize: '15px' }}>
                    <br />
                    {data.election.start.substring(8, 10)}/
                    {data.election.start.substring(5, 7)}/
                    {data.election.start.substring(0, 4)} -
                    {data.election.end.substring(8, 10)}/
                    {data.election.end.substring(5, 7)}/
                    {data.election.end.substring(0, 4)}
                  </Text>
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
                // marginLeft: "2%"
              }}
            >
              <Row style={{ width: '500%' }}>
                <Text strong style={{ fontSize: '20px', position: 'static' }}>
                  Datos globales
                </Text>
              </Row>
            </Divider>
           
            <div style={{ marginTop: '1%', marginLeft: '2%', fontSize: '18px' }}>
              <Row style={{ marginBottom: '0.5%' }} >
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
              <Row style={{ marginBottom: '0.5%' }} >
                <Col span={4}>
                  <Text strong>Votos en blanco:</Text>
                </Col>
                <Col span={4}>{data.election.results.whiteVotes}</Col>
              </Row>
              <Row style={{ marginBottom: '0.5%' }} >
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
                  {' '}
                  {(
                    (data.election.results.votesCast * 100) /
                    data.election.results.voters
                  ).toFixed(2)}
                  %
                </Col>
              </Row>
              <Row style={{ marginBottom: '0.5%' }} >
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
              <Table
                style={{
                  width: '93%',
                  marginLeft: '2%',
                }}
                columns={columns}
                dataSource={data.election.results.resultsByGroup.map(
                  ({ votes, candidate}) => ({
                    key: candidate.id,
                    candidato: `${candidate.lastName}, ${candidate.firstName}`,
                    pdvp: data.election.voteWeights[0].weight,
                    pndvp: data.election.voteWeights[1].weight,
                    pdnivp: data.election.voteWeights[2].weight,
                    pas: data.election.voteWeights[3].weight,
                    alu: data.election.voteWeights[4].weight,
                    total: votes,
                    final: `${((votes / (data.election.results.votesCast -
                    data.election.results.whiteVotes)) * 100).toFixed(2)  }%`,
                  })
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
                        <span style={{paddingLeft:"200%"}} dangerouslySetInnerHTML={{ __html: val }} />
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
                      width: '0.3%',
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
