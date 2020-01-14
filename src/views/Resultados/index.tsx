import React from "react";
import { Divider, Row, Typography, Table, Col, Card } from "antd";
import { Bar, Pie } from "ant-design-pro/lib/Charts";
import "ant-design-pro/dist/ant-design-pro.css";
import { useParams } from "react-router-dom";
import { usePastElectionResultsQuery } from "@Generated/hooks";
import Title from "antd/lib/typography/Title";

const { Text } = Typography;

const columns = [
  {
    headerStyle: { textAlign: "center" },
    title: "CANDIDATO",
    dataIndex: "candidato",
    key: "candidato"
  },
  {
    title: "PDVP",
    dataIndex: "pdvp",
    key: "pdvp"
  },
  {
    title: "PNDVP",
    dataIndex: "pndvp",
    key: "pndvp"
  },
  {
    title: "PDINVP",
    key: "pdnivp",
    dataIndex: "pdnivp"
  },
  {
    title: "PAS",
    key: "pas",
    dataIndex: "pas"
  },
  {
    title: "ALU",
    key: "alu",
    dataIndex: "alu"
  },
  {
    title: "TOTAL",
    key: "total",
    dataIndex: "total"
  },
  {
    title: "% FINAL",
    key: "final",
    dataIndex: "final"
  }
];

const datatable = [
  {
    key: "1",
    candidato: "López Cala, Kevin ",
    pdvp: "x",
    pndvp: "y",
    pdnivp: "z",
    pas: "w",
    alu: "ñ",
    total: "m",
    final: "52,48%"
  },
  {
    key: "2",
    candidato: "Escribano Corrales, Raúl",
    pdvp: "x",
    pndvp: "y",
    pdnivp: "z",
    pas: "w",
    alu: "ñ",
    total: "m",
    final: "29,70%"
  },
  {
    key: "3",
    candidato: "Soriano Roldán, Claudia",
    pdvp: "x",
    pndvp: "y",
    pdnivp: "z",
    pas: "w",
    alu: "ñ",
    total: "m",
    final: "17,82%"
  }
];

const datos = [
  { x: "López Cala, kevin   ", y: 5300 },
  { x: "Escribano Corrales, Raúl   ", y: 3000 },
  { x: "Soriano Roldán, Claudia   ", y: 1800 }
];

