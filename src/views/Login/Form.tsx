import { useLogInMutation } from '@Generated/hooks'
import { setAuthToken } from '@Utils/auth'
import { Button } from 'antd'
import { Formik } from 'formik'
import { Form, Input } from 'formik-antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import routes from '@Routes'

const initialValues = {
  uid: '',
  password: ''
}

const validationSchema = Yup.object().shape({
  uid: Yup.string().required(),
  password: Yup.string().required()
})

const LoginForm = () => {
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
          const message = 'Usuario o Contraseña Incorrectos'
          actions.setErrors({ uid: message, password: message })
        }
      }}>
      {() => (
        <Form>
          <Form.Item name="uid">
            <Input name="uid" autoComplete="username" placeholder="Usuario" />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password
              name="password"
              autoComplete="current-password"
              placeholder="Contraseña"
            />
          </Form.Item>
          <Form.Item name="submit">
            <Button htmlType="submit" type="primary">
              Iniciar Sesión
            </Button>
          </Form.Item>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
