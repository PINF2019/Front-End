import { usePastElectionResultsQuery } from "@Generated/hooks";
import { Row, Typography } from "antd";
import React from "react";
import ElectionButton from "../Election/election";
const { Text } = Typography;
//la interrogacion comprueba que no sea nulo
const MenuResultados = () => {
  const { data, error } = usePastElectionResultsQuery();
  if (data) {
    return (
      <Row justify="center" className="body" style={{ marginTop: '3%' }}>
        <Row className="layout" style={{ marginBottom: '10%' }}>
          <Text strong style={{ fontSize: "30px" }}>
            Seleccione qué resultados quiere conocer
          </Text>
        </Row>
        <Row>
          {data.electoralProcesses.map(eprocess => /*{
            if (eprocess.__typename == "ELection") {

            }
          }*/ (
              <ElectionButton
                name={eprocess.description}
                dateInit={eprocess.start}
                dateEnd={eprocess.end}
                id={eprocess.id}
                href={"resultados"}
              />
            ))}
        </Row>
      </Row>
    );
  } else return <div>{JSON.stringify(error)}</div>;
};

export default MenuResultados;
