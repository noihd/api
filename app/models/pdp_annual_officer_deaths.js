'use strict'

/**
 * @module models/annual_officer_deaths
 * @version 1.0.0
 * @author Peter Schmalfeldt <me@peterschmalfeldt.com>
 */

module.exports = (sequelize, DataTypes) => {
  const AnnualOfficerDeaths = sequelize.define('annual_officer_deaths', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    agency_id: {
      type: DataTypes.UUID(15),
      allowNull: false
    },
    group_code: {
      type: DataTypes.STRING(2),
      comment: 'LEO_1 Group, LEOKA'
    },
    total_population: {
      type: DataTypes.DOUBLE(9),
      comment: 'LEO_2 Total Population, LEOKA'
    },
    total_employees: {
      type: DataTypes.DOUBLE(5),
      comment: 'LEO_5 Total Employees, LEOKA'
    },
    total_officers: {
      type: DataTypes.INTEGER(3),
      comment: 'LEO_6 Total Officers, LEOKA'
    },
    male_officers: {
      type: DataTypes.DOUBLE(5),
      comment: 'LEO_3 Male Officers, LEOKA'
    },
    female_officers: {
      type: DataTypes.DOUBLE(5),
      comment: 'LEO_4 Female Officers, LEOKA'
    },
    officer_rate_per_10k: {
      type: DataTypes.INTEGER(3),
      comment: 'LEO_7 Officer Rate per 10,000, LEOKA'
    },
    months_reported_assaults_with_injury: {
      type: DataTypes.DOUBLE(3),
      comment: 'LEO_10 Number of Months Reported, Assaults with Injury, LEOKA'
    },
    months_reported_assaults_without_injury: {
      type: DataTypes.DOUBLE(3),
      comment: 'LEO_11 Number of Months Reported, Assaults without Injury, LEOKA'
    },
    annual_assaults_with_injury: {
      type: DataTypes.FLOAT(7),
      comment: 'LEO_8 Annual Number of Assaults With Injury, LEOKA'
    },
    annual_assaults_without_injury: {
      type: DataTypes.FLOAT(7),
      comment: 'LEO_9 Annual Number of Assaults Without Injury, LEOKA'
    },
    annual_officers_killed_felony: {
      type: DataTypes.FLOAT(3),
      comment: 'LEO_12 Annual Number of Officers Killed, Felony, LEOKA'
    },
    annual_officers_killed_accident: {
      type: DataTypes.FLOAT(3),
      comment: 'LEO_13 Annual Number of Officers Killed, Accident, LEOKA'
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8_unicode_ci',
    comment: 'Officers Assaulted and Killed Annual Death Counts',
    engine: 'InnoDB',
    freezeTableName: true,
    paranoid: true,
    plural: 'annual_officer_deaths',
    singular: 'annual_officer_death',
    tableName: 'annual_officer_deaths',
    timestamps: true
  })

  return AnnualOfficerDeaths
}
