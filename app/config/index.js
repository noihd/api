'use strict'

/**
 * @module config
 */

const convict = require('convict')
const path = require('path')

/**
 * Default API Configuration
 * @type {object}
 */
const config = convict({
  devFlags: {
    enableBugTracking: {
      doc: 'Enable Bug Tracking',
      format: Boolean,
      default: false,
      env: 'API_DEV_FLAG_BUGSNAG'
    },
    enableGoogleAnalytics: {
      doc: 'Enable Google Analytics',
      format: Boolean,
      default: false,
      env: 'API_DEV_FLAG_ANALYTICS'
    }
  },
  debug: {
    doc: 'Whether debugging is on or off',
    format: Boolean,
    default: false,
    env: 'API_DEBUG'
  },
  debugKey: {
    doc: 'Allow for apiDevKey param in API to check API results without token',
    format: String,
    default: 'B15C1B3E-7EC2-8D84-013A-DF332E7D0C65',
    env: 'API_DEBUG_KEY'
  },
  env: {
    doc: 'The current application environment',
    format: ['local', 'mobile', 'staging', 'production', 'test', 'docker'],
    default: 'local',
    env: 'API_NODE_ENV'
  },
  port: {
    doc: 'The port to bind to',
    format: 'port',
    default: 5000,
    env: 'API_PORT'
  },
  version: {
    doc: 'API Version Number ( in URL )',
    format: String,
    default: 'v1',
    env: 'API_API_VERSION'
  },
  sessionKey: {
    doc: 'Express Session Key',
    format: String,
    default: 'CDA81F62-D687-FD94-E553-4993C3060A16',
    env: 'API_SESSION_KEY'
  },
  bugsnag: {
    doc: 'Bugsnag API Key',
    format: String,
    default: '',
    env: 'API_BUGSNAG'
  },
  analytics: {
    doc: 'Google Analytics API Key',
    format: String,
    default: '',
    env: 'API_GOOGLE_ANALYTICS'
  },
  hashID: {
    secret: {
      doc: 'Hash ID Encryption Key',
      format: String,
      default: '8510F72D-BF84-1824-95B9-81D493F54A31',
      env: 'API_HASH_ID_SECRET'
    },
    length: {
      doc: 'Hash ID String Length',
      format: Number,
      default: 6,
      env: 'API_HASH_ID_LENGTH'
    },
    alphabet: {
      doc: 'Hash ID Alphabet to use if creating Hashes ( remove vowels to prevent accidental words )',
      format: String,
      default: 'BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz',
      env: 'API_HASH_ID_ALPHABET'
    }
  },
  database: {
    api: {
      host: {
        doc: 'API MySQL Host',
        format: String,
        default: 'localhost',
        env: 'API_API_HOST'
      },
      database: {
        doc: 'API MySQL Database',
        format: String,
        default: 'api_database',
        env: 'API_API_DATABASE'
      },
      username: {
        doc: 'API MySQL Username',
        format: String,
        default: 'root',
        env: 'API_API_USERNAME'
      },
      password: {
        doc: 'API MySQL Password',
        format: String,
        default: '',
        env: 'API_API_PASSWORD'
      },
      port: {
        doc: 'API MySQL Port',
        format: Number,
        default: 3306,
        env: 'API_API_PORT'
      }
    }
  },
  secret: {
    doc: 'App secret key',
    format: String,
    default: '02FD45D0-64FC-85A4-B90A-01931503098F',
    env: 'API_APP_SECRET'
  },
  router: {
    caseSensitive: {
      doc: 'Whether routes are case-sensitive',
      format: Boolean,
      default: true
    },
    mergeParams: {
      doc: 'Whether child routes should merge with parent route params',
      format: Boolean,
      default: true
    }
  },
  elasticsearch: {
    host: {
      doc: 'The Elasticsearch host/connection string/URL',
      format: String,
      env: 'API_ELASTIC_SEARCH',
      default: 'http://localhost:9200'
    },
    indexName: {
      doc: 'The name of the API Elasticsearch index',
      format: String,
      default: 'api'
    },
    apiVersion: {
      doc: 'Change the API that they client provides, specify the major version of the Elasticsearch nodes you will be connecting to.',
      format: String,
      default: '7.5'
    },
    requestTimeout: {
      doc: 'Milliseconds before an HTTP request will be aborted and retried. This can also be set per request.',
      format: Number,
      default: 30000
    },
    log: {
      doc: 'Elasticsearch API Logging. See: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/logging.html',
      format: '*',
      default: 'error'
    }
  }
})

const env = config.get('env')
try {
  config.loadFile(path.join(__dirname, env + '.json'))
  config.validate({
    strict: true
  })
} catch (e) {
  /* istanbul ignore next */
  if (e.message.indexOf('configuration param') === -1) {
    console.error('INVALID CONFIG: ' + e.name + ' - ' + e.message)
  }
}

module.exports = config
