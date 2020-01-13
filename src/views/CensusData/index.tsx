import React from 'react'
import { Row, Card, Button, Col, Icon, Typography } from 'antd'
import { useParams, useHistory } from "react-router-dom";
import { useCensusQuery, Census } from '@Generated/hooks';
import './index.less';

const {Title, Text} = Typography


const CensusData = () => {
    const {id} = useParams<{id:string}>();
    const {data} = useCensusQuery({variables: {id}});
    return (
        <Row className = "RowGlo">
        <Row className = "RowGlo2">
        <Card className = "card">
        <Title><Text>Censo de {{data}.data?.election.description}</Text></Title>
         <Text>{'\n'}{{data}.data?.election.start.substring(8,10) + '/' + {data}.data?.election.start.substring(5,7) + '/' + {data}.data?.election.start.substring(0,4) + 
         '-' + {data}.data?.election.end.substring(8,10) + '/' + {data}.data?.election.end.substring(5,7) + '/' + {data}.data?.election.end.substring(0,4)}</Text>
        </Card>
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
                          {elec.voters.map(vot => (
                             <Text style={{ fontSize: "15px" }}>{vot.lastName + ',' + vot.firstName } </Text>        
                         ))}
                         
                     </Row>
                 ))}
             </ul>
         </Row>
     </Row></Row>
    )
}

export default CensusData