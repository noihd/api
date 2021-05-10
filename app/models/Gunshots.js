'use strict'
module.exports = (sequelize, DataTypes) => {
  const Gunshots = sequelize.define(
    'Gunshots', {
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
      shots_fired: {
        type: DataTypes.INTEGER(9),
        comment: 'VIC_3 Total Number of Shots Fired Count, Vice'
      },
      fatal_shootings: {
        type: DataTypes.INTEGER(9),
        comment: 'VIC_4 Fatal Shootings Count, Vice'
      },
      possible_fatal_shootings: {
        type: DataTypes.INTEGER(9),
        comment: 'VIC_5 Unknown if Fatal Shootings Count, Vice'
      },
      non_fatal_shootings: {
        type: DataTypes.INTEGER(9),
        comment: 'VIC_6 Nonfatal Shootings Count, Vice'
      },
      unarmed_shootings: {
        type: DataTypes.INTEGER(9),
        comment: 'VIC_7 Subject Unarmed Shootings Count, Vice'
      },
      possible_armed_shootings: {
        type: DataTypes.INTEGER(9),
        comment: 'VIC_8 Unknown if Subject Armed Shootings Count, Vice'
      },
      armed_shootings: {
        type: DataTypes.INTEGER(9),
        comment: 'VIC_9 Subject Armed Shootings Count, Vice'
      }
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'gunshot',
      plural: 'gunshots',
      tableName: 'gunshots',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'Gunshot Measures',
      indexes: [
        {
          name: 'gunshots_agency_year_ix',
          using: 'BTREE',
          fields: ['agency_id', 'source_year']
        },
        {
          name: 'gunshots_year_ix',
          using: 'BTREE',
          fields: ['source_year']
        }
      ]
    }
  )

  return Gunshots
}
