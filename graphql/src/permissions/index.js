const { rule, and, shield } = require('graphql-shield')
const { getUserId } = require('../utils')

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const agentId = getAgentId(context)
    return Boolean(agentId)
  })
}

const permissions = shield({
  Query: {
    me: rules.isAuthenticatedUser,
    allClaims: rules.isAuthenticatedUser,
    findClaims: rules.isAuthenticatedUser,
  },
  Mutation: {
    submitClaim: rules.isAuthenticatedUser
  },
})

module.exports = {
  permissions,
}
