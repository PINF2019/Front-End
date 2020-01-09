import jwtDecode from 'jwt-decode'
import { ApolloLink } from '@apollo/client'

export type TokenDto = {
  nom: string
}
