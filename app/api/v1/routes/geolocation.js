/**
 * @module routes/geolocation
 * @version 1.0.0
 * @author Peter Schmalfeldt <me@peterschmalfeldt.com>
 * @todo Create Unit Tests for Routes
 */

const express = require('express')
const config = require('../../../config')
const util = require('./util')
const ipaddr = require('ipaddr.js')
const analytics = require('../../../analytics')

const router = express.Router(config.router)
const GeolocationDomain = require('../domain/geolocation')

/**
  * Lookup Location Data from IP Address
  * @memberof module:routes/geolocation
  * @name [GET] /geolocation/ip/:ipaddress
  * @property {string} [ipaddress=Requester's IP Address] - IP Address to Search For
  */
/* istanbul ignore next */
router.route('/geolocation/ip/:ipaddress?').get(function (request, response) {
  let valid = true
  let ip = request.params.ipaddress

  if (ip) {
    valid = (ip && /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip))
  } else {
    ip = request.headers['x-forwarded-for'] ||
       request.connection.remoteAddress ||
       request.socket.remoteAddress ||
       request.connection.socket.remoteAddress
  }

  const addr = ipaddr.process(ip).toString()

  if (addr && valid) {
    GeolocationDomain.getIpAddress(addr, 'cities')
      .then(function (results) {
        const apikey = (request.header('API-Key')) || request.query.apikey || null
        analytics.trackEvent(apikey, 'Geolocation', 'IP Address', request.query.apikey, results.length)

        response.json(util.createAPIResponse({
          data: results
        }, request.query.fields))
      })
      .catch(function (error) {
        const apikey = (request.header('API-Key')) || request.query.apikey || null
        analytics.trackEvent(apikey, 'Geolocation', 'Error - IP Address', error.toString())

        response.json(util.createAPIResponse({
          errors: [error]
        }, request.query.fields))
      })
  } else {
    const apikey = (request.header('API-Key')) || request.query.apikey || null
    analytics.trackEvent(apikey, 'Geolocation', 'Error - IP Address', 'Invalid IP Address')

    response.json(util.createAPIResponse({
      errors: ['Invalid IP Address']
    }, request.query.fields))
  }
})

module.exports = router
