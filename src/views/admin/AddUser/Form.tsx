import {
  useCreateUserMutation,
  useCollegiateBodiesQuery,
} from '@Generated/hooks'
import { Button, Typography, Card, Row } from 'antd'
import { Formik, Field } from 'formik'
import { Form, Input, SubmitButton } from 'formik-antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import routes from '@Routes'

const { Text } = Typography

const validationSchema = Yup.object().shape({
  uid: Yup.string()
    .trim()
    .matches(/^u(?:[0-9]{8}|[xyz][0-9]{7})$/, 'Formato erroneo.')
    .required('Usuario requerido.'),
  password: Yup.string().required('Contraseña requerida.'),
  // passwordConfirm: Yup.string().oneOf([Yup.ref('password')], "Las contraseñas no coinciden.").required('Repetir contraseña requerida.'),
  dni: Yup.string().required('NIF/NIE requerido.'),
  firstName: Yup.string().required('Nombre requerido.'),
  lastName: Yup.string().required('Apellidos requerido.'),
})

const AddUserForm = () => {
  const [createUser] = useCreateUserMutation()
  const history = useHistory()
  const { data, loading, error } = useCollegiateBodiesQuery()

  const initialValues = {
    uid: '',
    dni: '',
    password: '',
    firstName: '',
    lastName: '',
    roles: '',
    collegiateBody: '',
    genre: '',
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (data) {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (input: any) => {
          const { data } = await createUser({ variables: { input } })
          if (data) {
            history.replace(routes.usuarioCreado)
          }
        }}
      >
        {() => (
          <Form style={{ width: "100%" }}>
            <Card className="card2">
              <Text strong style={{ fontSize: '25px' }}>
                Datos
              </Text>
            </Card>
            <Form.Item name="uid">
              <p style={{ fontSize: '20px', marginTop: "2%" }}>
                <Row>
                  <strong>Usuario</strong>{' '}
                </Row>
                <Row>
                  <Input name="uid" autoComplete="uid" placeholder="Usuario" style={{ width: "50%" }} />
                </Row>
              </p>
            </Form.Item>
            <Form.Item name="password">
              <p style={{ fontSize: '20px' }}>
                <Row>
                  <strong>Contraseña</strong>
                </Row>
                <Row>
                  <Input.Password
                    name="password"
                    autoComplete="current-password"
                    placeholder="Contraseña"
                    style={{ width: "50%" }}
                  />
                </Row>
              </p>
            </Form.Item>
            <Form.Item name="dni">
              <p style={{ fontSize: '20px' }}>
                <Row>
                  <strong>NIF/NIE</strong>{' '}
                </Row>
                <Row>
                  <Input
                    name="dni"
                    autoComplete="NIF/NIE"
                    placeholder="NIF/NIE"
                    style={{ width: "50%" }}
                  />
                </Row>
              </p>
            </Form.Item>
            <Form.Item name="firstName">
              <p style={{ fontSize: '20px' }}>
                <Row>
                  <strong>Nombre</strong>{' '}
                </Row>
                <Row>
                  <Input
                    name="firstName"
                    autoComplete="username"
                    placeholder="Nombre"
                    style={{ width: "50%" }}
                  />
                </Row>
              </p>
            </Form.Item>
            <Form.Item name="lastName">
              <p style={{ fontSize: '20px' }}>
                <Row>
                  <strong>Apellidos</strong>{' '}
                </Row>
                <Row>
                  <Input
                    name="lastName"
                    autoComplete="lastnames"
                    placeholder="Apellidos"
                    style={{ width: "50%" }}
                  />
                </Row>
              </p>
            </Form.Item>
            <Form.Item name="genre">
              <p style={{ fontSize: '20px' }}>
                <strong style={{ marginRight: "5%" }}>Género:</strong>
                <Field as="select" placeholder="MALE" name="genre">
                  <option value="MALE">Masculino</option>
                  <option value="FEMALE">Femenino</option>
                  <option value="OTHER">Otro</option>
                </Field>
              </p>
            </Form.Item>
            <Form.Item name="roles">
              <p style={{ fontSize: '20px' }}>
                <strong style={{ marginRight: "5%" }}>Rol:</strong>
                <Field as="select" placeholder="VOTER" name="roles">
                  <option value="VOTER">Elector</option>
                  <option value="SECRETARY">Secretario</option>
                  <option value="ADMIN">Administrador</option>
                </Field>
              </p>
            </Form.Item>
            <Form.Item name="collegiateBody">
              <p style={{ fontSize: '20px' }}>
                <strong style={{ marginRight: "5%" }}>Órgano colegiado:</strong>
                <Field as="select" name="collegiateBody">
                  {data?.collegiateBodies.map(elec => (
                    <option value={elec.id}>{elec.name}</option>
                  ))}
                </Field>
              </p>
            </Form.Item>

            <Form.Item name="submit">
              <Button>
                <a href="/admin">Cancelar</a>
              </Button>
              <SubmitButton htmlType="submit" type="primary">
                Añadir usuario
              </SubmitButton>
            </Form.Item>
          </Form>
        )}
      </Formik>
    )
  }
  return <div>{JSON.stringify(error)}</div>
}

export default AddUserForm
