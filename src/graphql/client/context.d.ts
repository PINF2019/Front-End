import { ApolloClient } from '@apollo/client'

export type ApolloClientContext = {
  client: ApolloClient<object>
  cache: ApolloClient<object>['cache']
  getCacheKey: (key: { __typename: string; id: string }) => string
}
