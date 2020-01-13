import { useLogInMutation } from '@Generated/hooks'
import { setAuthToken } from '@Utils/auth'
import { Button } from 'antd'
import { Formik, Field } from 'formik'
import { Form, Input} from 'formik-antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import routes from '@Routes'
import { OmitProps } from 'antd/lib/transfer/renderListBody'

const initialValues = {
  uid: '',
  password: ''
}
/*Validacion de los datos del formulario, cadena, quitar espacios, expresion regular, mensaje*/
const validationSchema = Yup.object().shape({
  uid: Yup.string().trim().matches(/^u(?:[0-9]{8}|[xyz][0-9]{7})$/, "Formato erroneo.").required()
})

type Props = {
  nif: string;
  name: string;
  lastnames: string;
  sex: string;
  rol: string;
};

/*Para indicar que input/datos vamos a mandarle al servidor y que nos devuelve usamos "useLogInMutation()", solo hay que crear /src/graphql/documents/<nombre-pag>.gql, login.gql tiene comentarios*/
const ModifyUserForm = (props: Props) => {
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
          <p>Datos</p>
          <Form.Item name="nif">
            <p>NIF/NIE <Input name="nif" value={props.nif} autoComplete="NIF/NIE" placeholder="NIF/NIE" /></p>
          </Form.Item>
          <Form.Item name="name">
            <p>Nombre<Input name="name" value={props.name} autoComplete="nombre" placeholder="Nombre" /></p>
          </Form.Item>
          <Form.Item name="lastnames">
            <p>Apellidos<Input name="lastnames" value={props.lastnames} autoComplete="lastnames" placeholder="Apellidos" /></p>
          </Form.Item>
          <Form.Item name="sex">
              <p>Sexo<Field as="select" value={props.sex} name="sex">
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </Field></p>
          </Form.Item>
          <Form.Item name="email">
            <p>Correo electrónico<Input name="email" autoComplete="useremail" placeholder="Correo electrónico" /></p>
          </Form.Item>
          <Form.Item name="rol">
              <p>Rol<Field as="select" value={props.rol} name="rol">
              <option value="Elector">Elector</option>
              <option value="Secretario">Secretario</option>
              <option value="Administrador">Administrador</option>
            </Field></p>
          </Form.Item>
          <Form.Item name="org">
              <p>Órgano colegiado<Field as="select" name="org">
              <option value="opcion1">opcion1</option>
              <option value="opcion2">opcion2</option>
              <option value="opcion3">opcion3</option>
            </Field></p>
          </Form.Item>
          {/**<Form.Item name="password">
            <Input.Password
              name="password"
              autoComplete="current-password"
              placeholder="Contraseña"
            />
      </Form.Item>*/}
          <Form.Item name="submit">
            <Button >
              Cancelar
            </Button>
          </Form.Item>
          <Form.Item name="submit">
            <Button htmlType="submit" type="primary">
              Añadir usuario
            </Button>
          </Form.Item>
        </Form>
      )}
    </Formik>
    
  )
}

export default ModifyUserForm
