import React, { useState } from 'react'
import {
  Input,
  Button,
  Typography,
  Tabs,
  InputNumber,
  DatePicker,
  Row,
  Divider,
  Upload,
  message,
  Icon,
} from 'antd'
import { useHistory } from 'react-router-dom'

import routes from '@Routes'

import {
  useColegiosyusuariosQuery,
  useCrearPollMutation,
} from '@Generated/hooks'

// import { useElectionNameQuery } from '@Generated/hooks'
const { Text } = Typography
const { TabPane } = Tabs
const { RangePicker } = DatePicker
const f = new Date()
const { TextArea } = Input
const { Dragger } = Upload

let censos: any

const props = {
  name: 'file',
  accept: '.json',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  multiple: false,
  onChange(info: any) {
    const { status } = info.file
    if (status !== 'uploading') {
      const reader = new FileReader()
      reader.onload = e => {
        if (e.target) censos = e.target.result
      }
      reader.readAsText(info.file.originFileObj)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
}

let nPropuestas: any
let p1: any = true
let p2: any = true
let p3: any = true
let p4: any = true

function cambioP1(value: any) {
  p1 = value.target.value
}

function cambioP2(value: any) {
  p2 = value.target.value
}

function cambioP3(value: any) {
  p3 = value.target.value
}

function cambioP4(value: any) {
  p4 = value.target.value
}

let fstart: any
let fend: any
let title: any
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let desc: any
let votoxmax = 1

function numerovotaciones(value: any) {
  votoxmax = value
}

function changefecha(value: any) {
  fstart = new Date(value[0].valueOf()).toISOString()
  fend = new Date(value[1].valueOf()).toISOString()
}

function comprobarinicio(currentDate: any) {
  return f.valueOf() > currentDate.valueOf()
}

function ponertitulo(value: any) {
  title = value.target.value
}

function ponerdescripcion(value: any) {
  desc = value.target.value
}

const input = {
  start: '',
  end: '',
  description: '',
  censuses: [],
  delegates: [],
  maxVotes: 1,
  question: 'prueba',
  options: ['A Favor', 'En Contra', 'Abstención'],
  isRealTime: false,
}

const Crearvotacion = () => {
  const { data, loading } = useColegiosyusuariosQuery()
  const history = useHistory()

  const [Prop3, setProp3] = useState(true)
  const [Prop4, setProp4] = useState(true)

  function cambioPropuestas(value: any) {
    nPropuestas = value
    if (value >= 3) {
      setProp3(false)
      if (value >= 4) {
        setProp3(false)
        setProp4(false)
      }
    } else {
      setProp3(true)
      setProp4(true)
    }
  }

  const [poll] = useCrearPollMutation()

  const cronstruirpoll = async () => {
    input.start = fstart
    input.end = fend
    input.description = title
    input.censuses = JSON.parse(censos)

    await poll({ variables: { input } })
    history.push(routes.procesoCreado)
  }

  const cronstruirpollcompleja = async () => {
    input.start = fstart
    input.end = fend
    input.description = title
    input.censuses = JSON.parse(censos)
    input.maxVotes = votoxmax

    if (nPropuestas >= 3) {
      if (nPropuestas === 4) {
        input.options = [`${p1}`, `${p2}`, `${p3}`, `${p4}`]
      } else {
        input.options = [`${p1}`, `${p2}`, `${p3}`]
      }
    } else {
      input.options = [`${p1}`, `${p2}`]
    }

    await poll({ variables: { input } })
    history.push(routes.procesoCreado)
  }

  const cronstruirpollpresencial = async () => {
    input.start = fstart
    input.end = fend
    input.description = title
    input.censuses = JSON.parse(censos)

    if (nPropuestas >= 3) {
      if (nPropuestas === 4) {
        input.options = [`${p1}`, `${p2}`, `${p3}`, `${p4}`]
      } else {
        input.options = [`${p1}`, `${p2}`, `${p3}`]
      }
    } else {
      input.options = [`${p1}`, `${p2}`]
    }

    await poll({ variables: { input } })
    history.push(routes.procesoCreado)
  }

  if (data) {
    return (
      <div>
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
                    Crear elección
                  </Text>
                </Row>
              </Divider>
            </Row>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Votación Simple" key="1">
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
                            Título de la votación
                          </Text>
                        </Row>
                      </Divider>
                    </Row>
                    <br />

                    <Input
                      onChange={ponertitulo}
                      placeholder="Título"
                      style={{ width: '30%' }}
                    />

                    <br />

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
                        <Row style={{ width: '500%' }}>
                          <Text strong style={{ fontSize: '20px' }}>
                            Descripción de la votación
                          </Text>
                        </Row>
                      </Divider>
                    </Row>

                    <br />

                    <TextArea
                      onChange={ponerdescripcion}
                      rows={4}
                      placeholder="Propuesta"
                      style={{ width: '30%' }}
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
                      name="start"
                    />

                    <br />
                    <br />
                    <Button
                      href="http://localhost:3000/pickrole"
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
                      onClick={cronstruirpoll}
                      style={{
                        background: '#FFA500',
                        width: '150px',
                        color: '#FFFFFF',
                      }}
                    >
                      Crear votación
                    </Button>
                  </Row>
                </Row>
              </TabPane>
              <TabPane tab="Votación Compleja" key="2">
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
                            Título de la votación
                          </Text>
                        </Row>
                      </Divider>
                    </Row>
                    <br />

                    <Input
                      onChange={ponertitulo}
                      placeholder="Título"
                      style={{ width: '30%' }}
                    />

                    <br />
                    <br />

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
                          Propuestas
                        </Text>
                      </Divider>
                    </Row>
                    <br />

                    <Text strong style={{ fontSize: '16px' }}>
                      Número de propuestas
                    </Text>
                    <InputNumber
                      defaultValue={2}
                      min={2}
                      max={4}
                      onChange={cambioPropuestas}
                      style={{ marginLeft: '77px' }}
                    />
                    <br />
                    <br />
                    <Text strong style={{ fontSize: '16px' }}>
                      Máximo número de votaciones
                    </Text>

                    <InputNumber
                      defaultValue={1}
                      min={1}
                      max={10}
                      onChange={numerovotaciones}
                      style={{ marginLeft: '20px' }}
                    />
                    <br />
                    <br />

                    <Input
                      onChange={cambioP1}
                      placeholder="Propuesta 1"
                      style={{ width: '30%' }}
                    />
                    <br />
                    <br />

                    <Input
                      onChange={cambioP2}
                      placeholder="Propuesta 2"
                      style={{ width: '30%' }}
                    />
                    <br />
                    <br />

                    <Input
                      onChange={cambioP3}
                      placeholder="Propuesta 3"
                      style={{ width: '30%' }}
                      disabled={Prop3}
                    />
                    <br />
                    <br />

                    <Input
                      onChange={cambioP4}
                      placeholder="Propuesta 4"
                      style={{ width: '30%' }}
                      disabled={Prop4}
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
                      href="http://localhost:3000/pickrole"
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
                      onClick={cronstruirpollcompleja}
                      style={{
                        background: '#FFA500',
                        width: '150px',
                        color: '#FFFFFF',
                      }}
                    >
                      Crear votación
                    </Button>
                  </Row>
                </Row>
              </TabPane>

              <TabPane tab="Votación Presencial" key="3">
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
                            Título de la votación
                          </Text>
                        </Row>
                      </Divider>
                    </Row>

                    <br />

                    <Input
                      onChange={ponertitulo}
                      placeholder="Título"
                      style={{ width: '30%' }}
                    />
                    <br />

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
                          Propuestas
                        </Text>
                      </Divider>
                    </Row>
                    <br />
                    <Text strong style={{ fontSize: '16px' }}>
                      Número de propuestas
                    </Text>
                    <InputNumber
                      defaultValue={2}
                      min={2}
                      max={4}
                      onChange={cambioPropuestas}
                      style={{ marginLeft: '77px' }}
                    />
                    <br />
                    <br />
                    <Text strong style={{ fontSize: '16px' }}>
                      Máximo número de votaciones
                    </Text>

                    <InputNumber
                      defaultValue={1}
                      min={1}
                      max={10}
                      onChange={numerovotaciones}
                      style={{ marginLeft: '20px' }}
                    />
                    <br />
                    <br />

                    <Input
                      onChange={cambioP1}
                      placeholder="Propuesta 1"
                      style={{ width: '30%' }}
                    />
                    <br />
                    <br />

                    <Input
                      onChange={cambioP2}
                      placeholder="Propuesta 2"
                      style={{ width: '30%' }}
                    />
                    <br />
                    <br />

                    <Input
                      onChange={cambioP3}
                      placeholder="Propuesta 3"
                      style={{ width: '30%' }}
                      disabled={Prop3}
                    />
                    <br />
                    <br />

                    <Input
                      onChange={cambioP4}
                      placeholder="Propuesta 4"
                      style={{ width: '30%' }}
                      disabled={Prop4}
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
                      href="http://localhost:3000/pickrole"
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
                      onClick={cronstruirpollpresencial}
                      style={{
                        background: '#FFA500',
                        width: '150px',
                        color: '#FFFFFF',
                      }}
                    >
                      Crear votación
                    </Button>
                  </Row>
                </Row>
              </TabPane>
            </Tabs>
          </Row>
        </Row>
      </div>
    )
  }
  if (loading) {
    return <div>Cargando...</div>
  }
  return <div>Error...</div>
}

export default Crearvotacion
