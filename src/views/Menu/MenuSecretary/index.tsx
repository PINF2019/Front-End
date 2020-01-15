import React from "react";
import { Row, Col, Button, Typography, Layout } from "antd";
import { MenuButton } from "@Views";
import Background from '../../../assets/Wallpaper.png'

const { Text } = Typography;

const data = {
  data: [
    { name: "Crear proceso electoral", url: "/secretary/procesoElectoral/crear" },
    { name: "Modificar proceso electoral", url: "/secretary/procesoElectoral/modificar" },
    { name: "Eliminar proceso electoral", url: "/secretary/procesoElectoral/eliminar" }
  ]
};

const MenuAdmin = () => {

  return (
    <Layout style={{
      backgroundImage: 'url(' + Background + ')',
      height: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <Row justify="center" className="body" style={{ marginTop: '3%' }}>
        <Row className="layout" style={{ marginBottom: '10%' }}>
          <Text strong style={{ fontSize: "30px" }}>
            Gestionar Procesos Electorales
        </Text>
        </Row>
        <Row>
          {data.data.map((data, index) => (
            <MenuButton name={data.name} url={data.url} />
          ))}
        </Row>
      </Row>
    </Layout>
  );

};

export default MenuAdmin;
