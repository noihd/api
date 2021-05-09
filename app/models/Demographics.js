'use strict'
module.exports = (sequelize, DataTypes) => {
  const Demographics = sequelize.define(
    'Demographics', {
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
      is_normalized_place: {
        type: DataTypes.BOOLEAN,
        comment: 'CEN_1-26 Normalized Place Indicator'
      },
      is_place: {
        type: DataTypes.BOOLEAN,
        comment: 'CEN_1-26 Place Indicator'
      },
      is_county: {
        type: DataTypes.BOOLEAN,
        comment: 'CEN_1-26 County Indicator'
      },
      is_geo: {
        type: DataTypes.BOOLEAN,
        comment: 'CEN_1-26 Lowest Geographic Unit Indicator'
      },
      population: {
        type: DataTypes.INTEGER(11),
        comment: 'CEN_4 Place Population, Census'
      },
      proportion_white: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_1 Proportion Non-Hispanic White, Census'
      },
      proportion_black: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_2 Proportion Non-Hispanic Black, Census'
      },
      proportion_hispanic: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_3 Proportion Hispanic, Census'
      },
      proportion_minor: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_5 Proportion Age Less Than 18, Census'
      },
      proportion_owner_occupied: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_6 Proportion Owner-Occupied Households, Census'
      },
      proportion_foreign_born: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_7 Proportion Foreign-Born, Census'
      },
      proportion_unemployed: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_8 Proportion Unemployed, Census'
      },
      proportion_below_poverty: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_9 Proportion Below Poverty Line, Census'
      },
      proportion_receiving_welfare: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_10 Proportion Receiving Welfare, Census'
      },
      proportion_head_by_women: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_11 Proportion of Families and Subfamilies Headed By Women w/ Children'
      },
      proportion_less_highschool: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_12 Proportion Age 25+ w/Less Than HS Degree, Census'
      },
      proportion_highschool: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_13 Proportion Age 25+ w/HS Degree, Census'
      },
      proportion_some_college: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_14 Proportion Age 25+ w/Some College, Census'
      },
      proportion_college: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_15 Proportion Age 25+ w/College Degree, Census'
      },
      rank_order_income_segregation: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_16 Rank Order Family Income Segregation'
      },
      index_dissimilarity_white_asian: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_23 Dissimilarity Index, White-Asian'
      },
      index_dissimilarity_white_black: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_17 Dissimilarity Index, White-Black'
      },
      index_dissimilarity_white_hispanic: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_20 Dissimilarity Index, White-Hispanic'
      },
      index_info_theory_white_asian: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_25 Information Theory Index, White- Asian'
      },
      index_info_theory_white_black: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_19 Information Theory Index, White-Black'
      },
      index_info_theory_white_hispanic: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_22 Information Theory Index-White-Hispanic'
      },
      index_isolation_white_asian: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_24 Isolation Index, White-Asian'
      },
      index_isolation_white_black: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_18 Isolation Index, White-Black'
      },
      index_isolation_white_hispanic: {
        type: DataTypes.FLOAT(9),
        comment: 'CEN_21 Isolation Index, White-Hispanic'
      },
      geographic_level: {
        type: DataTypes.BOOLEAN,
        comment: 'CEN_26 Flag, Geographic Level'
      }
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'demographic',
      plural: 'demographics',
      tableName: 'demographics',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'Socio-Demographic Measures',
      indexes: [
        {
          unique: true,
          name: 'demographics_unique_ix',
          fields: ['agency_id', 'source_year']
        },
        {
          name: 'demographics_year_ix',
          fields: ['source_year']
        },
        {
          name: 'demographics_normalized_ix',
          fields: ['is_normalized_place']
        },
        {
          name: 'demographics_place_ix',
          fields: ['is_place']
        },
        {
          name: 'demographics_county_ix',
          fields: ['is_county']
        },
        {
          name: 'demographics_geo_ix',
          fields: ['is_geo']
        }
      ]
    }
  )

  return Demographics
}
