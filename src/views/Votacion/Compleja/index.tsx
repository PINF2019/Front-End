import { Typography, Button, Checkbox, Row, Col, Layout } from "antd";
import React from "react";
import routes from "@Routes";
import { isAuthTokenExpired } from "@Utils/auth";
import { Redirect } from "react-router-dom";
import { Radio, Input } from "antd";
import "./index.less";
import wallpaper from "../.././../assets/Wallpaper2.png";
import { useParams } from "react-router-dom";

//  const {id} = useParams();
//Esto va abajo dentro de la clase
// Pero estoy ciega y lo pongo aqui porque no me doy cuenta

const { Text } = Typography;
/*type Props = {

}*/
const VotacionCompleja = (props: any) => {
  const {id} = useParams();
  if (!isAuthTokenExpired()) {
    return <Redirect to={routes.vComplex} />;
  }
  class App extends React.Component {
    state = {
      value: 1
    };
    validarvoto(e: any) {
      console.log(`checked = ${e.target.checked}`);
    }
    onChange = (e: any) => {
      console.log("radio checked", e.target.value);
      this.setState({
        value: e.target.value
      });
    };

    render() {
      const radioStyle = {
        display: "block",
        height: "30px",
        lineHeight: "30px"
      };

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
                  Votación <br></br>Color del nuevo logo de la ESI
                </Text>
              </Row>{" "}
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
              <Radio.Group /*onChange={this.onChange} value={this.state.value hay que poner {props}*/
              >
                <Col>
                  <Text strong style={{ fontSize: "22px" }}>
                    Su voto:
                  </Text>
                  <br></br>
                  <Button className="button" style={{ marginTop: "5%" }}>
                    <Radio style={radioStyle} value={1}>
                      Azul
                    </Radio>
                  </Button>

               
                </Col>
                <Row
                  style={{
                    display: "flex",
                    alignContent: "space-between",
                    width: "100%"
                  }}
                >
                  <Button
                    style={{
                      backgroundColor: "#206489",
                      width: "70%",
                      marginRight: "auto"
                    }}
                  >
                    <Checkbox onChange={this.validarvoto}>
                      <Text style={{ color: "#FFFFFF" }}>
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
      );
    }
  }

  return <App />;
};

export default VotacionCompleja;
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
