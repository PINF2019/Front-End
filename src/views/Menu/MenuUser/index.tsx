import { useElectionsQuery } from '@Generated/hooks'
import { Layout, Row, Typography } from 'antd'
import React from 'react'
import Background from '../../../assets/Wallpaper.png'
import ElectionButton from '../Election/election'

const { Text } = Typography
// la interrogacion comprueba que no sea nulo
const MenuUser = () => {
  const { data, error } = useElectionsQuery()
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
          <Row className="layout" style={{ marginBottom: '10%' }}>
            <Text strong style={{ fontSize: '30px' }}>
              Votaciones pendientes
            </Text>
          </Row>
          <Row>
            {data.pendingElections.map(eprocess => (
              <ElectionButton
                name={eprocess.description}
                dateInit={eprocess.start}
                dateEnd={eprocess.end}
                id={eprocess.id}
                href="votacion"
              />
            ))}
          </Row>
        </Row>
      </Layout>
    )
  }
  return <div>{JSON.stringify(error)}</div>
}

export default MenuUser
