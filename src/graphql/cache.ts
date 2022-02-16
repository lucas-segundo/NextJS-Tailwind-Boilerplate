import { InMemoryCache } from '@apollo/client'
import { concatPagination } from '@apollo/client/utilities'

//TODO:Build a cache that can be used to store the results of queries
export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        games: concatPagination(['where', 'sort']),
      },
    },
    Wishlist: {
      fields: {
        games: {
          merge(_, incoming) {
            return incoming
          },
        },
      },
    },
  },
})
