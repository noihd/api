'use strict'

/**
 * @module models/agency_sub_type_1
 * @version 1.0.0
 * @author Peter Schmalfeldt <me@peterschmalfeldt.com>
 */

module.exports = (sequelize, DataTypes) => {
  const AgencySubType1 = sequelize.define('agency_sub_type_1', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      defaultValue: 1
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8_unicode_ci',
    comment: 'XWK_22 - AGENCY SUB-TYPE 1',
    engine: 'InnoDB',
    freezeTableName: true,
    paranoid: true,
    plural: 'agency_sub_types_1',
    singular: 'agency_sub_type_1',
    tableName: 'agency_sub_type_1',
    timestamps: true
  })

  return AgencySubType1
}
