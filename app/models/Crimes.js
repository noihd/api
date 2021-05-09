'use strict'
module.exports = (sequelize, DataTypes) => {
  const Crimes = sequelize.define(
    'Crimes', {
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
      population: {
        type: DataTypes.INTEGER(9),
        comment: 'UCR_1 Total Population, UCR'
      },
      annual_offenses: {
        type: DataTypes.INTEGER(9),
        comment: 'UCR_2 Annual Total of All Actual Offenses, UCR'
      },
      annual_crime_rate: {
        type: DataTypes.FLOAT(9),
        comment: 'UCR_3 Annual Crime Rate, UCR'
      },
      annual_violent_crimes: {
        type: DataTypes.INTEGER(9),
        comment: 'UCR_4 Annual Total of Violent Crimes, UCR'
      },
      annual_violent_crime_rate: {
        type: DataTypes.FLOAT(9),
        comment: 'UCR_5 Annual Violent Crime Rate, UCR'
      },
      annual_homicides: {
        type: DataTypes.INTEGER(9),
        comment: 'UCR_6 Annual Total of Homicides, UCR'
      },
      annual_homicide_rate: {
        type: DataTypes.FLOAT(9),
        comment: 'UCR_7 Annual Homicide Rate, UCR'
      },
      annual_officers_killed: {
        type: DataTypes.INTEGER(9),
        comment: 'UCR_8 Annual Number of Officers Killed by Felonious Acts, UCR'
      },
      annual_officers_killed_accident: {
        type: DataTypes.INTEGER(9),
        comment: 'UCR_9 Annual Number of Officers Killed by Accidental or Negligent Acts, UCR'
      },
      annual_officers_assaulted: {
        type: DataTypes.INTEGER(9),
        comment: 'UCR_10 Annual Number of Officers Assaulted, UCR'
      },
      annual_property_crimes: {
        type: DataTypes.INTEGER(9),
        comment: 'UCR_11 Annual Total of Property Crimes, UCR'
      },
      annual_property_crime_rate: {
        type: DataTypes.FLOAT(9),
        comment: 'UCR_12 Annual Property Crime Rate, UCR'
      },
      month_last_reported: {
        type: DataTypes.INTEGER(2),
        comment: 'UCR_13 Month Last Reported, UCR'
      },
      month_january: {
        type: DataTypes.INTEGER(9),
        comment: 'UCR_14 January: Month Included In, UCR'
      },
      month_february: {
        type: DataTypes.INTEGER(9),
        comment: 'UCR_15 February: Month Included In, UCR'
      },
      month_march: {
        type: DataTypes.INTEGER(9),
        comment: 'UCR_16 March: Month Included In, UCR'
      },
      month_april: {
        type: DataTypes.INTEGER(9),
        comment: 'UCR_17 April: Month Included In, UCR'
      },
      month_may: {
        type: DataTypes.INTEGER(9),
        comment: 'UCR_18 May: Month Included In, UCR'
      },
      month_june: {
        type: DataTypes.INTEGER(9),
        comment: 'UCR_19 June: Month Included In, UCR'
      },
      month_july: {
        type: DataTypes.INTEGER(9),
        comment: 'UCR_20 July: Month Included In, UCR'
      },
      month_august: {
        type: DataTypes.INTEGER(9),
        comment: 'UCR_21 August: Month Included In, UCR'
      },
      month_september: {
        type: DataTypes.INTEGER(9),
        comment: 'UCR_22 September: Month Included In, UCR'
      },
      month_october: {
        type: DataTypes.INTEGER(9),
        comment: 'UCR_23 October: Month Included In, UCR'
      },
      month_november: {
        type: DataTypes.INTEGER(9),
        comment: 'UCR_24 November: Month Included In, UCR'
      },
      month_december: {
        type: DataTypes.INTEGER(9),
        comment: 'UCR_25 December: Month Included In, UCR'
      },
      non_missing: {
        type: DataTypes.INTEGER(9),
        comment: 'UCR_26 Count of nonmissing UCR'
      }
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'crime',
      plural: 'crimes',
      tableName: 'crimes',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'Crime Measures',
      indexes: [
        {
          unique: true,
          name: 'crimes_unique_ix',
          fields: ['agency_id', 'source_year']
        },
        {
          name: 'crimes_year_ix',
          fields: ['source_year']
        }
      ]
    }
  )

  return Crimes
}
