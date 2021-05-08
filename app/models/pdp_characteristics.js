'use strict'

/**
 * @module models/characteristics
 * @version 1.0.0
 * @author Peter Schmalfeldt <me@peterschmalfeldt.com>
 */

module.exports = (sequelize, DataTypes) => {
  const Characteristics = sequelize.define('characteristics', {
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
      comment: 'LEM_1-38 Indicates Imputed Data'
    },
    incentives_education: {
      type: DataTypes.BOOLEAN,
      comment: 'LEM_3 Agency Educational Incentives, LEMAS'
    },
    incentives_tuition: {
      type: DataTypes.BOOLEAN,
      comment: 'LEM_4 Agency Tuition Incentives, LEMAS'
    },
    training_types: {
      type: DataTypes.INTEGER(3),
      comment: 'LEM_5 Count of Training Types, LEMAS'
    },
    training_types_normalized: {
      type: DataTypes.INTEGER(3),
      comment: 'LEM_6 Count of Training Types Normalized, LEMAS'
    },
    required_training_hours_all: {
      type: DataTypes.INTEGER(4),
      comment: 'LEM_7 Count of All Required Training Hours, LEMAS'
    },
    required_training_hours_recruits: {
      type: DataTypes.INTEGER(4),
      comment: 'LEM_8 Count of New Recruit Required Training Hours, LEMAS'
    },
    minimum_education_requirement: {
      type: DataTypes.INTEGER(1),
      comment: 'LEM_9 Minimum Education Requirement, LEMAS'
    },
    sworn_full_time_men: {
      type: DataTypes.INTEGER(6),
      comment: 'LEM_1 Count of Men FT Sworn, LEMAS'
    },
    sworn_full_time_men_percent: {
      type: DataTypes.INTEGER(3),
      comment: 'LEM_28 % Men FT Sworn, LEMAS'
    },
    sworn_full_time_women: {
      type: DataTypes.INTEGER(6),
      comment: 'LEM_2 Count of Women FT Sworn, LEMAS'
    },
    sworn_full_time_women_percent: {
      type: DataTypes.INTEGER(3),
      comment: 'LEM_27 % Women FT Sworn, LEMAS'
    },
    sworn_full_time_black: {
      type: DataTypes.INTEGER(6),
      comment: 'LEM_11 Count Black FT Sworn, LEMAS'
    },
    sworn_full_time_black_percent: {
      type: DataTypes.INTEGER(3),
      comment: 'LEM_20 % Black FT Sworn, LEMAS'
    },
    sworn_full_time_white: {
      type: DataTypes.INTEGER(6),
      comment: 'LEM_10 Count White FT Sworn, LEMAS'
    },
    sworn_full_time_white_percent: {
      type: DataTypes.INTEGER(3),
      comment: 'LEM_19 % White FT Sworn, LEMAS'
    },
    sworn_full_time_hispanic: {
      type: DataTypes.INTEGER(6),
      comment: 'LEM_12 Count Hispanic FT Sworn, LEMAS'
    },
    sworn_full_time_hispanic_percent: {
      type: DataTypes.INTEGER(3),
      comment: 'LEM_21 % Hispanic FT Sworn, LEMAS'
    },
    sworn_full_time_indian: {
      type: DataTypes.INTEGER(6),
      comment: 'LEM_13 Count American Indian FT Sworn, LEMAS'
    },
    sworn_full_time_indian_percent: {
      type: DataTypes.INTEGER(3),
      comment: 'LEM_22 % American Indian FT Sworn, LEMAS'
    },
    sworn_full_time_asian: {
      type: DataTypes.INTEGER(6),
      comment: 'LEM_14 Count Asian American FT Sworn, LEMAS'
    },
    sworn_full_time_asian_percent: {
      type: DataTypes.INTEGER(3),
      comment: 'LEM_23 % Asian American FT Sworn, LEMAS'
    },
    sworn_full_time_hawaiian: {
      type: DataTypes.INTEGER(6),
      comment: 'LEM_15 Count Native Hawaiian FT Sworn, LEMAS'
    },
    sworn_full_time_hawaiian_percent: {
      type: DataTypes.INTEGER(3),
      comment: 'LEM_24 % Native Hawaiian FT Sworn, LEMAS'
    },
    sworn_full_time_unreported: {
      type: DataTypes.INTEGER(6),
      comment: 'LEM_16 Count Unreported Race FT Sworn, LEMAS'
    },
    sworn_full_time_unreported_percent: {
      type: DataTypes.INTEGER(3),
      comment: 'LEM_26 % Unreported Race FT Sworn, LEMAS'
    },
    sworn_full_time_other: {
      type: DataTypes.INTEGER(6),
      comment: 'LEM_17 Count Other Race FT Sworn, LEMAS'
    },
    sworn_full_time_other_percent: {
      type: DataTypes.INTEGER(3),
      comment: 'LEM_25 % Other Race FT Sworn, LEMAS'
    },
    sworn_full_time_total: {
      type: DataTypes.INTEGER(6),
      comment: 'LEM_18 Count Total Pop FT Sworn, LEMAS'
    },
    has_lethal_force_policy: {
      type: DataTypes.BOOLEAN,
      comment: 'LEM_29 Written Lethal Force Policy, LEMAS'
    },
    has_less_than_lethal_force_policy: {
      type: DataTypes.BOOLEAN,
      comment: 'LEM_30 Written Less than Lethal Force Policy, LEMAS'
    },
    has_conduct_appearance_policy: {
      type: DataTypes.BOOLEAN,
      comment: 'LEM_31 Written Conduct/Appearance Policy, LEMAS'
    },
    has_off_duty_employee_policy: {
      type: DataTypes.BOOLEAN,
      comment: 'LEM_32 Written Off Duty Emp Policy, LEMAS'
    },
    has_off_max_hours_policy: {
      type: DataTypes.BOOLEAN,
      comment: 'LEM_33 Written Off Max Hours Policy, LEMAS'
    },
    has_domestic_dispute_policy: {
      type: DataTypes.BOOLEAN,
      comment: 'LEM_36 Domestic Dispute Policy, LEMAS'
    },
    has_civilian_board_for_excessive_force_complaints: {
      type: DataTypes.BOOLEAN,
      comment: 'LEM_37 Civilian Board for Excessive Force Complaints, LEMAS'
    },
    has_independent_investigative_authority_board: {
      type: DataTypes.BOOLEAN,
      comment: 'LEM_38 Independent Investigative Authority for Board, LEMAS'
    },
    pursuits_must_be_reviewed: {
      type: DataTypes.BOOLEAN,
      comment: 'LEM_35 Pursuits Must Be Reviewed, LEMAS'
    },
    policy_pursuit: {
      type: DataTypes.INTEGER(1),
      comment: 'LEM_34 Description of Written Pursuit Policy, LEMAS'
    },
    non_missing: {
      type: DataTypes.INTEGER(1),
      comment: 'LEM_39 Count of non-missing LEMAS'
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8_unicode_ci',
    comment: 'Police Department Characteristics',
    engine: 'InnoDB',
    freezeTableName: true,
    paranoid: true,
    plural: 'characteristics',
    singular: 'characteristic',
    tableName: 'characteristics',
    timestamps: true
  })

  return Characteristics
}
