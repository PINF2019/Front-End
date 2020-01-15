import { useMeQuery } from "@Generated/hooks";
import routes from "@Routes";
import { removeAuthToken } from "@Utils/auth";
import { Avatar, Col, Divider, Icon, Layout, Row, Typography } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
const { Text } = Typography;

const data = {
  email: "carmen.ruizdecelis@alum.uca.es",
  name: "Carmen",
  secondName: "Ruiz de Celis",
  NIF: "123456789",
  role: "Elector"
};
const response = {
  file: "http://releases.ubuntu.com/12.04.5/ubuntu-12.04.5-alternate-amd64.iso"
};

const Sidebar = (prop: { collapse: boolean }) => {
  const data = useMeQuery();

  const history = useHistory();
  return (
    <Layout.Sider
      collapsed={prop.collapse}
      collapsible
      collapsedWidth={0}
      trigger={null}
      width={300}
      style={{
        backgroundColor: "#f0f0f0",
        display: "flex",
        flex: "1",
        flexDirection: "column"
      }}
    >
      <Row
        type="flex"
        style={{
          justifyContent: "center",
          marginTop: "15%",
          display: "flex",
          flex: "1",
          flexDirection: "column"
        }}
      >
        <Row
          type="flex"
          style={{
            marginLeft: "10%",
            justifyContent: "center",
            width: "40%",
            display: "flex"
          }}
        >
          <Avatar size={90} style={{ backgroundColor: "#FFA500" }}>
            <Icon type="user" style={{ fontSize: "80px" }} />
          </Avatar>
        </Row>

        <Row
          type="flex"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10%",
            fontSize: "15px",
            flex: "1"
          }}
        >
          <Col style={{ width: "40%", marginLeft: "10%", justifyItems: "center" }}>
            <Row style={{ paddingBottom: "10px", fontSize: "15px" }}>
              <Text strong>Apellido</Text>
            </Row>
            <Row style={{ paddingBottom: "10px" }}>
              <Text strong>Nombre</Text>
            </Row>
            <Row style={{ paddingBottom: "10px" }}>
              <Text strong>NIF/NIE</Text>
            </Row>
            <Row style={{ paddingBottom: "10px" }}>
              <Text strong>Rol</Text>
            </Row>
          </Col>
          <Col style={{ width: "50%" }}>
            <Row style={{ paddingBottom: "10px", fontSize: "15px" }}>
              <Text>{data.data?.me.firstName}</Text>
            </Row>
            <Row style={{ paddingBottom: "10px" }}>
              <Text>{data.data?.me.lastName}</Text>
            </Row>
            <Row style={{ paddingBottom: "10px" }}>
              <Text>{data.data?.me.dni}</Text>
            </Row>
            <Row style={{ paddingBottom: "10px" }}>{data.data?.me.roles}</Row>
          </Col>
        </Row>

        <Row type="flex" style={{ flexDirection: "column", display: "flex" }}>
          <Row>
            <a href="https://si.ua.es/es/documentos/documentacion/pdf-s/mozilla12-pdf.pdf">
              {" "}
              <Text style={{ color: "#FFA500", marginLeft: "10%", fontSize: "15px" }} strong>
                Ayuda
              </Text>
            </a>
          </Row>
          <Row>
            <Text style={{ color: "#FFA500", marginLeft: "10%", fontSize: "15px" }} strong>
              Contacto
            </Text>
          </Row>
          <Divider />
          <Row>
            <div
              onClick={() => {
                removeAuthToken();
                history.replace(routes.login);
              }}
              style={{ marginLeft: "10%" }}
            >
              <Text style={{ color: "#FC3F32", cursor: "pointer", fontSize: "15px" }} strong>
                Cerrar Sesión
              </Text>
            </div>
          </Row>
        </Row>
      </Row>
    </Layout.Sider>
  );
};

export default Sidebar;
