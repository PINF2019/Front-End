import React from 'react'
import { Button, Radio } from 'antd'

type Props = {
    name: string
    index: number
}
const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px'
}

const ElectionButton2 = (props: Props) => {
    return (
        <Button className="button" style={{ marginTop: '5%' }}>
            <Radio style={radioStyle} value={props.index}>
                {props.name}
            </Radio>
        </Button>
    )
}
export default ElectionButton2