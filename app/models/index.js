'use strict'

/**
 * @module models/api
 * @version 1.0.0
 * @author Peter Schmalfeldt <me@peterschmalfeldt.com>
 */

const fs = require('fs')
const path = require('path')
const { Sequelize, DataTypes } = require('sequelize')

const sequelize = require('../config/sequelize')

const basename = path.basename(__filename)
const schema = {}

fs.readdirSync(__dirname).filter(file => {
  return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
}).forEach(file => {
  const model = require(path.join(__dirname, file))(sequelize, DataTypes)
  schema[model.name] = model
})

Object.keys(schema).forEach(modelName => {
  if (schema[modelName].associate) {
    schema[modelName].associate(schema)
  }
})

schema.sequelize = sequelize
schema.Sequelize = Sequelize

module.exports = schema
