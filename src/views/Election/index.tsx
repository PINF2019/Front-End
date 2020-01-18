import {
  useOptionsElectionQuery,
  useVoteElectionMutation,
} from '@Generated/hooks'
import { Col, Layout, Row, Typography } from 'antd'
import { Formik } from 'formik'
import { Checkbox, Form, Radio, SubmitButton } from 'formik-antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import * as Yup from 'yup'
import wallpaper from '../../assets/Wallpaper2.png'
import './index.less'

const { Text } = Typography

const schema = Yup.object().shape({
  validate: Yup.boolean().oneOf([true]),
  candidate: Yup.string().required(),
})

const Election = () => {
  const { id } = useParams<{ id: string }>()
  const { data, loading } = useOptionsElectionQuery({ variables: { id } })
  const [vote] = useVoteElectionMutation()

  if (data) {
    return (
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ height: '100%' }}
      >
        <Col
          style={{
            width: '50%',
            height: '100%',
            textAlign: 'center',
          }}
        >
          <Layout
            style={{
              height: '100%',
              backgroundImage: `url(${wallpaper})`,
            }}
          >
            <Row
              type="flex"
              justify="center"
              // align="middle"
              style={{
                marginTop: '25%',
              }}
            >
              <Text strong style={{ fontSize: '30px', lineHeight: '100%' }}>
                Elección <br />{' '}
                {`${data?.election.description.substring(0, 100 - 3)}...`}
              </Text>
            </Row>
          </Layout>
        </Col>
        <Col
          style={{
            width: '50%',
            height: '100%',
          }}
        >
          <Row
            type="flex"
            justify="center"
            align="middle"
            style={{ height: '100%' }}
          >
            <Formik
              onSubmit={async values => {
                await vote({
                  variables: {
                    input: { candidates: [values.candidate], election: id },
                  },
                })
              }}
              initialValues={{ validate: false, candidate: '' }}
              initialErrors={{ validate: '', candidate: '' }}
              validateOnBlur={false}
              validationSchema={schema}
            >
              {() => (
                <Col>
                  <Form
                    style={{
                      // width: "50%",
                      // fontSize: "20px",
                      marginLeft: '20%',
                      // height: "100%"
                    }}
                  >
                    <Radio.Group name="candidate">
                      {data.election.candidates.map(election => (
                        <Radio
                          name="candidate"
                          value={election.id}
                          key={election.id}
                        >
                          {election.firstName} {election.lastName}
                        </Radio>
                      ))}
                    </Radio.Group>
                    <br />

                    <Row type="flex" style={{ flexDirection: 'column' }}>
                      <Row>
                        <Checkbox name="validate">Validar</Checkbox>
                      </Row>
                      <Row>
                        <SubmitButton>Votar</SubmitButton>
                      </Row>
                    </Row>
                  </Form>
                </Col>
              )}
            </Formik>
          </Row>
        </Col>
      </Row>
    )
  }
  if (loading) {
    return <div>Cargando...</div>
  }
  return <div>Error...</div>
}

export default Election
