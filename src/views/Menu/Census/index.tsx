import React from "react";
import { Row, Col, Button, Typography } from "antd";
import { MenuButton } from "@Views";
import "./index.less";
import CensusButton from "./CensusButton";
import { useElectionsQuery } from "@Generated/hooks";

const { Text } = Typography;

const Census = () => {

  const data = useElectionsQuery();

  return (
    <Row justify="center" className="body">
      <Row style={{ marginTop: "3%", marginBottom: "1%" }}>
        <Text strong style={{ fontSize: "20px" }}>
          Seleccione la operación que desee realizar:
        </Text>
      </Row>
      <Row>
      {data.data?.pendingElections.map( elec => (  
          <CensusButton
            name={elec.description}
            dateInit={elec.start}
            dateEnd={elec.end}
            id={elec.id}
          />
        ))}
      </Row>
    </Row>
  );
  // }

  //return <div>{JSON.stringify(error)}</div>
};

export default Census;
