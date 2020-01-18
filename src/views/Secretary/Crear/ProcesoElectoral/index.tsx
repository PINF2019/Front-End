import {
  Input,
  Button,
  Typography,
  Tabs,
  Select,
  InputNumber,
  DatePicker,
  Transfer,
  Divider,
  Row,
  Upload,
  Icon,
  message,
} from 'antd'

import { useColegiosyusuariosQuery,useCreateElectionMutation } from '@Generated/hooks'

import React, { useState } from 'react';


const { Text } = Typography
const { TabPane } = Tabs
const { RangePicker} = DatePicker
const f = new Date()
const { Option} = Select
const { Dragger } = Upload;



let PDVP:any;
let ALU:any;
let PAS:any;
let PDINVP:any;
let PNDVP:any;

/*
function cambioPDVP(value:any){
  PDVP = value;
}

function cambioPDINVP(value:any){
  PDINVP = value;
}

function cambioPNDVP(value:any){
  PNDVP = value;
}

function cambioPAS(value:any){
  PAS = value;
}

function cambioALU(value:any){
  ALU = value;
} */

let maxALU:number;


let maxvotos:any;
function numerovotaciones(value: any) {
  maxvotos= value;
}

let fstart:any
let fend:any

function changefecha(value: any) {
  fstart = new Date(value[0].valueOf()).toISOString()
  fend = new Date(value[1].valueOf()).toISOString()
}

function comprobarinicio(currentDate: any) {
  return f.valueOf() > currentDate.valueOf()
}

let colegio:any;

function organo(value:any) {

  colegio = value;
}

let censos:any;

