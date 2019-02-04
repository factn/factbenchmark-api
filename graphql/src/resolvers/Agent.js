const Agent = {
  claims: ({ id }, args, context) => {
    return context.prisma.agent({ id }).claims()
  },
}

module.exports = {
  Agent,
}
