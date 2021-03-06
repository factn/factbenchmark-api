const { verify } = require('jsonwebtoken')

const APP_SECRET = 'appsecret321'

class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

function getAgentId(context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET)
    return verifiedToken && verifiedToken.userId
  }
}

module.exports = {
  getAgentId,
  APP_SECRET,
}
