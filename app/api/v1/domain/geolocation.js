/**
 * @module domain/geolocation
 * @version 1.0.0
 * @author Peter Schmalfeldt <me@peterschmalfeldt.com>
 */

const maxmind = require('maxmind-db-reader')
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
  getIpAddress: function (ip, source) {
    const possibleSources = ['cities', 'countries']

    return new Promise(function (resolve, reject) {
      if (possibleSources.indexOf(source) !== -1) {
        maxmind.open('./app/flat-db/' + source + '.mmdb', (err, cities) => {
          if (err) {
            reject(err)
          } else {
            cities.getGeoData(ip, (ipErr, data) => {
              if (ipErr) {
                reject(ipErr)
              } else {
                resolve(data)
              }
            })
          }
        })
      } else {
        reject('Invalid Source')
      }
    })
  }
}
