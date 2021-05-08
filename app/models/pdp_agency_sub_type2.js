'use strict'

/**
 * @module models/agency_sub_type_2
 * @version 1.0.0
 * @author Peter Schmalfeldt <me@peterschmalfeldt.com>
 */

module.exports = (sequelize, DataTypes) => {
  const AgencySubType2 = sequelize.define('agency_sub_type_2', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      defaultValue: 888
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8_unicode_ci',
    comment: 'XWK_23 - AGENCY SUB-TYPE 2',
    engine: 'InnoDB',
    freezeTableName: true,
    paranoid: true,
    plural: 'agency_sub_types_2',
    singular: 'agency_sub_type_2',
    tableName: 'agency_sub_type_2',
    timestamps: true
  })

  return AgencySubType2
}
