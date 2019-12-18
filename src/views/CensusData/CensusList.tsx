import React from 'react'
import { Row, Card, Button, Col, Typography } from 'antd'

const { Text } = Typography

const CensusList = () => {

    const data = [
        'Rodriguez Pericacho, Felix',
        'Granados Valencia, Pablo',
        'Soriano Roldán, Claudia',
        'Cano Canalejas, Esperanza',
        'Martínez-Esparza Castro, Paloma',
        'Escribano Corrales, Raúl',
        'Castillo Caro, Iván',
        'Llamas Jaen, Carlos',
        'Sanabria Flores, Carlos Rodrigo',
        'Castaño Torres, José María',
        'Sánchez Muñoz, Antonio José',
        'Soriano Ruiz, Pedro',
        'Montero Domínguez, Rubén',
        'Coello López, Alberto',
        'Ruiz Bonald, Juan',
        'López Cala, Kevin',
        'de Celis Muñoz, Luís',
        'Román Aguilar, Rafael',
        'Ruiz de Celis, Carmen del Mar',
        'Moreno Gómez, Arturo',
        'López Márquez, Pablo',
        'Espinosa Barrios, Antonio',
        'García Pérez, Luis Miguel',
        'Rendón Salvador, Marta',
        'Romero Fernández, Borja'
    ]

    return (
        <ul>
            {data.map(elec => (
                <Row>
                    <li><Text style={{ fontSize: "15px" }}>{elec}</Text></li>
                </Row>
            ))
            }
        </ul>
    )
}

export default CensusList