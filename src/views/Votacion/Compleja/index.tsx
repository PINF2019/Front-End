import { List, Avatar, Button, Checkbox, Row } from 'antd'
import ReactDOM from 'react-dom'
import React from 'react'
import routes from '@Routes'
import { isAuthTokenExpired } from '@Utils/auth'
import { Redirect } from 'react-router-dom'

import { Radio, Input } from 'antd'
/*type Props = {

}*/
const VotacionCompleja = (/*props:any*/) => {
  if (!isAuthTokenExpired()) {
    return <Redirect to={routes.base} />
  }
  class App extends React.Component {
    state = {
      value: 1
    }
    validarvoto(e: any) {
      console.log(`checked = ${e.target.checked}`)
    }
    onChange = (e: { target: { value: any } }) => {
      console.log('radio checked', e.target.value)
      this.setState({
        value: e.target.value
      })
    }

    render() {
      const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px'
      }

      return (
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ height: '100vh' }}>
          <Row style={{ marginTop: '-200px' }}>
            <Radio.Group /*onChange={this.onChange} value={this.state.value abajo sustituir por {props}*/
            >
              <h2> Elecciones </h2>

              <Radio style={radioStyle} value={1}>
                Option A
              </Radio>
              <Radio style={radioStyle} value={2}>
                Option B
              </Radio>
              <Radio style={radioStyle} value={3}>
                Option C
              </Radio>
              <Checkbox onChange={this.validarvoto}>
                Validar mi elección
              </Checkbox>
              <Button type="primary">Vota!</Button>
            </Radio.Group>
          </Row>
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
