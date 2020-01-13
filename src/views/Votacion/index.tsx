import { Typography, Button, Checkbox, Row, Col, Layout } from "antd";
import React from "react";
import routes from "@Routes";
import { isAuthTokenExpired } from "@Utils/auth";
import { Redirect } from "react-router-dom";
import { Radio, Input } from "antd";
import "./index.less";
import wallpaper from "../../assets/Wallpaper2.png";
import { useParams } from "react-router-dom";

//  const {id} = useParams();
//Esto va abajo dentro de la clase
// Pero estoy ciega y lo pongo aqui porque no me doy cuenta

const { Text } = Typography;
/*type Props = {

}*/
const Votacion = (props: any) => {
  const {id} = useParams();


   
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
                  Votación <br></br>
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
                    <Checkbox /*onChange={this.validarvoto}*/>
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
  




export default Votacion;
