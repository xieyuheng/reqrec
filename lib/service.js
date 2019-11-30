class service_t {
  constructor(args) {
    // if (!args.context) throw new Error('CONTEXT_REQUIRED')
    // this.context = args.context
  }

  run(the) {
    return this.validate(the).then(the => {
      return this.execute(the)
    })
  }
}

module.exports = {
  service_t
}
