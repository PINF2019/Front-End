import React from "react";
import { Row, Col, Button, Typography, Layout } from "antd";
import { MenuButton } from "@Views";
import Background from '../../../assets/Wallpaper.png'

const { Text } = Typography;

const data = {
  data: [
    { name: "Añadir usuario", url: "/admin/adduser" },
    { name: "Modificar usuario", url: "/admin/modifyusertable" },
    { name: "Eliminar usuario", url: "/admin/deleteusertable" }
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
            Gestionar Usuarios
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
