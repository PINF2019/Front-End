import { useElectionsQuery } from '@Generated/hooks'
import { Layout, Row, Typography } from 'antd'
import React from 'react'
import CensusButton from './CensusButton'
import './index.less'

const { Text } = Typography

const Census = () => {
  const data = useElectionsQuery()

  return (
    <Layout
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#ffffff',
        overflow: 'auto',
      }}
    >
      <Row
        justify="center"
        className="body"
        style={{ marginTop: '3%', backgroundColor: 'white' }}
      >
        <Row className="layout" style={{ marginBottom: '10%' }}>
          <Text strong style={{ fontSize: '30px' }}>
            Seleccione qué censo quiere conocer
          </Text>
        </Row>
        <Row>
          {data.data?.pendingElections.map(elec => (
            <CensusButton
              name={elec.description}
              dateInit={elec.start}
              dateEnd={elec.end}
              id={elec.id}
            />
          ))}
        </Row>
      </Row>
    </Layout>
  )
}

export default Census
