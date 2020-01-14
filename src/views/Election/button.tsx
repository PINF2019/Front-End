import { Button, Radio } from 'antd'
import React from 'react'

type Props = {
  name: string
  index: number
}
const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
}

const ElectionButton2 = ({ name, index }: Props) => {
  return (
    <Button className="button" style={{ marginTop: '5%' }}>
      <Radio style={radioStyle} value={index}>
        {name}
      </Radio>
    </Button>
  )
}
export default ElectionButton2
