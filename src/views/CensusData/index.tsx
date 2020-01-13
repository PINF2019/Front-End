import React from 'react'
import { Row, Card, Button, Col, Icon, Typography } from 'antd'
import { useParams, useHistory } from "react-router-dom";
import { useCensusQuery, Census } from '@Generated/hooks';

const {Title, Text} = Typography


const CensusData = () => {
    const {id} = useParams<{id:string}>();
    const {data} = useCensusQuery({variables: {id}});
    return (
        <Row>
            <Title><Text>Censo de {{data}.data?.election.description}</Text></Title>
            <Row>
                <Text style={{ fontSize: '30px', paddingTop: '50px' }}>Secretario:</Text>
                    <ul>
                        Apellido1 Apellido2, Nombre
                    </ul>
                <Text style={{ fontSize: '30px', paddingTop: '50px' }}>Subsecretario:</Text>
                    <ul>
                        Apellido1 Apellido2, Nombre
                    </ul>
                <Text style={{ fontSize: '30px', paddingTop: '50px' }}>Votantes:</Text>
                <ul>
                    {{data}.data?.election.censuses.map(elec => (
                        <Row>
                            <Text  style={{ fontSize: "15px" }}>{elec.voters.map}</Text>
                        </Row>
                    ))}
                </ul>
            </Row>
        </Row>
    )
}

export default CensusData