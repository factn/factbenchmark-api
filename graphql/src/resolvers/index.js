const { Query } = require('./Query')
const { Mutation } = require('./Mutation')
const { Agent } = require('./Agent')
const { Claim } = require('./Claim')

const resolvers = {
  Query,
  Mutation,
  Agent,
  Claim,
}

module.exports = {
  resolvers,
}
