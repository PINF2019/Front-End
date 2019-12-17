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
/*Validacion de los datos del formulario, cadena, quitar espacios, expresion regular, mensaje*/
const validationSchema = Yup.object().shape({
    uid: Yup.string().trim().matches(/^u(?:[0-9]{8}|[xyz][0-9]{7})$/, "Formato erroneo.").required()
})

/*Para indicar que input/datos vamos a mandarle al servidor y que nos devuelve usamos "useLogInMutation()", solo hay que crear /src/graphql/documents/<nombre-pag>.gql, login.gql tiene comentarios*/
const UserForm = () => {
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
            }}>

            {() => (
                <Form>
                    <Form.Item name="uid">
                        <Input name="uid" autoComplete="username" placeholder="Usuario" />
                    </Form.Item>
                    {/**<Form.Item name="password">
            <Input.Password
              name="password"
              autoComplete="current-password"
              placeholder="Contraseña"
            />
      </Form.Item>*/}
                    <Form.Item name="submit">
                        <Button htmlType="submit" type="primary">
                            Gestionar roles
            </Button>
                    </Form.Item>
                </Form>
            )}
        </Formik>
    )
}

export default UserForm