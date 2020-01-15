import React from "react";
import { Row, Col, Button, Typography, Layout } from "antd";
import { MenuButton } from "@Views";
import Background from '../../../assets/Wallpaper.png'
//import { useElectionNameQuery } from '@Generated/hooks'
const { Text } = Typography;

const data = {
  data: [
    { name: "Eleccion", url: "/secretary/procesoElectoral/crear/eleccion" },
    { name: "Votacion", url: "/secretary/procesoElectoral/crear/votacion" }
  ]
};

const MenuCrearEleccion = () => {
  //https://es.reactjs.org/docs/lists-and-keys.html
  // <Header />
  //const { data, error } = useElectionNameQuery()
  //if (data) {
  return (
    <Layout style={{
      backgroundImage: 'url(' + Background + ')',
      height: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <Row justify="center" className="body" style={{ marginTop: '3%' }}>
        <Row className="layout" style={{ marginBottom: '10%' }}>
          <Text strong style={{ fontSize: "30px" }}>
            Crear Proceso Electoral
        </Text>
        </Row>
        <Row>
          {data.data.map((data, index) => (
            <MenuButton name={data.name} url={data.url} />
          ))}
        </Row>
      </Row>
    </Layout>
  );
  // }

  //return <div>{JSON.stringify(error)}</div>
};

export default MenuCrearEleccion;
