import { useGetElectoralProcessQuery } from '@Generated/hooks'
import { Button, Icon, Row, Typography } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'

const { Text } = Typography

type Props = {
  id: string
  name: string
  href: string
}

const ElectionButtonModificar = ({ id, name, href }: Props) => {
  const history = useHistory()
  const { data } = useGetElectoralProcessQuery({ variables: { id } })

  return (
    <>
      <Button
        // href={url}
        style={{
          backgroundColor: '#F0F0F0',
          marginTop: '2%',
          minWidth: '150%',
          minHeight: '63px',
          borderRadius: '12px',
          boxShadow: '0px 3px 3px grey',
        }}
      >
        <Row
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'space-between',
          }}
        >
          <Text strong style={{ marginTop: 'auto', marginBottom: 'auto' }}>
            {name.length > 30 ? `${name.substring(0, 30 - 3)}...` : name}
          </Text>
          <Row>
            <Icon
              type="edit"
              style={{
                marginTop: '1.1%',
                verticalAlign: 'middle',
                fontSize: '50px',
                color: '#FFA500',
                marginLeft: 'auto',
              }}
              onClick={() => {
                try {
                  if (data) {
                    if (data.electoralProcess.__typename === 'Election') {
                      history.push(
                        `/secretary/procesoElectoral/modificar/election/${id}`
                      )
                    } else {
                      history.push(
                        `/secretary/procesoElectoral/modificar/poll/${id}`
                      )
                    }
                  }
                } catch {
                  console.warn('Errors')
                }
              }}
            />
          </Row>
        </Row>
      </Button>

      <br />
    </>
  )
}
export default ElectionButtonModificar
