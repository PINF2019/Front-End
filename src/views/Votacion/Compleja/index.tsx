import { Typography, Button, Checkbox, Row, Col, Layout } from 'antd'
import React from 'react'
import routes from '@Routes'
import { isAuthTokenExpired } from '@Utils/auth'
import { Redirect } from 'react-router-dom'
import { Radio, Input } from 'antd'
import './index.less'
import wallpaper from '../.././../assets/Wallpaper2.png'

const { Text } = Typography
/*type Props = {

}*/
const VotacionCompleja = (props: any) => {
  class App extends React.Component {
    state = {
      value: 1
    }
    validarvoto(e: any) {
      console.log(`checked = ${e.target.checked}`)
    }
    onChange = (e: any) => {
      console.log('radio checked', e.target.value)
      this.setState({
        value: e.target.value
      })
    }

    render() {
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
              textAlign: "center",
              backgroundColor: "#f7f7f7"
            }}>
            <Layout
              style={{
                height: '100%',
                backgroundImage: 'url(' + wallpaper + ')'
              }}>
              <Row
                type="flex"
                justify="center"
                //align="middle"
                style={{
                  margin: 'auto',
                  lineHeight: 'normal'
                }}>
                <Text strong style={{ fontSize: '40px' }}>
                  Votación color del nuevo
                  <br></br>
                  logo de la ESI
                </Text>
              </Row>{' '}
            </Layout>
          </Col>
          <Col
            style={{
              width: '50%',
              height: '100%'
            }}>
            <Row
              type="flex"
              justify="center"
              align="middle"
              style={{ height: '100%' }}>
              <Radio.Group size="large" style={{ width: "60%", margin: "auto", alignItems: "center" }}/*onChange={this.onChange} value={this.state.value hay que poner {props}*/
              >
                <Col>
                  <Text strong style={{ fontSize: "30px", lineHeight: "100px" }}>
                    Su voto:
                  </Text>

                  <Radio className="button" value={1}>
                    <Text style={{ fontSize: "20px", alignItems: "center" }}>Azul y Blanco</Text>
                  </Radio>


                  <Radio className="button" value={2}>
                    <Text style={{ fontSize: "20px", alignItems: "center" }}>Verde y Blanco</Text>
                  </Radio>

                  <Radio className="button" value={3}>
                    <Text style={{ fontSize: "20px", alignItems: "center" }}>Rojo y Negro</Text>
                  </Radio>
                </Col>
                <Row
                  style={{
                    display: 'flex',
                    alignContent: 'space-between',
                    width: '100%'
                  }}>
                  <Button
                    style={{
                      backgroundColor: '#206489',
                      width: '70%',
                      marginRight: 'auto'
                    }}>
                    <Checkbox onChange={this.validarvoto}>
                      <Text style={{ color: '#FFFFFF', fontSize: "15px", width: "40%" }}>
                        Validar mi elección
                      </Text>
                    </Checkbox>
                  </Button>

                  <Button href="/success" type="primary" style={{ fontSize: "15px", width: "40%" }}>
                    Votar
                  </Button>
                </Row>
              </Radio.Group>
            </Row>
          </Col>
        </Row>
      )
    }
  }

  return <App />
}

export default VotacionCompleja
/*import React, { Component } from 'react';
import Button from 'antd/es/button';
import { withFormik } from 'formik';
import './App.css';
import { Select } from 'antd';
import { Radio } from 'antd';
import { InputNumber } from 'antd';
import {TimePicker} from 'antd';
import moment from 'moment';
import { render } from 'react-dom';
import { isAuthTokenExpired } from '@Utils/auth';
import { Redirect } from 'react-router';
import routes from '@Routes';

function cambioduracion(value:any) {

  console.log(`selected ${value}`);

}

function handleChange(value:any) {
  console.log(`selected ${value}`);
}

function cambiorectificacion(e:any) {

  console.log(`selected ${e.target.value}`);

}



const Votacion = (props:any) => {
  if (!isAuthTokenExpired()) {
    return <Redirect to={routes.votacion} />
  }

  const {
    handleSubmit,
  } = props;
  return(

    <form onSubmit={handleSubmit}>

      Rectificación:
      <Radio.Group onChange={cambiorectificacion}>
       <h2> Elecciones </h2>
       <Radio value={1}>
         Option A
       </Radio>
       <Radio value={2}>
         Option B
       </Radio>
       <Radio value={3}>
         Option C
       </Radio>
       <Button type="primary" >
         Vota!</Button>
     </Radio.Group>
   );

    </form>
  );

}
export default withFormik({

  handleSubmit(values, formikBag){
    console.log(values);
  },

})(Votacion);*/
