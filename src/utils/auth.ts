import jwtDecode from 'jwt-decode'
import { ApolloLink } from '@apollo/client'

export type TokenDto = {
  id: string
  iat: number
  exp: number
}

export const getAuthToken = (): string | null => {
  return localStorage.getItem('WkVjNWNscFhORDA9')
}

export const setAuthToken = (token: string) => {
  localStorage.setItem('WkVjNWNscFhORDA9', token)
}

export const removeAuthToken = () => {
  localStorage.removeItem('WkVjNWNscFhORDA9')
}

export const isAuthTokenExpired = () => {
  const token = getAuthToken()
  if (token === null) {
    return true
  }
  return jwtDecode<TokenDto>(token).exp < Date.now() / 1000
}

export const authLink = new ApolloLink((operation, forward) => {
  const token = getAuthToken()
  operation.setContext({
    headers: {
      authorization: token ? `bearer ${token}` : '',
    },
  })
  return forward(operation)
})
