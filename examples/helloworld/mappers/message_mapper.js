module.exports = function container (get, set, clear) {
  var get_id = get('utils.get_id')
  return function message_mapper (text, cb) {
    var message = {
      id: get_id(),
      text: text,
      processed: false
    }
    get('messages').save(message, function (err, saved) {
      if (err) {
        if (cb) return cb(err)
      }
      cb && cb()
    })
  }
}