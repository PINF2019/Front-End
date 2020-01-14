import { useOptionsQuery, useVotePollMutation } from '@Generated/hooks'
import { Typography } from 'antd'
import { Formik } from 'formik'
import { Checkbox, Form, FormikDebug, Radio, SubmitButton } from 'formik-antd'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import * as Yup from 'yup'
import './index.less'

const { Text } = Typography
type Props = {
  id: string
}

type VotePollInput = {
  options: string
  poll: string
}

const vote = {
  VotePollInput: {
    options: '',
    poll: '',
  },
}

const schema = Yup.object().shape({
  validate: Yup.boolean().oneOf([true]),
  election: Yup.string().required(),
})

const Votacion = () => {
  const { id } = useParams<{ id: string }>()
  const { data, loading } = useOptionsQuery({ variables: { id } })
  const [validate, setValidate] = useState(false)
  const [vote] = useVotePollMutation()
  if (data) {
    return (
      <Formik
        onSubmit={values => {
          console.log(values)
          // await vote({variables: { input: { elections: [values.election], poll:id }}})
        }}
        initialValues={{ validate: false, election: '' }}
        initialErrors={{ validate: '', election: '' }}
        validateOnBlur={false}
        validationSchema={schema}
      >
        {() => (
          <>
            <Form>
              <Radio.Group
                name="election"
                options={data.election.candidates.map(
                  ({ id, firstName, lastName }) => ({
                    label: `${firstName} ${lastName}`,
                    value: id,
                  })
                )}
              />
              <Checkbox name="validate" />
              <SubmitButton>Votar</SubmitButton>
              <FormikDebug />
            </Form>
          </>
        )}
      </Formik>
    )
  }
  if (loading) {
    return <div>Cargando...</div>
  }
  return <div>Error...</div>
}

// const Votacion = (props: any) => {
//   const {id} = useParams();
//   const {id:poll} = useParams<{id:string}>();
//   const {data} = useOptionsQuery({variables:{id:poll}});
//   const [vote] = useVotePollMutation();

//       const radioStyle = {
//         display: "block",
//         height: "30px",
//         lineHeight: "30px"
//       };

//       return (
//         <Row
//           type="flex"
//           justify="center"
//           align="middle"
//           style={{ height: "100%" }}
//         >
//           <Col
//             style={{
//               width: "50%",
//               height: "100%",
//               textAlign: "center"
//             }}
//           >
//             <Layout
//               style={{
//                 height: "100%",
//                 backgroundImage: "url(" + wallpaper + ")"
//               }}
//             >

//             <Row
//                 type="flex"
//                 justify="center"
//                 //align="middle"
//                 style={{
//                   marginTop: "25%"
//                 }}
//               >
//               <Text strong style={{ fontSize: "30px", lineHeight: "100%" }}>
//                   Votación <br></br> {data?.election.description.substring(0, 100-3) + '...'}
//                 </Text>
//               </Row>

//             </Layout>
//           </Col>
//           <Col
//             style={{
//               width: "50%",
//               height: "100%"
//             }}
//           >
//             <Row
//               type="flex"
//               justify="center"
//               align="middle"
//               style={{ height: "100%" }}
//             >
//               <Radio.Group /*onChange={this.onChange} value={this.state.value hay que poner {props}*/
//               >
//                 <Col>
//                   <Text strong style={{ fontSize: "22px" }}>
//                     Su voto:
//                   </Text>
//                   <br></br>
//                   {data?.election.candidates.map((option, index) => (
//                   <Button className="button" style={{ marginTop: "3%" }} /*onClick ={()=>{
//                     vote = {
//                       VotePollInput: {
//                         options: {option.id} ,
//                         poll: {data.id}
//                       }
//                     }
//                   }}*/>
//                     <Row style={{marginTop: "auto"}}>
//                     <Radio style={radioStyle} value={index}>
//                     {option.firstName} {option.lastName}
//                     </Radio></Row>
//                   </Button>))}

//                 </Col>
//                 <Row
//                   style={{
//                     display: "flex",
//                     alignContent: "space-between",
//                     width: "100%"
//                   }}
//                 >
//                   <Button
//                     style={{
//                       backgroundColor: "#206489",
//                       width: "70%",
//                       marginRight: "auto"
//                     }}
//                   >
//                     <Checkbox /*onChange={

//                       }*/>
//                       <Text style={{ color: "#FFFFFF" }}>
//                         Validar mi elección
//                       </Text>
//                     </Checkbox>
//                   </Button>

//                   <Button type="primary" /*disabled = {disabled.state}onClick = {() => votar()}*/>
//                     Vota!
//                   </Button>
//                 </Row>
//               </Radio.Group>
//             </Row>
//           </Col>
//         </Row>
//       );
//     }

export default Votacion
