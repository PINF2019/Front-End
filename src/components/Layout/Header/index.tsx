import logo from "@Assets/logo.png";
import { Button, Col, Icon, Layout, Row, Typography } from "antd";
import React from "react";
import "./index.less";
const { Text } = Typography;

const Header = (props: { onClick: () => void }) => {
  return (
    //autocorregido el ()
    <Layout.Header className="header">
      <Row
        style={{
          display: "flex",
          width: "100%",
          flex: "1"
        }}
      >
        <Col style={{ marginRight: "auto", display: "flex" }}>
          <a href="/pickrole">
            <img src={logo} width="150px"></img>
          </a>
        </Col>
        <Col style={{ marginLeft: "auto", display: "flex" }}>
          <Button type="link" href="/home">
            <Text style={{ fontSize: "20px" }} strong>
              Inicio
            </Text>
          </Button>
          <Button type="link" href="/Resultados">
            <Text style={{ fontSize: "20px" }} strong>
              Resultados
            </Text>
          </Button>
          <Button type="link" href="/Census">
            <Text style={{ fontSize: "20px" }} strong>
              Censos
            </Text>
          </Button>
          <Button
            type="primary"
            shape="circle"
            size={"large"}
            style={{ marginLeft: "10px" }}
            onClick={props.onClick}
          >
            <Icon type="user" style={{ fontSize: "30px" }} />
          </Button>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Header;