const props = {
  name: 'file',
  accept: ".json",
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  multiple: false,
    onChange(info:any) {
    const { status } = info.file;
    if (status !== 'uploading') {
      const reader = new FileReader();
        reader.onload = (e) => {
          if(e.target)
           censos = e.target.result
        }
        reader.readAsText(info.file.originFileObj);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  
};



const input = {

  start: '',
  end: '',
  description:'',
  censuses: [],
  delegates: [],
  maxvotes: 1,
  candidates: [
    {
      firstName:'',
      lastName:'',
      about:''
    }
    
  ],
  voteWeights: [
    {
      group: '5e1dfd2ff9344483bc3ac1ae',
      weight: 20
    },
    {
      group: '5e1dfd2ff9344483bc3ac1af',
      weight: 20
    },
    {
      group: '5e1dfd2ff9344483bc3ac1b0',
      weight: 20
    },
    {
      group: '5e1dfd2ff9344483bc3ac1b1',
      weight: 20
    },
    {
      group: '5e1dfd2ff9344483bc3ac1ad',
      weight: 20
    }
  ]

}

let titulo:any

function asignartitulo(e:any){


  titulo = e.target.value;

}






const CrearEleccion = () => {
  const {data, loading} = useColegiosyusuariosQuery()
  

    const [targetKeys, setTargetKeys] = useState<string[]>([]);
    const [monckData, setMockData] = useState<any[]>([]);
  



    const renderitem = (item:any) =>{

      const customLabel = (
        <span className="custom-item">
          {item.title} - {item.description}
        </span>
      );
      
      return {
        label: customLabel, // for displayed item
        value: item.title, // for title and filter matching
      };
    }

    const actualizarCandidatos = () => {

      const Candidatos:any = [];

      
        data?.users.map(({uid,firstName,lastName,colegiateBody})=>{
          if(colegiateBody.id === colegio){
          
            const user = {
              key : `${uid}`,
              title: `${firstName}`,
              description: `${lastName}`
            }
            Candidatos.push(user)
          }
        });
      

      setMockData(Candidatos);
      setTargetKeys(targetKeys);


    }
  
    const filterOption = (inputValue: any, option: any) =>
      option.description.indexOf(inputValue) > -1;



    const ALUcambio = (value:any) =>{

      ALU = value;
      ALU = maxALU;
    }

    const PAScambio = (value:any) =>{

      PAS = value;
      maxALU = 100 - PAS - PDINVP - PDVP - PNDVP;
    }

    const PDINVPcambio = (value:any) =>{

      PDINVP = value;
      maxALU = 100 - PAS - PDINVP - PDVP - PNDVP;
    }

    const PDVPcambio = (value:any) =>{

      PDVP = value;
      maxALU = 100 - PAS - PDINVP - PDVP - PNDVP;
    }

    const PNDVPcambio = (value:any) =>{

      PNDVP = value;
      maxALU = 100 - PAS - PDINVP - PDVP - PNDVP;
    }

    const [create] = useCreateElectionMutation()

    const construireleccion = async (tipo:any = 1) =>{

      input.start = fstart;
      input.end = fend;
      input.censuses = JSON.parse(censos)
      input.description = titulo
      input.maxvotes = maxvotos

      let idcand:string

      if(tipo === 2){
        input.voteWeights = [
          {
            group: '5e1dfd2ff9344483bc3ac1ae',
            weight: PNDVP
          },
          {
            group: '5e1dfd2ff9344483bc3ac1af',
            weight: PDINVP
          },
          {
            group: '5e1dfd2ff9344483bc3ac1b0',
            weight: PAS
          },
          {
            group: '5e1dfd2ff9344483bc3ac1b1',
            weight: ALU
          },
          {
            group: '5e1dfd2ff9344483bc3ac1ad',
            weight: PDVP
          }
        ]
      }
        const ids = targetKeys.toString()

        let candidatos;
        for(let i = 0; i+9 <= ids.length; i += 10){

          idcand = ids.substr(i,9);

          data?.users.map(({uid,firstName,lastName})=>
          {
            if(uid === idcand){
              
              const user = {
                firstName: `${firstName}`,
                lastName: `${lastName}`,
                about: 'Candidado a las elecciones'

              }
              candidatos.push(user)
            }
        });
           
        }


        await create({variables: {input}})


      
    }



if (data) {
  return (
    <div>
       <Row
        style={{
          height: "100%",
          backgroundColor: "#ffffff",
          width:"100%"
        }}>
        <Row
          style={{
            height: "100%",
            backgroundColor: "#ffffff",
            width:"100%",
            
          }}
        >
          <Row style={{ marginTop: "10px", marginBottom: "10px", width: "100%", marginLeft:"3%" }}>
          <Divider
              type="vertical"
              style={{
                height: "50%",
                width: "0.2%",
                borderRadius: "20%",
                backgroundColor: "#206489"
              }}
            >
              <Row style={{ width: "500%" }}>
      <Text strong style={{ fontSize: '25px' }}>
        Crear votación
      </Text>
      </Row>
      </Divider>
      </Row>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Eleccion de representantes" key="1" >
          <form>
          <Row style={{height:"100%", backgroundColor:"#FFFFFF", width:"100%"}}> 
          <Row  style={{marginLeft: "6%"}}>
          <Row style={{ marginTop: "10px", marginBottom: "10px", width: "100%"}}>
          <Divider
              type="vertical"
              style={{
                height: "50%",
                width: "0.2%",
                borderRadius: "20%",
                backgroundColor: "#FFA500"
              }}
            >
              <Row style={{ width: "500%" }}>
          <Text strong style={{ fontSize: '20px' }}>
        Título de la elección
      </Text>
      </Row>
      </Divider>
      </Row>
      <br />

      <Input placeholder="Título" style={{ width: "30%" }} onChange={asignartitulo} />

      <br />
      <br />

      <Row style={{ marginTop: "10px", marginBottom: "10px", width: "100%" }}>
          <Divider
              type="vertical"
              style={{
                height: "50%",
                width: "0.2%",
                borderRadius: "20%",
                backgroundColor: "#FFA500"
              }}
            >

        <Text strong style={{ fontSize: '20px' }}>
        Candidatos
      </Text>
      </Divider>
      </Row>
      <br />

            <Select defaultValue="Organo Colegiado" 
            style={{ width: "30%" }} 
            onChange={organo}
            >
              {data?.collegiateBodies.map(({id,name}) =>
              (<Option value={id}>{name}</Option>)
              )}
            </Select>

          <br />
          <br />
          <Dragger {...props} style={{width:"30%"}}>
            <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Haz click o suelta el archivo en este área para subirlo</p>
            <p className="ant-upload-hint">
              Solo se permite subir censos en el formato json
            </p>
          </Dragger>
          <br />
          <br />
            
          <Transfer
            showSearch
            filterOption={filterOption}
            onChange={targetKeys => setTargetKeys(targetKeys)}
            targetKeys={targetKeys}
            dataSource={monckData}
            render={renderitem}
          />
            
            
            <br />
            <br />
            <Button onClick={actualizarCandidatos} style={{ background: '#FFA500', width:"150px",color:'#FFFFFF' }}>Actualizar</Button>
            <br />
            <br />

        <Text style={{ fontSize: '16px',marginRight:'20px' }}>
        Máximo número de votaciones
      </Text>
          <InputNumber
              min={1}
              max={10}
              placeholder="Número máximo de votaciones"
              onChange={numerovotaciones}
            />
            <br />
            <br />
            <Divider
              type="vertical"
              style={{
                height: "50%",
                width: "0.2%",
                borderRadius: "20%",
                backgroundColor: "#FFA500"
              }}
            >
            <Row style={{ width: "500%" }}>
            <Text strong style={{ fontSize: '20px' }}>Duración</Text>
            
            </Row>
            </Divider> 
            <br /> 
            <br /> 
            <RangePicker
              disabledDate={comprobarinicio}
              onChange={changefecha}
            />
            <br />
            <br />
            <Button href="http://localhost:3000/pickrole" style={{ background: '#206489',color:'#FFFFFF',width:"150px", marginLeft:"0px", marginBottom:"30px", marginRight:"50px"}}>Cancelar</Button>
            <Button onClick={construireleccion} style={{ background: '#FFA500', width:"150px",color:'#FFFFFF' }}>Crear eleccion</Button>
            </Row>
            </Row>
          </form>
        </TabPane>
        <TabPane
          tab="Elección de cargos unipersonales"
          key="2">

<Row style={{height:"100%", backgroundColor:"#FFFFFF", width:"100%"}}> 
          <Row  style={{marginLeft: "6%"}}>
          <Row style={{ marginTop: "10px", marginBottom: "10px", width: "100%"}}>
          <Divider
              type="vertical"
              style={{
                height: "50%",
                width: "0.2%",
                borderRadius: "20%",
                backgroundColor: "#FFA500"
              }}
            >
              <Row style={{ width: "500%" }}>
          <Text strong style={{ fontSize: '20px' }}>
        Título de la elección
      </Text>
      </Row>
      </Divider>
      </Row>
      <br />

      <Input placeholder="Título" style={{ width: "30%" }}  />

      <br />
      <br />

      <Row style={{ marginTop: "10px", marginBottom: "10px", width: "100%" }}>
          <Divider
              type="vertical"
              style={{
                height: "50%",
                width: "0.2%",
                borderRadius: "20%",
                backgroundColor: "#FFA500"
              }}
            >

        <Text strong style={{ fontSize: '20px' }}>
        Candidatos
      </Text>
      </Divider>
      </Row>
      <br />

      <Select defaultValue="Organo Colegiado" 
            style={{ width: "30%" }} 
            onChange={organo}
            >
              {data?.collegiateBodies.map(({id,name}) =>
              (<Option value={id}>{name}</Option>)
              )}
            </Select>

          <br />
          <br />
            
          <Dragger {...props} style={{width:"30%"}}>
            <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Haz click o suelta el archivo en este área para subirlo</p>
            <p className="ant-upload-hint">
              Solo se permite subir censos en el formato json
            </p>
          </Dragger>
          <br />
          <br />
            
          <Transfer
            showSearch
            filterOption={filterOption}
            onChange={targetKeys => setTargetKeys(targetKeys)}
            targetKeys={targetKeys}
            dataSource={monckData}
            render={renderitem}
          />

            <br />
            <br />
            <Button onClick={actualizarCandidatos} style={{ background: '#FFA500', width:"150px",color:'#FFFFFF' }}>Actualizar</Button>
            <br />
            <br />

        <Text style={{ fontSize: '16px',marginRight:'20px' }}>
        Máximo número de votaciones
      </Text>
          <InputNumber
              min={1}
              max={10}
              placeholder="Número máximo de votaciones"
              onChange={numerovotaciones}
            />
            <br />
            <Text style={{ fontSize: '16px',marginRight:'57px' }}>
            Profesores Doctores con Vinculación Permanente (PDVP)
          </Text>

            <InputNumber
              defaultValue={1}
              min={1}
              max={100}
              formatter={value => `${value}%`}
              onChange={PDVPcambio}
              />
            <br />
          <Text style={{ fontSize: '16px',marginRight:'20px' }}>
          Profesores No Doctores con Vinculación Permanente (PNDVP)
          </Text>
<InputNumber
      defaultValue={1}
      min={1}
      max={100}
      formatter={value => `${value}%`}
      onChange={PNDVPcambio}
    />
    <br />

    <Text style={{ fontSize: '16px',marginRight:'100px' }}>
          PDI Doctores sin vinculación Permanente (PDINVP)
          </Text>

<InputNumber
      defaultValue={1}
      min={1}
      max={100}
      formatter={value => `${value}%`}
      onChange={PDINVPcambio}
    />

    <br />

    <Text style={{ fontSize: '16px',marginRight:'137px' }}>
            Personal de Administración de Servicios (PAS)
          </Text>

<InputNumber
      defaultValue={1}
      min={1}
      max={100}
      formatter={value => `${value}%`}
      onChange={PAScambio}
    />
    <br />

    <Text style={{ fontSize: '16px',marginRight:'335px' }}>
          Estudiantes (ALU)
          </Text>

      <InputNumber
      defaultValue={1}
      min={1}
      max={100}
      formatter={value => `${value}%`}
      onChange={ALUcambio}
    /><br />
            <br />
            <Divider
              type="vertical"
              style={{
                height: "50%",
                width: "0.2%",
                borderRadius: "20%",
                backgroundColor: "#FFA500"
              }}
            >
            <Row style={{ width: "500%" }}>
            <Text strong style={{ fontSize: '20px' }}>Duración</Text>
            
            </Row>
            </Divider> 
            <br /> 
            <br /> 
            <RangePicker
              disabledDate={comprobarinicio}
              onChange={changefecha}
            />
            <br />
            <br />
            <Button href="http://localhost:3000/pickrole" style={{ background: '#206489',color:'#FFFFFF',width:"150px", marginLeft:"0px", marginBottom:"30px", marginRight:"50px"}}>Cancelar</Button>
            <Button style={{ background: '#FFA500', width:"150px",color:'#FFFFFF' }}>Crear eleccion</Button>
            </Row>
            </Row>

            
            </TabPane>


      </Tabs>
      </Row>
      </Row>
    </div>
  );
  }
  if (loading) {
    return <div>Cargando...</div>
  }
  return <div>Error...</div>
}





export default CrearEleccion
