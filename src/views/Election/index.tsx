import { Button, Checkbox, Col, Layout, Radio, Row, Typography } from 'antd'
import React from 'react'
import wallpaper from '../../assets/Wallpaper.png'
import ElectionButton from './button'
import './index.less'

const { Text } = Typography
/* type Props = {
} */
const data = [
  { name: 'Raúl Escribano Corrales' },
  { name: 'Claudia Soriano' },
  { name: 'Kevin López Cala' },
]
/*
type Props = {
  data{
    name: string
  }
} */
const Election = (props: any) => {
  /* if (!isAuthTokenExpired()) {
    return <Redirect to={routes.vSimple} />;
  } */
  class App extends React.Component {
    state = {
      value: 1,
    }

    validarvoto(e: any) {
      console.log(`checked = ${e.target.checked}`)
    }

    onChange = (e: any) => {
      console.log('radio checked', e.target.value)
      this.setState({
        value: e.target.value,
      })
    }

    render() {
      return (
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ height: '100%' }}
        >
          <Col
            style={{
              width: '50%',
              height: '100%',
              textAlign: 'center',
              backgroundColor: '#f7f7f7',
            }}
          >
            <Layout
              style={{
                height: '100%',
                backgroundImage: `url(${wallpaper})`,
              }}
            >
              <Row
                type="flex"
                justify="center"
                // align="middle"
                style={{
                  marginTop: '25%',
                }}
              >
                <Text strong style={{ fontSize: '40px', lineHeight: '100%' }}>
                  Elecciones <br />
                  Delegado de Ing. Informática
                </Text>
              </Row>
            </Layout>
          </Col>
          <Col
            style={{
              width: '50%',
              height: '100%',
            }}
          >
            <Row
              type="flex"
              justify="center"
              align="middle"
              style={{ height: '100%' }}
            >
              <Radio.Group /* onChange={this.onChange} value={this.state.value hay que poner {props} */
              >
                <Col>
                  <Text strong style={{ fontSize: '22px' }}>
                    Su voto:
                  </Text>
                  <br />
                  {data.map((candidate, index) => (
                    <ElectionButton name={candidate.name} index={index} />
                  ))}
                </Col>
                <Row
                  style={{
                    display: 'flex',
                    alignContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Button
                    style={{
                      backgroundColor: '#206489',
                      width: '70%',
                      marginRight: 'auto',
                    }}
                  >
                    <Checkbox onChange={this.validarvoto}>
                      <Text style={{ color: '#FFFFFF' }}>
                        Validar mi elección
                      </Text>
                    </Checkbox>
                  </Button>

                  <Button href="/success" type="primary">
                    Vota!
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

export default Election
/* import React, { Component } from 'react';
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
})(Votacion); */
