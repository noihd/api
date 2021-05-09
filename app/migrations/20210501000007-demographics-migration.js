'use strict'

const models = require('../models')

module.exports = {
  up: (queryInterface) => {
    return queryInterface.createTable(models.Demographics.tableName, models.Demographics.rawAttributes).then(() => {
      for (let i = 0; i < models.Demographics.options.indexes.length; i++) {
        queryInterface.addIndex(models.Demographics.tableName, models.Demographics.options.indexes[i]).catch(err => {
          if (typeof err.message !== 'undefined' && err.message.indexOf('Deadlock') === -1) {
            console.log(`× INDEX ERROR: ${err.message}`)
          }
        })
      }
    }).catch(err => {
      if (typeof err.message !== 'undefined') {
        console.log(`× CREATE ERROR: ${err.message}`)
      }
    })
  },
  down: (queryInterface) => {
    return queryInterface.dropTable(models.Demographics.tableName)
  }
}
