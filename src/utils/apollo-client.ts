import {
  ApolloClient,
  concat,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import resolvers from '@Graphql/client/resolvers'
import { authLink } from './auth'

const httpLink = createHttpLink({ uri: 'http://votuca.krosf.com:7000/graphql' })

const cache = new InMemoryCache()

const data = { isLoggedIn: false }

cache.writeData({ data })

const client = new ApolloClient({
  link: concat(authLink, httpLink),
  cache,
  resolvers,
})

client.onResetStore(async () => cache.writeData({ data }))

export default client
