import { ApolloClient } from '@apollo/client'

export type Key = {
  __typename: string
  id: string
}

export type ApolloClientContext = {
  client: ApolloClient<object>
  cache: ApolloClient<object>['cache']
  getCacheKey: (key: Key) => string
}
