import React from "react";
import { Row, Col, Button, Typography } from "antd";
import { MenuButton } from "@Views";
const { Text } = Typography;

const data = {
  data: [
    { name: "Añadir usuario", url: "/admin/adduser" },
    { name: "Modificar usuario", url: "/admin/modifyusertable" },
    { name : "Eliminar usuario", url: "/admin/deleteusertable"}
  ]
};

const MenuAdmin = () => {
 
  return (
    <Row justify="center" className="body">
        <Row className = "body2" style={{marginTop: "20%"}}>
      <Row className="body2">
        <Text strong style={{ fontSize: "20px" }}>
          Gestionar usuarios
        </Text>
      </Row>
      <Row>
        {data.data.map((data, index) => (
          <MenuButton name={data.name} url={data.url} />
          ))}
      </Row>
      </Row>
    </Row>
  );

};

export default MenuAdmin;
