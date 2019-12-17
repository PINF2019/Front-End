import React from 'react'
import { Button, Typography } from 'antd'
//import { useElectionNameQuery } from '@Generated/hooks'
import routes from '@Routes'
import { Select } from 'antd'
import { Radio } from 'antd'
import { InputNumber } from 'antd'
import { TimePicker } from 'antd'
import moment from 'moment'
import { DatePicker } from 'antd'
import { Card, Row } from 'antd'

const { RangePicker, MonthPicker } = DatePicker
const { Option } = Select
const f = new Date()
const format = 'HH:mm'

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

const GenerarEleccionView = () => {
    //https://es.reactjs.org/docs/lists-and-keys.html
    // <Header />
    //const { data, error } = useElectionNameQuery()
    //if (data) {
    return (
        <body>
            <form>
                Candidatos:
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
                Rectificación:
        <Radio.Group onChange={cambiorectificacion}>
                    <Radio value={1}>Sí</Radio>
                    <Radio value={2}>No</Radio>
                </Radio.Group>
                <br></br>
                <br></br>
                Votar en más de un grupo:
        <Radio.Group onChange={cambiorectificacion}>
                    <Radio value={1}>Sí</Radio>
                    <Radio value={2}>No</Radio>
                </Radio.Group>
                <br></br>
                <br></br>
                Duración:
        <RangePicker disabledDate={comprobarinicio} onChange={changefecha} />
                <br></br>
                <br></br>
                Número de votaciones realizables:
        <InputNumber
                    min={1}
                    max={10}
                    placeholder="Introduzca la duración de la votación"
                    onChange={cambioduracion}
                />
                <br></br>
                <br></br>
                <Button style={{ background: '#206489' }}>Enviar</Button>
                <Button style={{ background: '#FFA500' }}>Cancelar</Button>
            </form>
        </body>
    )
}

export default GenerarEleccionView