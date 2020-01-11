import React from "react";
import { Row, Col, Button, Typography } from "antd";
import { MenuButton } from "@Views";
const { Text } = Typography;

const data = {
  data: [
    { name: "Añadir usuario", url: "/admin/GestionarUsuarios" },
    { name: "Modificar usuario", url: "/404" },
    { name : "Eliminar usuario", url: "/404"}
  ]
};

const MenuAdmin = () => {
 
  return (
    <Row justify="center" className="body">
      <Row style={{ marginTop: "3%", marginBottom: "1%" }}>
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
  );

};

export default MenuAdmin;
