'use strict'

/**
 * @module models/firearm_law
 * @version 1.0.0
 * @author Peter Schmalfeldt <me@peterschmalfeldt.com>
 */

module.exports = (sequelize, DataTypes) => {
  const FirearmLaws = sequelize.define('firearm_law', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    agency_id: {
      type: DataTypes.UUID(15),
      allowNull: false
    },
    state_firearm: {
      type: DataTypes.STRING(50),
      comment: 'SIE_1 - State, Siegel Firearm'
    },
    state_gun_ownership: {
      type: DataTypes.STRING(50),
      comment: 'SIE_7 - State, Siegel Gun Ownership'
    },
    violent_misdemeanor: {
      type: DataTypes.BOOLEAN,
      comment: 'SIE_2 - Firearm Law-Violent Misdemeanor, Siegel Firearm'
    },
    universal_background_check: {
      type: DataTypes.BOOLEAN,
      comment: 'SIE_3 - Firearm Law-Universal Background Check, Siegel Firearm'
    },
    may_issue: {
      type: DataTypes.BOOLEAN,
      comment: 'SIE_4 - Firearm Law-May Issue, Siegel Firearm'
    },
    count_of_three_laws: {
      type: DataTypes.INTEGER(1),
      comment: 'SIE_5 - Firearm Law-Count of Three Laws, Siegel Firearm'
    },
    count_of_three_laws_weighted: {
      type: DataTypes.FLOAT(4),
      comment: 'SIE_6 - Firearm Law-Weighted Count of Three Laws, Siegel Firearm'
    },
    gun_ownership_proxy_original: {
      type: DataTypes.FLOAT(3),
      comment: 'SIE_8 - Gun Ownership Proxy, Original, Siegel Gun Ownership'
    },
    gun_ownership_proxy_improved: {
      type: DataTypes.FLOAT(3),
      comment: 'SIE_9 - Gun Ownership Proxy, Improved, Siegel Gun Ownership'
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8_unicode_ci',
    comment: 'Constructed Contextual Firearm Measures',
    engine: 'InnoDB',
    freezeTableName: true,
    paranoid: true,
    plural: 'firearm_laws',
    singular: 'firearm_law',
    tableName: 'firearm_law',
    timestamps: true
  })

  return FirearmLaws
}
