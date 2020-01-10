import { isAuthTokenExpired } from '@Utils/auth'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import routes from '@Routes'

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthTokenExpired() ? (
          <Component {...props} />
        ) : (
          <Redirect to={routes.login} />
        )
      }
    />
  )
}

export default PrivateRoute
