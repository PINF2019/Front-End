import { useColegiosQuery } from '@Generated/hooks'
import {
  Button,
  DatePicker,
  Divider,
  Icon,
  Input,
  InputNumber,
  message,
  Row,
  Select,
  Tabs,
  Transfer,
  Typography,
  Upload,
} from 'antd'
import React, { useState } from 'react'

// import { useElectionNameQuery } from '@Generated/hooks'
const { Text } = Typography
const { TabPane } = Tabs
const { RangePicker } = DatePicker
const f = new Date()
const { Option } = Select
const { Dragger } = Upload

const targetkeys: string[] = []
const selectedkeys: any[] = []

const prueba: any = 3

const children: any[] = []
for (let i = 10; i < 36; i++) {
  const data = {
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    chosen: Math.random() * 2 > 1,
  }
  if (data.chosen) {
    targetkeys.push(data.key)
  }
  children.push(data)
}

let PDVP: any
let ALU: any
let PAS: any
let PDINVP: any
let PNDVP: any

function cambioPDVP(value: any) {
  PDVP = value
}

function cambioPDINVP(value: any) {
  PDINVP = value
}

function cambioPNDVP(value: any) {
  PNDVP = value
}

function cambioPAS(value: any) {
  PAS = value
}

function cambioALU(value: any) {
  ALU = value
}

let maxALU: number

function numerovotaciones(value: any) {
  console.log(`selected ${value}`)
}

function changefecha(value: any, fechas: any) {
  const start = new Date(value[0].valueOf())
  const end = new Date(value[1].valueOf())
}

function comprobarinicio(currentDate: any) {
  return f.valueOf() > currentDate.valueOf()
}

let colegio: any

function organo(value: any) {
  console.log(`${value}`)
  colegio = value
}

const props = {
  name: 'file',
  accept: '.json',
  multiple: false,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info: any) {
    const { status } = info.file
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
}

