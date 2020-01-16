import { QueryResolvers } from '@Generated/resolvers'
import { isAuthTokenExpired } from '@Utils/auth'

const loggedResolver: QueryResolvers = {
  isLoggedIn: () => {
    return !isAuthTokenExpired()
  },
}

export default loggedResolver
