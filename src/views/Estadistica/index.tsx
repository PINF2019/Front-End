import React from 'react'
import { Row, Typography, Table, Col, Card } from 'antd'
import { Bar, Pie } from 'ant-design-pro/lib/Charts'
import 'ant-design-pro/dist/ant-design-pro.css'

// import { useElectionNameQuery } from '@Generated/hooks'

const { Text } = Typography

const columns = [
  {
    width: '50',
    resizable: false,
    title: 'CANDIDATO',
    dataIndex: 'candidato',
    key: 'candidato'
  },
  {
    title: 'PDVP',
    dataIndex: 'pdvp',
    key: 'pdvp'
  },
  {
    title: 'PNDVP',
    dataIndex: 'pndvp',
    key: 'pndvp'
  },
  {
    title: 'PDINVP',
    key: 'pdnivp',
    dataIndex: 'pdnivp'
  },
  {
    title: 'PAS',
    key: 'pas',
    dataIndex: 'pas'
  },
  {
    title: 'ALU',
    key: 'alu',
    dataIndex: 'alu'
  },
  {
    title: 'TOTAL',
    key: 'total',
    dataIndex: 'total'
  },
  {
    title: '% FINAL',
    key: 'final',
    dataIndex: 'final',
    width: '50',
    resizable: false
  }
]

const datatable = [
  {
    key: '1',
    candidato: 'López Cala, kevin ',
    pdvp: 'x',
    pndvp: 'y',
    pdnivp: 'z',
    pas: 'w',
    alu: 'ñ',
    total: 'm',
    final: '52,48%'
  },
  {
    key: '2',
    candidato: 'Escribano Corrales, Raúl',
    pdvp: 'x',
    pndvp: 'y',
    pdnivp: 'z',
    pas: 'w',
    alu: 'ñ',
    total: 'm',
    final: '29,70%'
  },
  {
    key: '3',
    candidato: 'Soriano Roldán, Claudia',
    pdvp: 'x',
    pndvp: 'y',
    pdnivp: 'z',
    pas: 'w',
    alu: 'ñ',
    total: 'm',
    final: '17,82%'
  }
]

const data = [
  { x: 'López Cala, kevin   ', y: 5300 },
  { x: 'Escribano Corrales, Raúl   ', y: 3000 },
  { x: 'Soriano Roldán, Claudia   ', y: 1800 }
]

const Estadisticos = () => {
  return (
    <section id="target-pacing">
      <Row style={{ marginTop: '1%', marginBottom: '1%' }}>
        <Text strong style={{ fontSize: '20px' }}>
          Resultados de elección Delegados/as
          <br />
        </Text>{' '}
        <Text style={{ textAlign: 'center', margin: 'auto' }}>
          <br />
          {new Date().toLocaleDateString()} -{new Date().toLocaleDateString()}
        </Text>
      </Row>
      <Text strong style={{ fontSize: '15px', position: 'static' }}>
        Datos globales <br />
        <br />
        <Row>Número total de electores:</Row>
        <Row>Votos a candidaturas:</Row>
        <Row>Votos en blanco:</Row>
        <Row>votos nulos:</Row>
        <Row>Votos totales válidos:</Row>
        <Row>Participación:</Row>
        <Row>Abstención:</Row>
      </Text>{' '}
      <Text
        strong
        style={{
          fontSize: '15px',
          textAlign: 'left',
          position: 'static',
          paddingTop: '10px'
        }}>
        <Row>
          <br />
          <br />
          23399
        </Row>
        <Row>6562</Row>
        <Row>79</Row>
        <Row>103</Row>
        <Row>6641</Row>
        <Row>28,82%</Row>
        <Row>71,18%</Row>
      </Text>{' '}
      <Row>
        <br />
        <Table columns={columns} dataSource={datatable} pagination={false} />
        <br />
      </Row>
      <br />
      <br />
      <Card type="inner">
        <Row>
          <Col span={12}>
            <Bar style={{}} height={300} title="Total votos" data={data} />
          </Col>
          <Col
            span={12}
            style={{
              borderLeft: '1px solid #F0F2F5',
              paddingLeft: 24
            }}>
            <Pie
              hasLegend
              title="Total Budget"
              subTitle="Total Budget"
              total={() => (
                <span
                  dangerouslySetInnerHTML={{
                    __html: data.reduce(
                      (pre: any, now: { y: any }) => now.y + pre,
                      0
                    )
                  }}
                />
              )}
              data={data}
              valueFormat={val => (
                <span dangerouslySetInnerHTML={{ __html: val }} />
              )}
              height={256}
            />
          </Col>
        </Row>
      </Card>
    </section>
  )
}

export default Estadisticos