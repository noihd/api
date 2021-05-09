/**
 * @module routes/util
 * @version 1.0.0
 * @author Peter Schmalfeldt <me@peterschmalfeldt.com>
 */

const _ = require('lodash')

/* istanbul ignore next */
module.exports = {

  /**
   * Default Response Template
   */
  defaultResponse: {
    notices: [],
    warnings: [],
    errors: [],
    field_errors: {},
    meta: {
      total: 0,
      showing: 0,
      pages: 1,
      page: 1
    },
    data: null
  },

  /**
   * Extend `defaultResponse` with the passed in object, pass the result into `response.json()`
   * @param  {object} data - Data object to fill response with
   * @param {string} [fields] - Comma Separated List of fields you want in the response
   * @return {object}
   */
  createAPIResponse (data, fields) {
    const filters = (fields) ? fields.split(',') : []
    const filterData = (data) => {
      return _.omitBy(data, (value, key) => {
        return (filters.indexOf(key) === -1)
      })
    }

    if (data && typeof data.data !== 'undefined' && filters.length > 0) {
      if (Array.isArray(data.data)) {
        const filteredData = []
        for (let i = 0; i < data.data.length; i++) {
          const filtered = filterData(data.data[i])

          filteredData.push(filtered)
        }

        data.data = filteredData
      } else {
        data.data = _.omitBy(data.data, (value, key) => {
          return (filters.indexOf(key) === -1)
        })
      }
    }

    const response = _.merge({}, this.defaultResponse, data)

    const errors = _.map(response.field_errors, (value, key) => {
      return _.isArray(value) && value.length > 0
    })

    errors.push(response.errors.length > 0)

    // Sort Data if a single object
    if (data && !_.isArray(data.data) && _.isObject(data.data)) {
      const sortedData = {}
      Object.keys(data.data).sort().forEach((key) => {
        sortedData[key] = data.data[key]
      })

      response.data = sortedData
    }

    // Auto populate meta data if not was sent over
    if (data && !data.meta) {
      let total = 1

      if (_.isEmpty(data.data)) {
        total = 0
      } else if (_.isArray(data.data)) {
        total = data.data.length
      }

      if (typeof response.meta === 'undefined') {
        response.meta = {}
      }

      response.meta.total = total
      response.meta.showing = total
      response.meta.pages = 1
      response.meta.page = 1
    }

    if (!response.error) {
      response.attribution = {
        text: 'Data Provided by Police Data Portal',
        website: 'https://policedataportal.org',
        link: '<a href="https://policedataportal.org">Data Provided by Police Data Portal</a>',
        license: 'https://raw.githubusercontent.com/FatalEncounters/api/master/LICENSE',
        report_bug: 'https://github.com/FatalEncounters/api/issues/new',
        logo: 'https://cdn.policedataportal.org/common/logo.png',
        icon: 'https://cdn.policedataportal.org/common/icon.png'
      }
    }

    return response
  }
}
