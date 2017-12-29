'use strict'

const Client = require('scp2')
const client = new Client.Client()
const colors = require('colors')

class WebpackSftp {
  constructor(options = {}) {
    this.options = options
    this.startTime = null
    this.endTime = null
  }

  apply(compiler) {
    compiler.plugin('done', compilation => {
      if (!this.options.port) {
        this.options.port = 22
      }

      this.startTime = Date.now()
      console.log('\nStart upload, please wait...'.green)

      this.upload(this.options.local, this.options)
    })
  }

  upload(local, obj) {
    Client.scp(local, obj, err => {
      if (err) throw err
      this.endTime = Date.now()
      console.log(`Uploaded ${local} successfully in ${this.endTime - this.startTime}ms`.green)
    })
  }
}

module.exports = WebpackSftp
