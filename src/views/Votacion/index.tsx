import { useOptionsQuery, useVotePollMutation } from '@Generated/hooks'
import routes from '@Routes'
import { Col, Layout, Row, Typography } from 'antd'
import { Formik } from 'formik'
import { Checkbox, Form, Radio, SubmitButton } from 'formik-antd'
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import * as Yup from 'yup'
import wallpaper from '../../assets/Wallpaper2.png'
import './index.less'

const { Text } = Typography

const schema = Yup.object().shape({
  validate: Yup.boolean().oneOf([true]),
  option: Yup.string().required(),
})

const Votacion = () => {
  const { id } = useParams<{ id: string }>()
  const { data, loading } = useOptionsQuery({ variables: { id } })
  const [vote] = useVotePollMutation()

  const history = useHistory()

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
              style={{
                height: "100%",
                alignContent: "center"
              }}
            >
              <Text strong style={{ fontSize: '30px', lineHeight: '100%' }}>
                Votación <br />{' '}
                {`${data?.poll.description.substring(0, 100 - 3)}...`}
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
                const { data: data2, errors } = await vote({
                  variables: { input: { options: [values.option], poll: id } },
                })
                if (data2) {
                  history.push(routes.success)
                }
                if (errors) {
                  history.push(routes.alreadyvoted)
                }
              }}
              initialValues={{ validate: false, option: '' }}
              initialErrors={{ validate: '', option: '' }}
              validateOnBlur={false}
              validationSchema={schema}
            >
              {() => (
                <Col style={{ width: "100%" }}>
                  <Form
                    style={{
                      marginLeft: '20%',
                      width: "50%"
                    }}
                  >
                    <Radio.Group name="option">
                      {data.poll.options.map(poll => (
                        <Radio
                          name="option"
                          style={{ fontSize: "20px" }}
                          value={poll.id}
                          key={poll.id}>
                          {poll.text}
                        </Radio>
                      ))}
                    </Radio.Group>
                    <br />

                    <Row type="flex" style={{ flexDirection: 'row', marginTop: "5%" }}>
                      <Row>
                        <Checkbox name="validate" style={{ fontSize: "15px" }}>Validar elección</Checkbox>
                        <SubmitButton style={{ fontSize: "15px" }}>Votar</SubmitButton>
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

export default Votacion
