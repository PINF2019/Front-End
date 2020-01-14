
import React from "react";
import { Row, Col, Button, Typography } from "antd";
import { MenuButton } from "@Views";
import ButtonModificar from "./ButtonModificar";
import {useElectoralProcessesQuery} from '@Generated/hooks'
const { Text } = Typography;



const MenuModificarElecciones = () => {
  const { data, error } = useElectoralProcessesQuery();
  if (data) {
    return (
      <Row justify="center" className="body">
        <Row style={{ marginTop: "3%", marginBottom: "1%" }}>
          <Text strong style={{ fontSize: "20px" }}>
            Modificar Procesos Electorales
          </Text>
        </Row>
        <Row>
          {data.pendingElectoralProcesses.map(d => (
            <ButtonModificar name={d.description} id ={d.id} href={"modificar"} />
          ))}
        </Row>
      </Row>
    );
  }

  return <div>{JSON.stringify(error)}</div>
};

export default MenuModificarElecciones;
