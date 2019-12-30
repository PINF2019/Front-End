import React from "react";
import { Row, Col, Button, Typography } from "antd";
import { MenuButton } from "@Views";
//import { useElectionNameQuery } from '@Generated/hooks'
import "./index.less";
const { Text } = Typography;

const data = {
  data: [
    { name: "Votación", url: "/votacion/simple" },
    { name: "Elección", url: "/election" }
  ]
};

const MenuUser = () => {
  //https://es.reactjs.org/docs/lists-and-keys.html
  // <Header />
  //const { data, error } = useElectionNameQuery()
  //if (data) {
  return (
    <Row justify="center" className="body">
      <Row
        type="flex"
        justify="center"
        style={{ height: "10vh", paddingTop: "30px" }}
      >
        <Text strong style={{ fontSize: "30px", paddingTop: "50px" }}>
          Seleccione la operación que desee realizar:
        </Text>
      </Row>
      <Row
        justify="center"
        align="middle"
        style={{ height: "100%", marginTop: "50px" }}
      >
        {data.data.map((data, index) => (
          <MenuButton name={data.name} url={data.url} />
        ))}
      </Row>
    </Row>
  );
  // }

  //return <div>{JSON.stringify(error)}</div>
};

export default MenuUser;
