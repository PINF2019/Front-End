import React from 'react'
import ReactDOM from 'react-dom';
import {
  Card,
  Button,
  Typography,
  Tabs,
  Select,
  InputNumber,
  DatePicker,
  Transfer
} from 'antd'
import Selector from './select';
//import { useElectionNameQuery } from '@Generated/hooks'
const { Text } = Typography
const { TabPane } = Tabs
const { RangePicker, MonthPicker } = DatePicker
const f = new Date()
const format = 'HH:mm'
const { Option, OptGroup } = Select

var targetkeys :string[] = [];
var selectedkeys:any[] = [];

const children: any[] = []
for (let i = 10; i < 36; i++) {
  const data = {
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    chosen: Math.random() * 2 > 1,
  };
  if (data.chosen) {
    targetkeys.push(data.key);
  }
  children.push(data);
}
  
function numerovotaciones(value: any) {
  console.log(`selected ${value}`);
  console.log('LAS TARGET LOKO', targetkeys);
}

function changefecha(value: any, fechas: any) {
  var start = new Date(value[0].valueOf())
  var end = new Date(value[1].valueOf())
}

function comprobarinicio(currentDate: any) {
  return f.valueOf() > currentDate.valueOf()
}



function organo(value:any) {

  console.log('hola');
  
}

const GenerarEleccionView = () => {
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

          <Select defaultValue="Organo colectivo" 
          style={{ width: "30%" }} 
          onChange={organo}
          >
            <Option value="PAS">PDVP</Option>
            <Option value="PDI">PNDVP</Option>
            <Option value="alumnos">PDINVP</Option>
            <Option value="alumnos">PAS</Option>
            <Option value="alumnos">ALU</Option>
          </Select>

          <br></br>
          <br></br>
            <Selector/>

            
            
            <br></br>
            <br></br>
            <InputNumber
              min={1}
              max={10}
              placeholder="Número máximo de votaciones"
              onChange={numerovotaciones}
            />
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
            <Button style={{ background: '#206489',color:'#FFFFFF' }}>Enviar</Button>
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

export default GenerarEleccionView
