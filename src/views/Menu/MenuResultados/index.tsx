import { usePastElectionResultsQuery } from "@Generated/hooks";
import { Row, Typography } from "antd";
import React from "react";
import ElectionButton from "../Election/election";
const { Text } = Typography;
//la interrogacion comprueba que no sea nulo()
const MenuResultados = () => {
  const data = usePastElectionResultsQuery();

  return (
    //<Layout style = {{height: '100%', width: '100%', backgroundColor: '#ffffff', overflow: 'auto'}} >
    <Row
      justify="center"
      className="body"
      style={{ marginTop: "3%", backgroundColor: "white" }}
    >
      <Row className="layout" style={{ marginBottom: "10%" }}>
        <Text strong style={{ fontSize: "30px" }}>
          Votaciones finalizadas
        </Text>
      </Row>
      <Row>
        {data.data?.electoralProcesses.map(eprocess => {
          if (eprocess.__typename == "Election") {
            return (
              <ElectionButton
                name={eprocess.description}
                dateInit={eprocess.start}
                dateEnd={eprocess.end}
                id={eprocess.id}
                href={"resultados"}
              />
            );
          } else {
            return (
              <ElectionButton
                name={eprocess.description}
                dateInit={eprocess.start}
                dateEnd={eprocess.end}
                id={eprocess.id}
                href={"resultados/polls"}
              />
            );
          }
        })}
      </Row>
    </Row> //</Layout>
  );
};

export default MenuResultados;
