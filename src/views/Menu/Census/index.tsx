import { useElectionsQuery, usePollsQuery } from '@Generated/hooks'
import { Layout, Row, Typography } from 'antd'
import React from 'react'
import Background from '../../../assets/Wallpaper.png'
import CensusButton from './CensusButton'
import './index.less'

const { Text } = Typography

const Census = () => {
  const data = useElectionsQuery()
  const data2 = usePollsQuery()

  return (
    <Layout
      style={{
        backgroundImage: `url(${Background})`,
        height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'auto'
      }}
    >
      <Row
        justify="center"
        className="body"
        style={{ marginTop: '3%' }}
      >
        <Row style={{ marginBottom: '10%' }}>
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
          {
            data2.data?.polls.map(vot => (
              <CensusButton
                name = {vot.description}
                dateInit = {vot.start}
                dateEnd = {vot.end}
                id = {vot.id} 
              />            
              )

            )
          }
        </Row>
      </Row>
    </Layout>
  )
}

export default Census
