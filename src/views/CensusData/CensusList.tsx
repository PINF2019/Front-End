import React from 'react'
import { Row, Card, Button, Col, Typography } from 'antd'

const { Text } = Typography

const CensusList = () => {

    const data = [
        'Espinosa Barrios, Antonio',
        'Rodriguez García, Manuel'
    ]

    return(
        <ul>
            {data.map(elec => (
                <Row>
                    <Text>{elec}</Text>
                </Row>
            ))
            }
        </ul>
    )
}

export default CensusList