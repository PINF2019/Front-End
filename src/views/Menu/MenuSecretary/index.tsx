import React from "react";
import { Row, Col, Button, Typography } from "antd";
import { MenuButton } from "@Views";

const { Text } = Typography;

const data = {
  data: [
    { name: "Crear proceso electoral", url: "/secretary/crearProcesoElectoral" },
    { name: "Modificar proceso electoral", url: "/404" },
    { name: "Eliminar proceso electoral", url: "/404" }
  ]
};

const MenuAdmin = () => {

  return (
    <Row justify="center" className="body">
      <Row className = "body2" style={{marginTop: "20%"}}>
      <Row style={{ marginTop: "3%", marginBottom: "1%" }}>
        <Text strong style={{ fontSize: "20px" }}>
          Gestionar Procesos Electorales
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
