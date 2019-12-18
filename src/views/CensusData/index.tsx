import React from 'react'
import { Divider, Row, Card, Button, Col, Icon, Typography } from 'antd'
import CensusList from './CensusList'

const { Title, Text } = Typography

type Props = {
    name: String
    dateInit: String
    dateEnd: String
}


const CensusData = () => {
    const data =
        { name: 'Eleccion 1', dateInit: new Date(), dateEnd: new Date() }
    return (
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
                            height: "3%",
                            width: "0.2%",
                            borderRadius: "20%",
                            backgroundColor: "#FFA500"
                            //marginLeft: "2%"
                        }}
                    >
                        <Row style={{ width: "500%" }}>
                            <Text strong style={{ fontSize: "30px" }}>
                                Censo de {data.name}
                            </Text>
                        </Row>
                    </Divider>
                </Row>
                <Row style={{ paddingBottom: "30px" }}>
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
                            <Text strong style={{ fontSize: "20px", position: "static" }}>
                                Integrantes <br />
                            </Text>
                        </Row>
                    </Divider>
                </Row>
                <CensusList />
            </Row>
        </Row>
    )
}

export default CensusData