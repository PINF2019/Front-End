import React from 'react'
import { Button } from 'antd'

const AdminOptions = () => {
  const elecs = ['Gestionar Usuario', 'Delegar Secretario']
  // Con esto devuelves cada elemento del vector usando la funcion map de los arrays
  return (
    <ul>
      {elecs.map(elec => (
        <li>
          <Button
            style={{
              maxHeight: 'fit-content',
              maxWidth: 'fit-content'
            }}>
            {elec}
          </Button>
        </li>
      ))}
    </ul>
  )
}

export default AdminOptions
