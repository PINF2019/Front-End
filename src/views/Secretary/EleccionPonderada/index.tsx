import React from 'react'
import {
  Card,
  Button,
  Typography,
  Tabs,
  Select,
  InputNumber,
  DatePicker
} from 'antd'
//import { useElectionNameQuery } from '@Generated/hooks'
const { Text } = Typography
const { TabPane } = Tabs
const { RangePicker, MonthPicker } = DatePicker
const f = new Date()
const format = 'HH:mm'
const { Option, OptGroup } = Select

const children: any[] = []
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

function handleChange(value: any) {
  console.log(`selected ${value}`)
}

function cambiorectificacion(e: any) {
  console.log(`selected ${e.target.value}`)
}

function cambioduracion(value: any) {
  console.log(`selected ${value}`)
}

function changefecha(value: any, fechas: any) {
  var start = new Date(value[0].valueOf())
  var end = new Date(value[1].valueOf())
}

function comprobarinicio(currentDate: any) {
  return f.valueOf() > currentDate.valueOf()
}

const { Title } = Typography

const CrearEleccionPonderada = () => {
  //const { data, error } = useElectionNameQuery()
  //if (data) {
  return (
    <body>
      <Text strong style={{ fontSize: '25px' }}>
        Crear elección
      </Text>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Eleccion de representantes" key="1">
          <form>
            <Text>Candidatos: </Text> <br></br>
            <Select
              placeholder="Organo colectivo"
              style={{ width: 200 }}
              onChange={handleChange}>
              <Option value="1">Opcion 1</Option>
              <Option value="2">Opcion 2</Option>
              <Option value="3">Opcion 3</Option>
            </Select>
            <br></br>
            <br></br>
            <Select
              mode="multiple"
              style={{ width: '50%' }}
              placeholder="Seleccione los candidatos"
              defaultValue={[]}
              onChange={handleChange}>
              {children}
            </Select>
            <br></br>
            <br></br>
            Máximo número de votaciones:
            <Card
              title="Buscar"
              extra={<a href="#">More</a>}
              style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card
              title="Buscar"
              extra={<a href="#">More</a>}
              style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <br></br>
            <br></br>
            <Text style={{ fontSize: '20px' }}>Duración:</Text>
            <br></br>
            <RangePicker
              disabledDate={comprobarinicio}
              onChange={changefecha}
            />
            <br></br>
            <br></br>
            <Button style={{ background: '#206489' }}>Enviar</Button>
            <Button style={{ background: '#FFA500' }}>Cancelar</Button>
          </form>
        </TabPane>
        <TabPane
          tab="Elección de cargos unipersonales"
          disabled
          key="2"></TabPane>
      </Tabs>
    </body>
  )
}

export default CrearEleccionPonderada
