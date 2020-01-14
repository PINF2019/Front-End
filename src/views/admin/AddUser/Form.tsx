import { useCreateUserMutation ,useLogInMutation, useCollegiateBodiesQuery } from '@Generated/hooks'
import { setAuthToken } from '@Utils/auth'
import { Button, Typography, Card } from 'antd'
import { Formik, Field } from 'formik'
import { Form, Input } from 'formik-antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import routes from '@Routes'

const { Text } = Typography;

const initialValues = {
  /*uid: '',
  password: ''*/
  uid: '',
  dni: '',
  password: '',
  firstName: '',
  lastName: '',
  roles: '',
  collegiateBody: '',
  genre: ''
}

/*Validacion de los datos del formulario, cadena, quitar espacios, expresion regular, mensaje*/
const validationSchema = Yup.object().shape({
  uid: Yup.string().trim().matches(/^u(?:[0-9]{8}|[xyz][0-9]{7})$/, "Formato erroneo.").required(),
  dni: Yup.string().required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required()
})

/*Para indicar que input/datos vamos a mandarle al servidor y que nos devuelve usamos "useLogInMutation()", solo hay que crear /src/graphql/documents/<nombre-pag>.gql, login.gql tiene comentarios*/
const AddUserForm = () => {
  //const [logIn] = useLogInMutation()
  const [createUser] = useCreateUserMutation()
  const history = useHistory()
  const { data, loading, error } = useCollegiateBodiesQuery()

  if (loading) { //Loading es un booleano que comprueba si se está realizando la query
    return <div>Loading...</div>
  }

  if (data) { //Data contiene los datos que hemos solicitado y se puede mapear
	//A la estructura que queramos. En este caso es un map. Nota: index,
  //Tal y como indica es el índice que lo recorre
  console.log("data", (data))
    return (
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (input:any, actions) => {
        try {
          const { data } = await createUser({ variables: { input } })
          if (data) {
            history.replace(routes.base)
          }
        } catch {
          const message = 'Usuario Incorrectos'
          actions.setErrors({ uid: message, password: message })
        }
      }}>

      {/*
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
      }}> */}

      

      {() => (

        <Form>
          <Card className="card2">
            <Text strong style={{ fontSize: "25px" }}>
              Datos
          </Text>
          </Card>
          <Form.Item name="uid">
            <p style={{ fontSize: "20px" }}><strong >Usuario</strong> <Input name="uid" autoComplete="uid" placeholder="Usuario" /></p>
          </Form.Item>
          <Form.Item name="password">
          <p style={{ fontSize: "20px" }}><strong>Contraseña</strong><Input.Password name="password" autoComplete="current-password" placeholder="Contraseña"/></p>
          </Form.Item>
          <Form.Item name="dni">
            <p style={{ fontSize: "20px" }}><strong >NIF/NIE</strong> <Input name="dni" autoComplete="NIF/NIE" placeholder="NIF/NIE" /></p>
          </Form.Item>
          <Form.Item name="firstName">
            <p style={{ fontSize: "20px" }}><strong>Nombre</strong> <Input name="firstName" autoComplete="username" placeholder="Nombre" /></p>
          </Form.Item>
          <Form.Item name="lastName">
            <p style={{ fontSize: "20px" }}><strong>Apellidos</strong> <Input name="lastName" autoComplete="lastnames" placeholder="Apellidos" /></p>
          </Form.Item>
          <Form.Item name="genre">
            <p style={{ fontSize: "20px" }}><strong>Género</strong><Field as="select" name="genre">
              <option value='1'>Masculino</option>
              <option value='2'>Femenino</option>
              <option value='3'>Otro</option>
            </Field></p>
          </Form.Item>
          {/**<Form.Item name="email">
            <p style={{ fontSize: "20px" }}><strong>Correo electrónico</strong> <Input name="email" autoComplete="useremail" placeholder="Correo electrónico" /></p>
              </Form.Item>*/}
          <Form.Item name="roles">
            <p style={{ fontSize: "20px" }}><strong>Rol</strong><Field as="select" name="roles">
              <option value='3'>Elector</option>
              <option value='2'>Secretario</option>
              <option value='1'>Administrador</option>
            </Field></p>
          </Form.Item>
          <Form.Item name="collegiateBody">
            <p style={{ fontSize: "20px" }}><strong>Órgano colegiado</strong><Field as="select" name="collegiateBody">
              <option value="opcion1">opcion1</option>
              <option value="opcion2">opcion2</option>
              <option value="opcion3">opcion3</option>
            </Field></p>
          </Form.Item>
          
          <Form.Item name="submit">
            <Button >
              <a href="/admin">Cancelar</a>
            </Button>
            <Button htmlType="submit" type="primary">
              Añadir usuario
            </Button>
          </Form.Item>
        </Form>
      )
      }
    </Formik >
    )
  }

//En caso de que ninguno de los otros ifs funcione, se devolvería la variable de error
  return <div>{JSON.stringify(error)}</div>
}


export default AddUserForm
