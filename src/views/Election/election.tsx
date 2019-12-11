import React from 'react'
import { Button, Icon } from 'antd'

type Props = {
  name: string
  key: number
  dateInit: Date
  dateEnd: Date
}
// por que tengo que especificar el tipo si realmente todo eso
// esta definido en el back?
// style={{ background: 'rgba(196, 196, 196, 0.7)' }}
const ElectionButton = (props: Props) => {
  return (
    <li key={props.key}>
      <Button>
        {props.name} {props.dateInit.toISOString()}{' '}
        {props.dateEnd.toISOString()}
      </Button>
      <Icon type="caret-right" style={{ color: '#FFA500' }} />
    </li>
  )
}
export default ElectionButton
