import React from "react";
import { Row, Col, Button, Typography } from "antd";
import { MenuButton } from "@Views";
import "./index.less";
import ElectionButton from "../Election/election";
import { useElectionNameQuery } from "@Generated/hooks";
//import { useElectionNameQuery } from '@Generated/hooks'
const { Text } = Typography;

const Census = () => {
  //https://es.reactjs.org/docs/lists-and-keys.html
  // <Header />
  //const { data, error } = useElectionNameQuery()
  //if (data) {
    const data = useElectionNameQuery();
  return (
    <Row justify="center" className="body">
      <Row style={{ marginTop: "3%", marginBottom: "1%" }}>
        <Text strong style={{ fontSize: "20px" }}>
          Seleccione la operación que desee realizar:
        </Text>
      </Row>
      <Row>
        {data.data?.elections.map( elec => (  
          <ElectionButton
            name={elec.description}
            dateInit={new Date(elec.start)}
            dateEnd={new Date(elec.end)}
            url={'/census/data'}
          />
        ))}
      </Row>
    </Row>
  );
  // }

  //return <div>{JSON.stringify(error)}</div>
};

export default Census;
