/**
 * @module domain/geolocation
 * @version 1.0.0
 * @author Peter Schmalfeldt <me@peterschmalfeldt.com>
 */

const maxmind = require('@maxmind/geoip2-node').Reader
const Promise = require('bluebird')

/**
  * Geolocation
  * @type {object}
  */
module.exports = {
  /**
    * Get IP Address
    * @param {string} ip - IP Address to Lookup
    * @param {string} source - Data Source [ 'cities', 'countries' ]
    * @returns {*}
    */
  getIpAddress: (ip, source) => {
    const possibleSources = ['cities', 'countries']

    return new Promise((resolve, reject) => {
      if (possibleSources.indexOf(source) !== -1) {
        if (source === 'cities') {
          maxmind.open('./app/flat-db/GeoLite2-City.mmdb').then(reader => {
            resolve(reader.city(ip))
          }).catch(err => {
            reject(err)
          })
        } else if (source === 'countries') {
          maxmind.open('./app/flat-db/GeoLite2-Country.mmdb').then(reader => {
            resolve(reader.country(ip))
          }).catch(err => {
            reject(err)
          })
        }
      } else {
        reject('Invalid Source')
      }
    })
  }
}
