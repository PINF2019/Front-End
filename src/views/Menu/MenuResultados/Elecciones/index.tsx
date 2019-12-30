import React from 'react'
import { Row, Col, Button, Typography } from 'antd'
import { MenuButton } from '@Views'
import ElectionButton from '../../Election/election'
//import { useElectionNameQuery } from '@Generated/hooks'
const { Text } = Typography

const data = {
    data: [
        {
            name: 'Elecciones 1',
            dateInit: new Date(),
            dateEnd: new Date(),
            url: '/resultados/elecciones/estadisticas'
        },
        {
            name: 'Elecciones 2',
            dateInit: new Date(),
            dateEnd: new Date(),
            url: '/resultados/elecciones/estadisticas'
        },
        {
            name: 'Elecciones 3',
            dateInit: new Date(),
            dateEnd: new Date(),
            url: '/resultados/elecciones/estadisticas'
        }
    ]
}

const ResultadosElecciones = () => {
    //https://es.reactjs.org/docs/lists-and-keys.html
    // <Header />
    //const { data, error } = useElectionNameQuery()
    //if (data) {
    return (
        <Row justify="center" className="body">
            <Row style={{ marginTop: '3%', marginBottom: '1%' }}>
                <Text strong style={{ fontSize: '20px' }}>
                    Seleccione la operación que desee realizar:
        </Text>
            </Row>
            <Row>
                {data.data.map((data, index) => (
                    <ElectionButton
                        name={data.name}
                        dateInit={data.dateInit}
                        dateEnd={data.dateEnd}
                        url={data.url}
                    />
                ))}
            </Row>
        </Row>
    )
    // }

    //return <div>{JSON.stringify(error)}</div>
}

export default ResultadosElecciones