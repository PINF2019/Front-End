import { useLogInMutation } from '@Generated/hooks'
import routes from '@Routes'
import { setAuthToken } from '@Utils/auth'
import { Button, Card, Typography } from 'antd'
import { Field, Formik } from 'formik'
import { Form, Input } from 'formik-antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

const { Text } = Typography
const initialValues = {
  uid: '',
  password: '',
  /* password: '',
  name: '',
  lastname: '',
  rol: '',
  org: '',
  sex: '' */
}
/* Validacion de los datos del formulario, cadena, quitar espacios, expresion regular, mensaje */
const validationSchema = Yup.object().shape({
  uid: Yup.string()
    .trim()
    .matches(/^u(?:[0-9]{8}|[xyz][0-9]{7})$/, 'Formato erroneo.')
    .required(),
})
/* password: String
  firstName: String
  lastName: String
  roles: [Role!]
  colegiateBody: ID
  genre: Genre */
type Props = {
  id: string
  name: string
  lastnames: string
  sex: string
  rol: string
}

/* Para indicar que input/datos vamos a mandarle al servidor y que nos devuelve usamos "useLogInMutation()", solo hay que crear /src/graphql/documents/<nombre-pag>.gql, login.gql tiene comentarios */
const ModifyUserForm = (props: Props) => {
  // const [modifyUser] = useModifyUserMutation()
  const [logIn] = useLogInMutation()
  const history = useHistory()

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (input, actions) => {
        try {
          const { data } = await logIn({ variables: { input } })
          if (data) {
            setAuthToken(data.login.accessToken)
            history.replace(routes.base)
          }
        } catch {
          const message = 'Usuario Incorrectos'
          actions.setErrors({ uid: message, password: message })
        }
      }}
    >
      {/*
      onSubmit={async (input: any, id: any, actions: any) => {
        try {
          const { data } = await modifyUser({ variables: { input, id } })
          if (data) { 
            history.replace(routes.base) 
          }
        } catch {
          const message = 'No se pudo modificar el usuario'
          actions.setErrors({ password: message })
        }
      }} */}

      {() => (
        <Form>
          <Card className="card2">
            <Text strong style={{ fontSize: '25px' }}>
              Datos
            </Text>
          </Card>
          {/* <Form.Item name="nif">
          <p style={{ fontSize: "20px" }}><strong >NIF/NIE</strong><Input name="nif" value={props.nif} autoComplete="NIF/NIE" placeholder="NIF/NIE" /></p>
          </Form.Item> */}
          <Form.Item name="password">
            <p style={{ fontSize: '20px' }}>
              <strong>Contraseña</strong>
              <Input.Password
                name="password"
                autoComplete="current-password"
                placeholder="Contraseña"
              />
            </p>
          </Form.Item>
          <Form.Item name="name">
            <p style={{ fontSize: '20px' }}>
              <strong>Nombre</strong>
              <Input
                name="name"
                value={props.name}
                autoComplete="nombre"
                placeholder="Nombre"
              />
            </p>
          </Form.Item>
          <Form.Item name="lastnames">
            <p style={{ fontSize: '20px' }}>
              <strong>Apellidos</strong>
              <Input
                name="lastnames"
                value={props.lastnames}
                autoComplete="lastnames"
                placeholder="Apellidos"
              />
            </p>
          </Form.Item>
          <Form.Item name="sex">
            <p style={{ fontSize: '20px' }}>
              <strong>Género</strong>
              <Field as="select" value={props.sex} name="sex">
                <option value="MALE">Masculino</option>
                <option value="FEMALE">Femenino</option>
                <option value="OTHER">Otro</option>
              </Field>
            </p>
          </Form.Item>
          {/* <Form.Item name="email">
            <p>Correo electrónico<Input name="email" autoComplete="useremail" placeholder="Correo electrónico" /></p>
            </Form.Item> */}
          <Form.Item name="rol">
            <p style={{ fontSize: '20px' }}>
              <strong>Rol</strong>
              <Field as="select" value={props.rol} name="rol">
                <option value="VOTER">Elector</option>
                <option value="SECRETARY">Secretario</option>
                <option value="ADMIN">Administrador</option>
              </Field>
            </p>
          </Form.Item>
          <Form.Item name="org">
            <p style={{ fontSize: '20px' }}>
              <strong>Órgano colegiado</strong>
              <Field as="select" name="org">
                <option value="opcion1">opcion1</option>
                <option value="opcion2">opcion2</option>
                <option value="opcion3">opcion3</option>
              </Field>
            </p>
          </Form.Item>
          <Form.Item name="submit">
            <Button>
              <a href="/admin">Cancelar</a>
            </Button>
            <Button htmlType="submit" type="primary">
              Modificar usuario
            </Button>
          </Form.Item>
        </Form>
      )}
    </Formik>
  )
}

export default ModifyUserForm
