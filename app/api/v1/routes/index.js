/**
 * @module routes
 * @version 1.0.0
 * @author Peter Schmalfeldt <me@peterschmalfeldt.com>
 */

const express = require('express')

const config = require('../../../config')
const geolocation = require('./geolocation')
const unauthorized = require('./unauthorized')

const router = express.Router(config.router)
const version = config.get('version')

router.use(`/${version}/`, geolocation)
router.use(`/${version}/`, unauthorized)

module.exports = router
