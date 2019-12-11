import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from '@Components/Layout'
import { Login, Home, Election, Census } from '@Views'
import routes, { PrivateRoute } from '@Routes'

const Protected = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path={routes.base} component={Home} />
      </Switch>
    </Layout>
  )
}

const Dev = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path={routes.base} component={Home} />
        <Route exact path={routes.election} component={Election} />
        <Route exact path={routes.census} component={Census} />
      </Switch>
    </Layout>
  )
}

//tiene orden de prioridad el switch ese
const App = () => {
  return (
    <Switch>
      <Route exact path={routes.login} component={Login} />
      <Route component={Dev} />
      <PrivateRoute component={Protected} />
    </Switch>
  )
}

export default App