const Resultados = () => {
  const {id} = useParams<{id:string}>();
  const {data} = usePastElectionResultsQuery({variables: {id}});
  const elecciones = data && data.electoralProcesses;
  return (
    <section id="target-pacing">
      <Row
        style={{
          height: "100%",
          backgroundColor: "#ffffff"
        }}
      >
        <Row
          style={{
            height: "100%",
            backgroundColor: "#ffffff",
            marginLeft: "3%"
          }}
        >
          <Row style={{ marginTop: "4%", marginBottom: "3%", width: "100%" }}>
            <Divider
              type="vertical"
              style={{
                height: "50%",
                width: "0.2%",
                borderRadius: "20%",
                backgroundColor: "#206489"
              }}
            >
              
              <Row style={{ width: "500%" }}>
              {elecciones?.map(e => {
                if(e.__typename == "Election"){
                  return(
                  <Row style = {{marginTop: '3%'}}><Card className = "card">
                  <Title><Text>Resultados de {e.description}</Text></Title>
                   <Text>{'\n'}{e.start.substring(8,10) + '/' + e.start.substring(5,7) + '/' + e.start.substring(0,4) + 
                   '-' + e.end.substring(8,10) + '/' + e.end.substring(5,7) + '/' + e.end.substring(0,4)}</Text>
                  </Card></Row>)
                }else{
                  return(
                  <Row style = {{marginTop: '3%'}}><Card className = "card">
                  <Title><Text>Resultados de {e.description}</Text></Title>
                   <Text>{'\n'}{e.start.substring(8,10) + '/' + e.start.substring(5,7) + '/' + e.start.substring(0,4) + 
                   '-' + e.end.substring(8,10) + '/' + e.end.substring(5,7) + '/' + e.end.substring(0,4)}</Text>
                  </Card></Row>)
                }
              })}

                <Text style={{ textAlign: "center", margin: "auto" }}>

                </Text>
              </Row>
            </Divider>
          </Row>
          <Divider
            type="vertical"
            style={{
              height: "3%",
              width: "0.2%",
              borderRadius: "20%",
              backgroundColor: "#FFA500"
              //marginLeft: "2%"
            }}
          >
            <Row style={{ width: "500%" }}>
              <Text strong style={{ fontSize: "18px", position: "static" }}>
                Datos globales <br />
              </Text>
            </Row>
          </Divider>
          <br />
          <div style={{ marginTop: "1%", marginLeft: "2%" }}>
            <Row align="middle">
              <Col span={4}>
                <Text strong>Número total de electores:</Text>
              </Col>
              <Col span={4}>23399</Col>
            </Row>
            <Row>
              <Col span={4}>
                <Text strong>Votos a candidaturas:</Text>
              </Col>
              <Col span={4}>6562</Col>
            </Row>
            <Row>
              <Col span={4}>
                <Text strong>Votos en blanco:</Text>
              </Col>
              <Col span={4}>79</Col>
            </Row>
            <Row>
              <Col span={4}>
                <Text strong>votos nulos:</Text>
              </Col>
              <Col span={4}>103</Col>
            </Row>
            <Row>
              <Col span={4}>
                <Text strong>Votos totales válidos:</Text>
              </Col>
              <Col span={4}>6641</Col>
            </Row>
            <Row>
              <Col span={4}>
                <Text strong>Participación:</Text>
              </Col>
              <Col span={4}>28,28%</Col>
            </Row>
            <Row>
              <Col span={4}>
                <Text strong>Abstención:</Text>
              </Col>
              <Col span={4}>71,18%</Col>
            </Row>
          </div>
          <Row
            style={{
              marginTop: "6%",
              marginBottom: "8%"
            }}
          >
            <Table
              style={{
                width: "93%",
                marginLeft: "2%"
              }}
              columns={columns}
              dataSource={datatable}
              pagination={false}
              bordered
            />
          </Row>

          <Row justify="center" style={{ marginBottom: "4%" }}>
            <Col
              span={12}
              style={{
                justifyContent: "center",
                width: "45%"
              }}
            >
              <Col
                style={{
                  width: "90%"
                }}
              >
                <Divider
                  type="vertical"
                  style={{
                    height: "3%",
                    width: "0.4%",
                    borderRadius: "20%",
                    backgroundColor: "#FFA500"
                  }}
                >
                  <Row style={{ width: "500%" }}>
                    <Text strong style={{ fontSize: "18px" }}>
                      Porcentaje de votos
                    </Text>
                  </Row>
                </Divider>
                <Row style={{ marginTop: "5%" }}>
                  <Pie
                    hasLegend
                    title="Votos"
                    subTitle="Votos"
                    total={() => (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: datos.reduce(
                            (pre: any, now: { y: any }) => now.y + pre,
                            0
                          )
                        }}
                      />
                    )}
                    data={datos}
                    valueFormat={val => (
                      <span dangerouslySetInnerHTML={{ __html: val }} />
                    )}
                    height={256}
                  />
                </Row>
              </Col>
            </Col>
            <Col span={12} style={{ width: "45%", marginLeft: "10%" }}>
              <Col
                style={{
                  width: "90%"
                }}
              >
                <Divider
                  type="vertical"
                  style={{
                    height: "3%",
                    width: "0.3%",
                    borderRadius: "20%",
                    backgroundColor: "#FFA500"
                  }}
                >
                  <Row style={{ width: "500%" }}>
                    <Text strong style={{ fontSize: "18px" }}>
                      Total de votos
                    </Text>
                  </Row>
                </Divider>
                <Row style={{ marginTop: "5%" }}>
                  <Bar style={{}} height={300} title="" data={datos} />
                </Row>
              </Col>
            </Col>
          </Row>
        </Row>
      </Row>
    </section>
  );
};

export default Resultados;
