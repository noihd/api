'use strict'
module.exports = (sequelize, DataTypes) => {
  const Agency = sequelize.define(
    'Agency', {
      id: {
        type: DataTypes.INTEGER(15).UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      agency_type: {
        type: DataTypes.ENUM,
        values: ['local-police-department', 'sheriffs-office', 'state-law-enforcement-agency', 'special-jurisdiction', 'constable-marshal', 'federal'],
        allowNull: false,
        comment: 'XWK_21 - AGENCY TYPE'
      },
      agency_sub_type_1: {
        type: DataTypes.ENUM,
        values: ['public-buildings-facilities', 'natural-resources-parks-and-recreation', 'transportation-systems-facilities', 'criminal-investigations', 'special-enforcement', 'not-applicable'],
        allowNull: false,
        comment: 'XWK_22 - AGENCY SUB-TYPE 1'
      },
      agency_sub_type_2: {
        type: DataTypes.ENUM,
        values: ['not-applicable'],
        comment: 'XWK_23 - AGENCY SUB-TYPE 2'
      },
      ori9: {
        type: DataTypes.STRING(9),
        allowNull: false,
        unique: 'ori9',
        comment: 'XWK_1 - Unique ORI9 of Agency'
      },
      ori9_imp: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: 'XWK_2 - Flag: Imputed ORI9'
      },
      ori7: {
        type: DataTypes.STRING(7),
        allowNull: false,
        comment: 'XWK_3 - ORIGINATING AGENCY IDENTIFIER (7 CHARACTERS) FROM UCR FILES'
      },
      ori7_imp: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        comment: 'XWK_4 - Flag: Imputed ORI7'
      },
      ori_fbi: {
        type: DataTypes.STRING(9),
        comment: 'XWK_5 - ORI NUMBER ASSIGNED BY FBI'
      },
      is_sub_agency: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: 'XWK_20 - AGENCY/ORI IS PART OF LARGER PARENT AGENCY'
      },
      government_id: {
        type: DataTypes.INTEGER(9),
        allowNull: false,
        comment: 'XWK_24 - GOVERNMENT ID (CENSUS)'
      },
      agency_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'XWK_15 - AGENCY NAME'
      },
      address_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'XWK_26 - ADDRESS - NAME'
      },
      address_street_1: {
        type: DataTypes.STRING(100),
        comment: 'XWK_27 - ADDRESS - STREET LINE 1'
      },
      address_street_2: {
        type: DataTypes.STRING(100),
        comment: 'XWK_28-  ADDRESS - STREET LINE 2'
      },
      address_city: {
        type: DataTypes.STRING(50),
        comment: 'XWK_29 - ADDRESS - CITY'
      },
      address_state: {
        type: DataTypes.STRING(2),
        allowNull: false,
        comment: 'XWK_30 - ADDRESS - STATE'
      },
      address_zip_code: {
        type: DataTypes.STRING(5),
        comment: 'XWK_31 - ADDRESS - ZIP CODE'
      },
      district: {
        type: DataTypes.INTEGER(2),
        comment: 'XWK_44 - CONGRESSIONAL DISTRICT 1 (AS OF 2010)'
      },
      districts: {
        type: DataTypes.STRING(50),
        comment: 'XWK_45 - CONGRESSIONAL DISTRICTS 2 THROUGH 18 (AS OF 2010)'
      },
      district_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'XWK_46 - FEDERAL JUDICIAL DISTRICT NAME'
      },
      fips_county_code: {
        type: DataTypes.STRING(3),
        allowNull: false,
        comment: 'XWK_13 - FIPS COUNTY CODE'
      },
      fips_place_code: {
        type: DataTypes.STRING(5),
        allowNull: false,
        comment: 'XWK_11 - FIPS PLACE CODE'
      },
      fips_state_code: {
        type: DataTypes.STRING(2),
        allowNull: false,
        comment: 'XWK_12 - FIPS STATE CODE'
      },
      geo_county_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'XWK_18 - COUNTY NAME'
      },
      geo_state_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'XWK_17 - STATE NAME'
      },
      geo_latitude: {
        type: DataTypes.FLOAT(15),
        allowNull: false,
        comment: 'XWK_42 - latitude'
      },
      geo_longitude: {
        type: DataTypes.FLOAT(15),
        allowNull: false,
        comment: 'XWK_43 - longitude'
      },
      census_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: 'XWK_25 - CENSUS NAME'
      },
      census_population: {
        type: DataTypes.INTEGER(15),
        comment: 'XWK_39 - CENSUS POPULATION'
      },
      csllea_agency_id: {
        type: DataTypes.INTEGER(8),
        comment: 'XWK_33 - CSLLEA 2008 AGENCY IDENTIFIER'
      },
      group_number: {
        type: DataTypes.STRING(4),
        comment: 'XWK_37 - GROUP NUMBER (AS OF 2012)'
      },
      leaic_subset_flag: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: 'XWK_40 - FLAG VARIABLE TO SUBSET THE LEAIC TO APPROXIMATE THE CSLLEA'
      },
      lemas_files_id: {
        type: DataTypes.STRING(16),
        comment: 'XWK_34 - LEMAS FILES ID'
      },
      reported_offenses: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        comment: 'XWK_32 - ORI REPORTED 1 OR MORE OFFENSES 1985 - 2012'
      },
      source_csllea_2008: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: 'XWK_47 - SOURCE FILE FLAG: CSLLEA 2008'
      },
      source_ucr_2010: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: 'XWK_48 - SOURCE FILE FLAG: UCR 2010'
      },
      source_ucr_2011: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: 'XWK_49 - SOURCE FILE FLAG: UCR 2011'
      },
      source_ucr_2012: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: 'XWK_50 - SOURCE FILE FLAG: UCR 2012'
      },
      source_ncic_2012: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: 'XWK_51 - SOURCE FILE FLAG: NCIC 2012'
      },
      source_vendor_2012: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: 'XWK_50 - SOURCE FILE FLAG: VENDOR FILE 2012'
      },
      ucr_county_code: {
        type: DataTypes.INTEGER(2),
        comment: 'XWK_36 - UCR COUNTY (UCR CODING)'
      },
      ucr_state_code: {
        type: DataTypes.INTEGER(2),
        comment: 'XWK_35 - UCR NUMERIC STATE CODE (UCR CODING)'
      },
      ucr_population: {
        type: DataTypes.INTEGER(15),
        comment: 'XWK_38 - UCR TOTAL POPULATION (AS OF 2012)'
      },
      urban_name: {
        type: DataTypes.STRING(100),
        comment: 'XWK_19 - URBAN AREA/URBAN CLUSTER NAME'
      },
      urban_code: {
        type: DataTypes.INTEGER(7),
        allowNull: false,
        comment: 'XWK_16 - URBAN AREA/URBAN CLUSTER CODE'
      },
      comments: {
        type: DataTypes.TEXT,
        comment: 'XWK_41 - COMMENTS - TYPICALLY LISTING INFORMATION ON MULTIJURISDICTIONAL'
      }
    }, {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
      singular: 'agency',
      plural: 'agencies',
      tableName: 'agency',
      engine: 'InnoDB',
      collate: 'utf8_unicode_ci',
      charset: 'utf8mb4',
      comment: 'Agency Information about Police / Sheriff Department',
      indexes: [
        {
          name: 'address_city_ix',
          using: 'BTREE',
          fields: ['address_city']
        },
        {
          name: 'address_state_ix',
          using: 'BTREE',
          fields: ['address_state']
        },
        {
          name: 'fips_county_code_ix',
          using: 'BTREE',
          fields: ['fips_county_code']
        },
        {
          name: 'fips_place_code_ix',
          using: 'BTREE',
          fields: ['fips_place_code']
        },
        {
          name: 'fips_state_code_ix',
          using: 'BTREE',
          fields: ['fips_state_code']
        },
        {
          name: 'geo_county_name_ix',
          using: 'BTREE',
          fields: ['geo_county_name']
        },
        {
          name: 'geo_state_name_ix',
          using: 'BTREE',
          fields: ['geo_state_name']
        },
        {
          name: 'agency_type_ix',
          using: 'BTREE',
          fields: ['agency_type']
        },
        {
          name: 'agency_sub_type_1_ix',
          using: 'BTREE',
          fields: ['agency_sub_type_1']
        },
        {
          name: 'agency_sub_type_2_ix',
          using: 'BTREE',
          fields: ['agency_sub_type_2']
        }
      ]
    }
  )

  Agency.associate = function (models) {
    Agency.hasOne(models.AnnualDeaths, {
      foreignKey: 'agency_id',
      target: 'id'
    })

    Agency.hasOne(models.AnnualOfficerDeaths, {
      foreignKey: 'agency_id',
      target: 'id'
    })

    Agency.hasOne(models.Characteristics, {
      foreignKey: 'agency_id',
      target: 'id'
    })

    Agency.hasOne(models.Crimes, {
      foreignKey: 'agency_id',
      target: 'id'
    })

    Agency.hasOne(models.Gunshots, {
      foreignKey: 'agency_id',
      target: 'id'
    })

    Agency.hasOne(models.Demographics, {
      foreignKey: 'agency_id',
      target: 'id'
    })

    Agency.hasOne(models.FirearmLaws, {
      foreignKey: 'agency_id',
      target: 'id'
    })
  }

  return Agency
}