const CrearEleccion = () => {
  const { data, loading } = useColegiosQuery()

  const [targetKeys, setTargetKeys] = useState<string[]>([])
  const [monckData, setMockData] = useState<any[]>([])

  const item: any = []

  const renderitem = (item: any) => {
    const customLabel = (
      <span className="custom-item">
        {item.title} - {item.description}
      </span>
    )

    return {
      label: customLabel, // for displayed item
      value: item.title, // for title and filter matching
    }
  }

  const actualizarCandidatos = () => {
    const Candidatos: any = []
    const targetKeys: any = []

    {
      data?.users.map(({ id, firstName, lastName, colegiateBody }) => {
        const i = 0
        if (colegiateBody.id == colegio) {
          const user = {
            key: `${id}`,
            title: `${firstName}`,
            description: lastName.toString,
          }
          console.log(`${firstName}`)
          Candidatos.push(user)
        }
      })
    }

    setMockData(Candidatos)
    setTargetKeys(targetKeys)
  }

  const filterOption = (inputValue: any, option: any) =>
    option.description.indexOf(inputValue) > -1

  if (data) {
    return (
      <body>
        <Row
          style={{
            height: '100%',
            backgroundColor: '#ffffff',
            width: '100%',
          }}
        >
          <Row
            style={{
              height: '100%',
              backgroundColor: '#ffffff',
              width: '100%',
            }}
          >
            <Row
              style={{
                marginTop: '10px',
                marginBottom: '10px',
                width: '100%',
                marginLeft: '3%',
              }}
            >
              <Divider
                type="vertical"
                style={{
                  height: '50%',
                  width: '0.2%',
                  borderRadius: '20%',
                  backgroundColor: '#206489',
                }}
              >
                <Row style={{ width: '500%' }}>
                  <Text strong style={{ fontSize: '25px' }}>
                    Crear votación
                  </Text>
                </Row>
              </Divider>
            </Row>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Eleccion de representantes" key="1">
                <form>
                  <Row
                    style={{
                      height: '100%',
                      backgroundColor: '#FFFFFF',
                      width: '100%',
                    }}
                  >
                    <Row style={{ marginLeft: '6%' }}>
                      <Row
                        style={{
                          marginTop: '10px',
                          marginBottom: '10px',
                          width: '100%',
                        }}
                      >
                        <Divider
                          type="vertical"
                          style={{
                            height: '50%',
                            width: '0.2%',
                            borderRadius: '20%',
                            backgroundColor: '#FFA500',
                          }}
                        >
                          <Row style={{ width: '500%' }}>
                            <Text strong style={{ fontSize: '20px' }}>
                              Título de la elección
                            </Text>
                          </Row>
                        </Divider>
                      </Row>
                      <br />

                      <Input placeholder="Título" style={{ width: '30%' }} />

                      <br />
                      <br />

                      <Row
                        style={{
                          marginTop: '10px',
                          marginBottom: '10px',
                          width: '100%',
                        }}
                      >
                        <Divider
                          type="vertical"
                          style={{
                            height: '50%',
                            width: '0.2%',
                            borderRadius: '20%',
                            backgroundColor: '#FFA500',
                          }}
                        >
                          <Text strong style={{ fontSize: '20px' }}>
                            Candidatos
                          </Text>
                        </Divider>
                      </Row>
                      <br />

                      <Select
                        defaultValue="Organo Colegiado"
                        style={{ width: '30%' }}
                        onChange={organo}
                      >
                        {data?.collegiateBodies.map(({ id, name }) => (
                          <Option value={id}>{name}</Option>
                        ))}
                      </Select>

                      <br />
                      <br />
                      <Dragger {...props} style={{ width: '30%' }}>
                        <p className="ant-upload-drag-icon">
                          <Icon type="inbox" />
                        </p>
                        <p className="ant-upload-text">
                          Haz click o suelta el archivo en este área para
                          subirlo
                        </p>
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
                        onSearch={(dir: any, value: any) => {
                          console.log('search:', dir, value)
                        }}
                        render={renderitem}
                      />

                      <br />
                      <br />
                      <Button
                        onClick={actualizarCandidatos}
                        style={{
                          background: '#FFA500',
                          width: '150px',
                          color: '#FFFFFF',
                        }}
                      >
                        Actualizar
                      </Button>
                      <br />
                      <br />

                      <Text style={{ fontSize: '16px', marginRight: '20px' }}>
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
                          height: '50%',
                          width: '0.2%',
                          borderRadius: '20%',
                          backgroundColor: '#FFA500',
                        }}
                      >
                        <Row style={{ width: '500%' }}>
                          <Text strong style={{ fontSize: '20px' }}>
                            Duración
                          </Text>
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
                      <Button
                        style={{
                          background: '#206489',
                          color: '#FFFFFF',
                          width: '150px',
                          marginLeft: '0px',
                          marginBottom: '30px',
                          marginRight: '50px',
                        }}
                      >
                        Cancelar
                      </Button>
                      <Button
                        style={{
                          background: '#FFA500',
                          width: '150px',
                          color: '#FFFFFF',
                        }}
                      >
                        Crear eleccion
                      </Button>
                    </Row>
                  </Row>
                </form>
              </TabPane>
              <TabPane tab="Elección de cargos unipersonales" key="2">
                <Row
                  style={{
                    height: '100%',
                    backgroundColor: '#FFFFFF',
                    width: '100%',
                  }}
                >
                  <Row style={{ marginLeft: '6%' }}>
                    <Row
                      style={{
                        marginTop: '10px',
                        marginBottom: '10px',
                        width: '100%',
                      }}
                    >
                      <Divider
                        type="vertical"
                        style={{
                          height: '50%',
                          width: '0.2%',
                          borderRadius: '20%',
                          backgroundColor: '#FFA500',
                        }}
                      >
                        <Row style={{ width: '500%' }}>
                          <Text strong style={{ fontSize: '20px' }}>
                            Título de la elección
                          </Text>
                        </Row>
                      </Divider>
                    </Row>
                    <br />

                    <Input placeholder="Título" style={{ width: '30%' }} />

                    <br />
                    <br />

                    <Row
                      style={{
                        marginTop: '10px',
                        marginBottom: '10px',
                        width: '100%',
                      }}
                    >
                      <Divider
                        type="vertical"
                        style={{
                          height: '50%',
                          width: '0.2%',
                          borderRadius: '20%',
                          backgroundColor: '#FFA500',
                        }}
                      >
                        <Text strong style={{ fontSize: '20px' }}>
                          Candidatos
                        </Text>
                      </Divider>
                    </Row>
                    <br />

                    <Select
                      defaultValue="Organo Colegiado"
                      style={{ width: '30%' }}
                      onChange={organo}
                    >
                      {data?.collegiateBodies.map(({ id, name }) => (
                        <Option value={id}>{name}</Option>
                      ))}
                    </Select>

                    <br />
                    <br />

                    <Dragger {...props} style={{ width: '30%' }}>
                      <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                      </p>
                      <p className="ant-upload-text">
                        Haz click o suelta el archivo en este área para subirlo
                      </p>
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
                      onSearch={(dir: any, value: any) => {
                        console.log('search:', dir, value)
                      }}
                      render={renderitem}
                    />

                    <br />
                    <br />
                    <Button
                      onClick={actualizarCandidatos}
                      style={{
                        background: '#FFA500',
                        width: '150px',
                        color: '#FFFFFF',
                      }}
                    >
                      Actualizar
                    </Button>
                    <br />
                    <br />

                    <Text style={{ fontSize: '16px', marginRight: '20px' }}>
                      Máximo número de votaciones
                    </Text>
                    <InputNumber
                      min={1}
                      max={10}
                      placeholder="Número máximo de votaciones"
                      onChange={numerovotaciones}
                    />
                    <br />
                    <Text style={{ fontSize: '16px', marginRight: '57px' }}>
                      Profesores Doctores con Vinculación Permanente (PDVP)
                    </Text>

                    <InputNumber
                      defaultValue={1}
                      min={1}
                      max={100}
                      formatter={value => `${value}%`}
                      parser={value => PDVP.replace('%', '')}
                      onChange={cambioPDVP}
                    />
                    <br />
                    <Text style={{ fontSize: '16px', marginRight: '20px' }}>
                      Profesores No Doctores con Vinculación Permanente (PNDVP)
                    </Text>
                    <InputNumber
                      defaultValue={100}
                      min={0}
                      max={100}
                      formatter={value => `${value}%`}
                      parser={value => PNDVP.replace('%', '')}
                      onChange={cambioPDINVP}
                    />
                    <br />

                    <Text style={{ fontSize: '16px', marginRight: '100px' }}>
                      PDI Doctores sin vinculación Permanente (PDINVP)
                    </Text>

                    <InputNumber
                      defaultValue={100}
                      min={0}
                      max={100}
                      formatter={value => `${value}%`}
                      parser={value => PDINVP.replace('%', '')}
                      onChange={cambioPAS}
                    />

                    <br />

                    <Text style={{ fontSize: '16px', marginRight: '137px' }}>
                      Personal de Administración de Servicios (PAS)
                    </Text>

                    <InputNumber
                      defaultValue={100}
                      min={0}
                      max={100}
                      formatter={value => `${value}%`}
                      parser={value => PAS.replace('%', '')}
                      onChange={cambioPAS}
                    />
                    <br />

                    <Text style={{ fontSize: '16px', marginRight: '335px' }}>
                      Estudiantes (ALU)
                    </Text>

                    <InputNumber
                      defaultValue={100}
                      min={1}
                      max={40}
                      formatter={value => `${value}%`}
                      parser={value => ALU.replace('%', '')}
                      onChange={cambioALU}
                    />
                    <br />
                    <br />
                    <Divider
                      type="vertical"
                      style={{
                        height: '50%',
                        width: '0.2%',
                        borderRadius: '20%',
                        backgroundColor: '#FFA500',
                      }}
                    >
                      <Row style={{ width: '500%' }}>
                        <Text strong style={{ fontSize: '20px' }}>
                          Duración
                        </Text>
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
                    <Button
                      style={{
                        background: '#206489',
                        color: '#FFFFFF',
                        width: '150px',
                        marginLeft: '0px',
                        marginBottom: '30px',
                        marginRight: '50px',
                      }}
                    >
                      Cancelar
                    </Button>
                    <Button
                      style={{
                        background: '#FFA500',
                        width: '150px',
                        color: '#FFFFFF',
                      }}
                    >
                      Crear eleccion
                    </Button>
                  </Row>
                </Row>
              </TabPane>
            </Tabs>
          </Row>
        </Row>
      </body>
    )
  }
  if (loading) {
    return <div>Cargando...</div>
  }
  return <div>Error...</div>
}

export default CrearEleccion
