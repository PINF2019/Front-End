import React from "react";
import { Row, Col, Button, Typography } from "antd";
import { MenuButton } from "@Views";
import "./index.less";

const { Text } = Typography;

const Census = () => {
  return (
    <Row justify="center" className="body">
      <Row style={{ marginTop: "3%", marginBottom: "1%" }}>
        <Text strong style={{ fontSize: "20px" }}>
          Seleccione la operación que desee realizar:
        </Text>
      </Row>
      <Row></Row>
    </Row>
  );
  // }

  //return <div>{JSON.stringify(error)}</div>
};

export default Census;
