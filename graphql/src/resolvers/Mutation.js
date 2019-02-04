const { hash, compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

const Mutation = {
  signup: async (parent, { name, email, password }, context) => {
    const hashedPassword = await hash(password, 10)
    const user = await context.prisma.createAgent({
      name,
      email,
      password: hashedPassword,
    })
    return {
      token: sign({ agentId: agent.id }, APP_SECRET),
      agent,
    }
  },
  login: async (parent, { email, password }, context) => {
    const agent = await context.prisma.agent({ email })
    if (!agent) {
      throw new Error(`No agent found for email: ${email}`)
    }
    const passwordValid = await compare(password, agent.password)
    if (!passwordValid) {
      throw new Error('Invalid password')
    }
    return {
      token: sign({ agentId: agent.id }, APP_SECRET),
      agent,
    }
  }
}

module.exports = {
  Mutation,
}
