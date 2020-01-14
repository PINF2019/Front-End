import React from 'react'
import { Layout, Row, Col, Card, Typography } from 'antd'
import { isAuthTokenExpired } from '@Utils/auth'
import { Redirect} from 'react-router-dom'
import MofifyUserForm from './Form'
import routes from '@Routes'
import Header from '@Components/Layout/Header'
import { useParams } from "react-router";

const { Text } = Typography;

const ModifyUser = () => {
  const {id, name, lastnames, sex, rol, colegiateBody} = useParams()
  return (
    <Row justify="start" style={{ marginTop: '3%', marginLeft: '3%', overflow: 'auto' }}>
      <Row className="layout" style={{ marginBottom: '2%' }}>
        <Card className = "card">
          <Text strong style={{ fontSize: "30px" }}>
            Modificar Usuario
          </Text>
        </Card>
      </Row>
      <Row type="flex" style={{ minHeight: '100vh', marginLeft: '3%' }}>
      <Col span={12} style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Card> 
            <MofifyUserForm id={id||''} name={name||''} lastnames={lastnames||''} sex={sex||''} rol={rol||''} colegiateBody={colegiateBody||''}/>
          </Card>
        </Col>
        <Col span={12}>
        </Col>
      </Row>
    </Row>
  )
}

export default ModifyUser
