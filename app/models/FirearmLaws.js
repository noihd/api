'use strict'
module.exports = (sequelize, DataTypes) => {
  const FirearmLaws = sequelize.define(
    'FirearmLaws', {
      id: {
        type: DataTypes.INTEGER(15).UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      agency_id: {
        type: DataTypes.INTEGER(15).UNSIGNED,
        allowNull: false
      },
      source_year: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        comment: 'XWK_6 - Year of merged data'
      },
      source_name: {
        type: DataTypes.STRING(100),
        comment: 'XWK_7 - Data Source Name'
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
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'firearm_law',
      plural: 'firearm_laws',
      tableName: 'firearm_laws',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'Constructed Contextual Firearm Measures',
      indexes: [
        {
          unique: true,
          name: 'firearm_laws_unique_ix',
          fields: ['agency_id', 'source_year']
        },
        {
          name: 'firearm_laws_year_ix',
          fields: ['source_year']
        },
        {
          name: 'firearm_laws_violent_ix',
          fields: ['violent_misdemeanor']
        },
        {
          name: 'firearm_laws_universal_ix',
          fields: ['universal_background_check']
        },
        {
          name: 'firearm_laws_issue_ix',
          fields: ['may_issue']
        }
      ]
    }
  )

  return FirearmLaws
}
