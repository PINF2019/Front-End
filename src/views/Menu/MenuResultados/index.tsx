import { usePastElectionResultsQuery } from '@Generated/hooks'
import { Row, Typography } from 'antd'
import React from 'react'
import ElectionButton from '../Election/election'

const { Text } = Typography
// la interrogacion comprueba que no sea nulo
const MenuResultados = () => {
  const data = usePastElectionResultsQuery()

  return (
    <Row justify="center" className="body" style={{ marginTop: '3%' }}>
          <Row className="layout" style={{ marginBottom: '10%' }}>
            <Text strong style={{ fontSize: "30px" }}>
              Procesos Electorales finalizados
            </Text>
          </Row>
      <Row>
        {data.data?.electoralProcesses.map(eprocess => {
          if (eprocess.__typename === 'Election') {
            return (
              <ElectionButton
                name={eprocess.description}
                dateInit={eprocess.start}
                dateEnd={eprocess.end}
                id={eprocess.id}
                href="resultados/election"
              />
            )
          }
          return (
            <ElectionButton
              name={eprocess.description}
              dateInit={eprocess.start}
              dateEnd={eprocess.end}
              id={eprocess.id}
              href="resultados/poll"
            />
          )
        })}
      </Row>
    </Row>
  )
}

export default MenuResultados
