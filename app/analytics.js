/**
 * @module analytics
 * @version 1.0.0
 * @author Peter Schmalfeldt <me@peterschmalfeldt.com>
 */

const fetch = require('node-fetch')
const config = require('./config')

const Analytics = {
  trackEvent: (apikey, category, action, label, value) => {
    /* istanbul ignore next */
    if (config.get('devFlags.enableBugTracking') && config.get('analytics')) {
      // Convert Objects to String
      if (typeof category === 'object') {
        category = JSON.stringify(category)
      }

      if (typeof action === 'object') {
        action = JSON.stringify(action)
      }

      if (typeof label === 'object') {
        label = JSON.stringify(label)
      }

      // Remove API Key from Params
      label = label.replace('apikey=' + apikey, '').replace('"apikey":"' + apikey + '",', '').replace('"apikey":"' + apikey + '"', '')

      const data = {
        v: '1',
        tid: config.get('analytics'),
        cid: apikey || '49A50B59-BBD7-EC84-FD97-C0AA262B0F16',
        t: 'event',
        ec: category,
        ea: action,
        el: label,
        ev: value
      }

      /* istanbul ignore next: Skipping since it will only fire if not test */
      if (config.get('env') !== 'test') {
        return fetch('http://www.google-analytics.com/collect', {
          params: data
        })
      }

      return true
    }

    return true
  }
}

module.exports = Analytics
