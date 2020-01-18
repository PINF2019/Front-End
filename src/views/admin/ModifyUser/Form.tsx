import {
  useCollegiateBodiesQuery,
  useModifyUserMutation,
} from '@Generated/hooks'
import { Button, Card, Typography, Row } from 'antd'
import { Field, Formik } from 'formik'
import { Form, Input, SubmitButton } from 'formik-antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import routes from '@Routes'

const { Text } = Typography

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Nombre requerido.'),
  lastName: Yup.string().required('Apellidos requerido.'),
})

type Props = {
  id: string
  name: string
  lastnames: string
  sex: string
  rol: string
  colegiateBody: string
}

const ModifyUserForm = ({
  name,
  lastnames,
  rol,
  colegiateBody,
  sex,
  id,
}: Props) => {
  const [modifyUser] = useModifyUserMutation()
  const history = useHistory()
  const { data } = useCollegiateBodiesQuery()

  const initialValues = {
    firstName: name,
    lastName: lastnames,
    roles: rol,
    colegiateBody,
    genre: sex,
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (input: any) => {
        try {
          const { data: res } = await modifyUser({ variables: { input, id } })
          if (res) {
            history.replace(routes.usuarioModificado)
          }
        } catch {
          /* const message = 'Usuario Incorrectos'
          actions.setErrors({ name: message }) */
        }
      }}
    >
      {() => (
        <Form>
          <Card className="card2">
            <Text strong style={{ fontSize: '25px' }}>
              Datos
            </Text>
          </Card>
          <Form.Item name="firstName">
            <p style={{ fontSize: '20px', marginTop: "5%" }}>
              <Row>
                <strong>Nombre</strong>
              </Row>
              <Row>
                <Input
                  name="firstName"
                  autoComplete="nombre"
                  placeholder={name}
                  style={{ width: "50%" }}
                />
              </Row>
            </p>
          </Form.Item>
          <Form.Item name="lastName">
            <p style={{ fontSize: '20px' }}>
              <Row>
                <strong>Apellidos</strong>
              </Row>
              <Row>
                <Input
                  name="lastName"
                  autoComplete="lastName"
                  placeholder={lastnames}
                  style={{ width: "50%" }}
                />
              </Row>
            </p>
          </Form.Item>
          <Form.Item name="genre">
            <p style={{ fontSize: '20px' }}>
              <strong style={{ marginRight: "5%" }}>Género:</strong>
              <Field as="select" placeholder={sex} name="genre">
                <option value="MALE">Masculino</option>
                <option value="FEMALE">Femenino</option>
                <option value="OTHER">Otro</option>
              </Field>
            </p>
          </Form.Item>
          <Form.Item name="roles">
            <p style={{ fontSize: '20px' }}>
              <strong style={{ marginRight: "5%" }}>Rol:</strong>
              <Field as="select" placeholder={rol} name="roles">
                <option value="VOTER">Elector</option>
                <option value="SECRETARY">Secretario</option>
                <option value="ADMIN">Administrador</option>
              </Field>
            </p>
          </Form.Item>
          <Form.Item name="colegiateBody">
            <p style={{ fontSize: '20px' }}>
              <strong style={{ marginRight: "5%" }}>Órgano colegiado:</strong>
              <Field
                as="select"
                placeholder={colegiateBody}
                name="colegiateBody"
              >
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
              Modificar usuario
            </SubmitButton>
          </Form.Item>
        </Form>
      )}
    </Formik>
  )
}

export default ModifyUserForm
