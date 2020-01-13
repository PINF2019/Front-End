import React from 'react'
import { Layout, Row, Col, Card, Typography } from 'antd'
import { isAuthTokenExpired } from '@Utils/auth'
import { Redirect} from 'react-router-dom'
import AddUserForm from './Form'
import routes from '@Routes'
import Header from '@Components/Layout/Header'
import { useParams } from "react-router";

const ModifyUser = () => {
  const {nif, name, lastnames, sex, rol} = useParams()
  return (
    <div>
      <Typography.Title>Modificar usuario</Typography.Title>
      <Row type="flex" style={{ minHeight: '100vh' }}>
        <Col
          span={12}
          style={{
            justifyContent: 'center',
            
            alignItems: 'center'
          }}>
          <Card> {/*Crea el cuadrado del login*/}
            <AddUserForm nif={nif||''} name={name||''} lastnames={lastnames||''} sex={sex||''} rol={rol||''}/>
          </Card>
        </Col>
        <Col span={12}>
        </Col>
      </Row>
    </div>
  )
}

export default ModifyUser
