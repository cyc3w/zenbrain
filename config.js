var config = module.exports = {}
config.enabled_plugins = [] // set to something like ['extras/twitter']
config.mongo_url = "mongodb://localhost:27017/zenbrain" // change if your mongo server isn't local
config.mongo_username = null // normally not needed
config.mongo_password = null
config.twitter_key = "" // create a twitter app, generate an access token, and add it here
config.twitter_secret = ""
config.twitter_access_token = ""
config.twitter_access_token_secret = ""
config.id_bytes = 8 // for random IDs
config.bucket_size = "1m"
config.reducer_limit = 500 // how many thoughts to process per reduce run
config.reducer_sizes = ["1m", "5m", "15m", "1h", "6h", "1d"]
config.save_state_interval = 10000 // save state
config.parallel_limit = 8 // run this many concurrent tasks
config.reduce_timeout = 2000
config.run_limit = 100
config.lock_timeout = 60000
config.lock_backoff = 20
config.lock_tries = 100
config.passive_update_timeout = 60000
config.return_timeout = 60000
config.brain_speed_ms = 1000
c.logic = function container (get, set, clear) {
  // these callbacks will run in order on every tick.
  // trigger an action with something like
  /*
  trigger({
    action: 'foo',
    some_prop: 'bar'
  })
  */
  // and the action will be queued for execution.
  return [
    function (tick, trigger, cb) {
      cb()
    }
  ]
}