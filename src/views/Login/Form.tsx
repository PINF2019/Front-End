import { useLogInMutation } from '@Generated/hooks'
import { setAuthToken } from '@Utils/auth'
import { Button } from 'antd'
import { Formik } from 'formik'
import { Form, Input } from 'formik-antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import routes from '@Routes'
import './index.less'

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
        <Form style={{ marginTop: '5%' }}>
          <Form.Item name="uid" colon={false} label={<div style={{ color: "#206489", fontSize: '20px' }}>Usuario</div>}>
            <Input
              size="large"
              name="uid"
              autoComplete="username"
              placeholder="Usuario" />
          </Form.Item>
          <Form.Item name="password" colon={false} label={<div style={{ color: "#206489", fontSize: '20px' }}>Contraseña</div>}>
            <Input.Password
              size="large"
              name="password"
              autoComplete="current-password"
              placeholder="Contraseña"
            />
          </Form.Item>
          <Form.Item name="submit">
            <Button htmlType="submit" type="primary" block href="/pickrole">
              <div style={{fontSize: '20px'}}>Iniciar Sesión</div>
            </Button>
          </Form.Item>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
