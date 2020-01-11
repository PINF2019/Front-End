
import React from "react";
import { Row, Col, Button, Typography } from "antd";
import  ButtonEliminar from "./ButtonEliminar";
import { useElectoralProcessesQuery } from '@Generated/hooks'
const { Text } = Typography;



const MenuEliminarElecciones = () => {
  const { data, error } = useElectoralProcessesQuery();
  if (data) {
  return (
    <Row justify="center" className="body">
      <Row style={{ marginTop: "3%", marginBottom: "1%" }}>
        <Text strong style={{ fontSize: "20px" }}>
          Eliminar Procesos Electorales
        </Text>
      </Row>
      <Row>
      {data.electoralProcesses.map(d => (
            <ButtonEliminar name={d.description} id ={d.id} href={"eliminar"} />
          ))}
      </Row>
    </Row>
  );
 }
  return <div>{JSON.stringify(error)}</div>
};

export default MenuEliminarElecciones;
