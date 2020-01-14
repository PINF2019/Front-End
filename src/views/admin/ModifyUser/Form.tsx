import { useModifyUserMutation, useLogInMutation, useCollegiateBodiesQuery } from '@Generated/hooks'
import { setAuthToken } from '@Utils/auth'
import { Button, Typography, Card} from 'antd'
import { Formik, Field } from 'formik'
import { Form, Input, SubmitButton} from 'formik-antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import routes from '@Routes'
import { OmitProps } from 'antd/lib/transfer/renderListBody'

const { Text } = Typography;
const initialValues = {
  uid: '',
  password: ''
  /*password: '',
  name: '',
  lastname: '',
  rol: '',
  org: '',
  sex: ''*/
}
/*Validacion de los datos del formulario, cadena, quitar espacios, expresion regular, mensaje*/
const validationSchema = Yup.object().shape({
  dni: Yup.string().required("NIF/NIE requerido."),
  firstName: Yup.string().required("Nombre requerido."),
  lastName: Yup.string().required("Apellidos requerido.")
})
type Props = {
  id: string;
  name: string;
  lastnames: string;
  sex: string;
  rol: string;
  colegiateBody: string;
};

/*Para indicar que input/datos vamos a mandarle al servidor y que nos devuelve usamos "useLogInMutation()", solo hay que crear /src/graphql/documents/<nombre-pag>.gql, login.gql tiene comentarios*/
const ModifyUserForm = (props: Props) => {
  const [modifyUser] = useModifyUserMutation()
  const [logIn] = useLogInMutation()
  const history = useHistory()
  const { data, loading, error } = useCollegiateBodiesQuery()


  const initialValues = {
    firstName: props.name,
    lastName: props.lastnames,
    roles: props.rol,
    colegiateBody: props.colegiateBody,
    genre: props.sex
  }

  const id = props.id;
  
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (input: any, actions) => {
        try {
          const { data } = await modifyUser({ variables: { input, id }})
          if (data) {
            history.replace(routes.base)
          }
        } catch {
          const message = 'Usuario Incorrectos'
          actions.setErrors({ name: message })
        }
      }}>
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
            <Text strong style={{ fontSize: "25px" }}>
              Datos
          </Text>
          </Card>
          <Form.Item name="firstName">
          <p style={{ fontSize: "20px" }}><strong>Nombre</strong><Input name="firstName" autoComplete="nombre" placeholder={props.name} /></p>
          </Form.Item>
          <Form.Item name="lastName">
          <p style={{ fontSize: "20px" }}><strong>Apellidos</strong><Input name="lastName" autoComplete="lastName" placeholder={props.lastnames} /></p>
          </Form.Item>
          <Form.Item name="genre">
            <p style={{ fontSize: "20px" }}><strong>Género</strong><Field as="select" placeholder = {props.sex} name="genre">
              <option value="MALE">Masculino</option>
              <option value="FEMALE">Femenino</option>
              <option value="OTHER">Otro</option>
            </Field></p>
          </Form.Item>
          {/*<Form.Item name="email">
            <p>Correo electrónico<Input name="email" autoComplete="useremail" placeholder="Correo electrónico" /></p>
            </Form.Item>*/}
          <Form.Item name="roles">
            <p style={{ fontSize: "20px" }}><strong>Rol</strong><Field as="select" placeholder = {props.rol} name="roles">
              <option value="VOTER">Elector</option>
              <option value="SECRETARY">Secretario</option>
              <option value="ADMIN">Administrador</option>
            </Field></p>
          </Form.Item>
          <Form.Item name="colegiateBody">
          <p style={{ fontSize: "20px" }}><strong>Órgano colegiado</strong><Field as="select" placeholder = {props.colegiateBody} name="colegiateBody">
              {data?.collegiateBodies.map (elec => (
              <option value = {elec.id} >{elec.name}</option>
              ))}
            </Field></p>
          </Form.Item>
          <Form.Item name="submit">
          <Button >
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
