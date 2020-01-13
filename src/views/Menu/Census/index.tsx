import React from "react";
import { Row, Col, Button, Typography } from "antd";
import { MenuButton } from "@Views";
import "./index.less";
import CensusButton from "./CensusButton";
import { useElectionsQuery } from "@Generated/hooks";

const { Text } = Typography;

const datass = {
  data: [
    {
      name: "Censo 1",
      dateInit: "19-05-2019",
      dateEnd: "20-01-2020",
      id: "1"
    },
    {
      name: "Censo 2",
      dateInit: "20-05-2019",
      dateEnd: "21-01-2020",
      id: "2"
    },
    {
      name: "Censo 3",
      dateInit: "21-05-2019",
      dateEnd: "22-01-2020",
      id: "3"
    }
  ]
};

const Census = () => {

  const data = useElectionsQuery();

  return (
    <Row justify="center" className="body">
      <Row className = "RowTexto">
        <Text strong className = "textoTitulo">
          Seleccione que censo quiere conocer:
        </Text>
      </Row>
      <Row>
{
      data.data?.pendingElections.map( elec => (  
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