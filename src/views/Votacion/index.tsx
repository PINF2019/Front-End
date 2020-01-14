import { Typography, Button, Row, Col, Layout } from "antd";
import React,{useState} from "react";
import { Input } from "antd";
import "./index.less";
import {useOptionsQuery, useVotePollMutation} from "@Generated/hooks"
import wallpaper from "../../assets/Wallpaper2.png";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import {Formik} from 'formik';
import {Form, Radio, SubmitButton, FormikDebug, Checkbox} from 'formik-antd'


const { Text } = Typography;
type Props = {
  id: string;
};

type VotePollInput = {
  options: string;
  poll: string;
  }

  const vote = {
    VotePollInput: {
      options: "",
      poll: ""
    }
  }

const schema = Yup.object().shape({
  validate: Yup.boolean().oneOf([true]),
  election: Yup.string().required()
})

// const Votacion = () => {
//   const { id } = useParams<{ id: string }>()
//   const { data, loading } = useOptionsQuery({ variables: { id } })
//   const [validate, setValidate] = useState(false)
//   const [vote] = useVotePollMutation()
//   if (data) {
//     return (
//       <Formik
//         onSubmit={values => {
//           console.log(values)
//           // await vote({variables: { input: { elections: [values.election], poll:id }}})
//         }}
//         initialValues={{ validate: false, election: '' }}
//         initialErrors={{validate:"", election:""}}
//         validateOnBlur={false}
//         validationSchema={schema}
//       >
//         {() => (
//           <>
//             <Form>
//               <Radio.Group
//                 name="election"
//                 options={data.election.candidates.map(
//                   ({ id, firstName, lastName }) => ({
//                     label: `${firstName} ${lastName}`,
//                     value: id,
//                   })
//                 )}
//               />
//               <Checkbox name="validate" />
//               <SubmitButton>Votar</SubmitButton>
//               <FormikDebug />
//             </Form>
//           </>
//         )}
//       </Formik>
//     )
//   }
//   if (loading) {
//     return <div>Cargando...</div>
//   }
//   return <div>Error...</div>
// }

const Votacion = (props: any) => {
  const { id } = useParams<{ id: string }>()
  const { data, loading } = useOptionsQuery({ variables: { id } })
  const [validate, setValidate] = useState(false)
  const [vote] = useVotePollMutation()
   
      const radioStyle = {
        display: "block",
        height: "30px",
        lineHeight: "30px"
      };


      if(data){
      return (

          <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ height: "100%" }}
          >
          <Col
          style={{
            width: "50%",
            height: "100%",
            textAlign: "center"
          }}
          >
            <Layout
              style={{
                height: "100%",
                backgroundImage: "url(" + wallpaper + ")"
              }}
              >
             
            <Row
                type="flex"
                justify="center"
                //align="middle"
                style={{
                  marginTop: "25%"
                }}
                > 
              <Text strong style={{ fontSize: "30px", lineHeight: "100%" }}>
                  Votación <br></br> {data?.election.description.substring(0, 100-3) + '...'} 
                </Text>
              </Row>
        
               
            </Layout>
          </Col>
          <Col
          style={{
              width: "50%",
              height: "100%"
            }}
            >
            <Row
              type="flex"
              justify="center"
              align="middle"
              style={{ height: "100%" }}
              >
              <Formik
        onSubmit={values => {
          console.log(values)
          // await vote({variables: { input: { elections: [values.election], poll:id }}})
        }}
        initialValues={{ validate: false, election: '' }}
        initialErrors={{validate:"", election:""}}
        validateOnBlur={false}
        validationSchema={schema}
      >
        {() => (
          <Col>
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
            </Form>
          </Col>
        )}
      </Formik>
            </Row>
          </Col>
        </Row>
      );
      }
      if (loading) {
        return <div>Cargando...</div>
      }
      return <div>Error...</div>
      }
      
      
      
      
      
export default Votacion;