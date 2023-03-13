var config

if (process.env.NODE_ENV === 'production') {
  config = require('./prod')
} else {
// Note - changed to atlas 7.12
  // config = require('./dev')
  config = require('./prod')
}
config.isGuestMode = true

module.exports = config
