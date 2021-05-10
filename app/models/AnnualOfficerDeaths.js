'use strict'
module.exports = (sequelize, DataTypes) => {
  const AnnualOfficerDeaths = sequelize.define(
    'AnnualOfficerDeaths', {
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
      group_code: {
        type: DataTypes.STRING(2),
        comment: 'LEO_1 Group, LEOKA'
      },
      total_population: {
        type: DataTypes.FLOAT(9),
        comment: 'LEO_2 Total Population, LEOKA'
      },
      total_employees: {
        type: DataTypes.FLOAT(5),
        comment: 'LEO_5 Total Employees, LEOKA'
      },
      total_officers: {
        type: DataTypes.INTEGER(3),
        comment: 'LEO_6 Total Officers, LEOKA'
      },
      male_officers: {
        type: DataTypes.FLOAT(5),
        comment: 'LEO_3 Male Officers, LEOKA'
      },
      female_officers: {
        type: DataTypes.FLOAT(5),
        comment: 'LEO_4 Female Officers, LEOKA'
      },
      officer_rate_per_10k: {
        type: DataTypes.INTEGER(3),
        comment: 'LEO_7 Officer Rate per 10,000, LEOKA'
      },
      months_reported_assaults_with_injury: {
        type: DataTypes.FLOAT(3),
        comment: 'LEO_10 Number of Months Reported, Assaults with Injury, LEOKA'
      },
      months_reported_assaults_without_injury: {
        type: DataTypes.FLOAT(3),
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
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'annual_officer_death',
      plural: 'annual_officer_deaths',
      tableName: 'annual_officer_deaths',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'Officers Assaulted and Killed Annual Death Counts',
      indexes: [
        {
          name: 'annual_officer_deaths_agency_year_ix',
          using: 'BTREE',
          fields: ['agency_id', 'source_year']
        },
        {
          name: 'annual_officer_deaths_year_ix',
          using: 'BTREE',
          fields: ['source_year']
        }
      ]
    }
  )

  return AnnualOfficerDeaths
}
