'use strict'

/**
 * @module models/agency_type
 * @version 1.0.0
 * @author Peter Schmalfeldt <me@peterschmalfeldt.com>
 */

module.exports = (sequelize, DataTypes) => {
  const AgencyType = sequelize.define('agency_type', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      defaultValue: 0
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8_unicode_ci',
    comment: 'XWK_21 - AGENCY TYPE',
    engine: 'InnoDB',
    freezeTableName: true,
    paranoid: true,
    plural: 'agency_types',
    singular: 'agency_type',
    tableName: 'agency_type',
    timestamps: true
  })

  return AgencyType
}
