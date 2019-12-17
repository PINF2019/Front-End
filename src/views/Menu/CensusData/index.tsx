import React from 'react'
import { Row, Card, Button, Col, Icon, Typography } from 'antd'
import CensusList from './CensusList'

const {Title, Text} = Typography

type Props = {
    name: String
    dateInit: String
    dateEnd: String
}


const CensusData = () => {
    const data = 
        {name: 'Eleccion 1', dateInit: new Date(), dateEnd: new Date() }
    return (
        <Row>
            <Title><Text>Censo de {data.name}</Text></Title>
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
                    <CensusList />
            </Row>
        </Row>
    )
}

export default CensusData