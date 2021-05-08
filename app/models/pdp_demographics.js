'use strict'

/**
 * @module models/demographics
 * @version 1.0.0
 * @author Peter Schmalfeldt <me@peterschmalfeldt.com>
 */

module.exports = (sequelize, DataTypes) => {
  const Demographics = sequelize.define('demographics', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    agency_id: {
      type: DataTypes.UUID(15),
      allowNull: false
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
    charset: 'utf8mb4',
    collate: 'utf8_unicode_ci',
    comment: 'Socio-Demographic Measures',
    engine: 'InnoDB',
    freezeTableName: true,
    paranoid: true,
    plural: 'demographics',
    singular: 'demographic',
    tableName: 'demographics',
    timestamps: true
  })

  return Demographics
}
