'use strict'

/**
 * @module models/annual_deaths
 * @version 1.0.0
 * @author Peter Schmalfeldt <me@peterschmalfeldt.com>
 */

module.exports = (sequelize, DataTypes) => {
  const AnnualDeaths = sequelize.define('annual_deaths', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    agency_id: {
      type: DataTypes.UUID(15),
      allowNull: false
    },
    is_imputed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: 'FE_1-29 Indicates Record Substitutes Missing Data'
    },
    year: {
      type: DataTypes.INTEGER(4)
    },
    type: {
      type: DataTypes.ENUM,
      values: [
        'asian-deaths',
        'asphyxiated-or-restrained',
        'beaten-or-bludgeoned',
        'black-deaths',
        'burned-or-smoke-inhalation',
        'chemical-agent-or-pepper-spray',
        'drowned',
        'drug-overdose',
        'fell-from-height-or-drowned',
        'fell-from-height',
        'gunshot',
        'hispanic-deaths',
        'imputed-race',
        'intentional-use-of-force',
        'justifiable-homicide',
        'medical-emergency-or-overdose',
        'medical-emergency',
        'middle-eastern-deaths',
        'native-american-deaths',
        'officer-involved',
        'other-or-undetermined',
        'other',
        'stabbed',
        'suicide-by-police-deaths',
        'suicide-deaths',
        'tasered',
        'undetermined',
        'unknown-race-deaths',
        'vehicle',
        'white-deaths'
      ],
      defaultValue: 'undetermined',
      comment: 'FE_1-29 Type of Death'
    },
    death_count: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
      comment: 'FE_1-29 Number of Deaths'
    },
    ethnicity: {
      type: DataTypes.ENUM,
      values: [
        'asian',
        'black',
        'hispanic',
        'middle-eastern',
        'native-american',
        'unspecified',
        'white'
      ],
      defaultValue: 'unspecified',
      comment: 'FE_1-29 Ethnicity of Death'
    },
    suicides_omitted: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
      comment: 'FE_1-29 Indicates Record Subtracted Deaths by Suicide'
    },
    justifiable_homicides: {
      type: DataTypes.INTEGER,
      comment: 'SHR_1 Count of Justifiable Homicides, SHR'
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8_unicode_ci',
    comment: 'Officer Involved Annual Death Counts',
    engine: 'InnoDB',
    freezeTableName: true,
    paranoid: true,
    plural: 'annual_deaths',
    singular: 'annual_death',
    tableName: 'annual_deaths',
    timestamps: true
  })

  return AnnualDeaths
}
