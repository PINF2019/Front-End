import { useElectoralProcessesQuery } from '@Generated/hooks'
import { Layout, Row, Typography } from 'antd'
import React from 'react'
import Background from '../../../assets/Wallpaper.png'
import ElectionButton from '../Election/election'

const { Text } = Typography
const MenuUser = () => {
  const { data, error } = useElectoralProcessesQuery()
  if (data) {
    return (
      <Layout
        style={{
          backgroundImage: `url(${Background})`,
          height: '100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Row justify="center" className="body" style={{ marginTop: '3%' }}>
          <Row style={{ marginBottom: '10%' }}>
            <Text strong style={{ fontSize: '30px' }}>
              Procesos Electorales pendientes
            </Text>
          </Row>
          <Row>
            {data.pendingElectoralProcesses.map(eprocess => (
              <ElectionButton
                name={eprocess.description}
                dateInit={eprocess.start}
                dateEnd={eprocess.end}
                id={eprocess.id}
                href={
                  eprocess.__typename === 'Election' ? 'election' : 'votacion'
                }
                key={eprocess.id}
              />
            ))}
          </Row>
        </Row>
      </Layout>
    )
  }
  // FIX: please remove this
  return <div>{JSON.stringify(error)}</div>
}

export default MenuUser
