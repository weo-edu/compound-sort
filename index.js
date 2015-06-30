module.exports = function(/* arguments */) {
  var fns = [].slice.call(arguments)
  return function(a, b) {
    var res

    for(var i = 0; i < fns.length; i++) {
      res = fns[i](a, b)
      if(res !== 0)
        return res
    }

    return 0
  }
}