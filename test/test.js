var assert = require('assert')
var compound = require('..')

describe('compound-sort', function() {

  function cmpa(a, b) {
    return a.a < b.a ? -1 : (a.a === b.a ? 0 : 1)
  }

  function cmpb(a, b) {
    return a.b < b.b ? -1 : (a.b === b.b ? 0 : 1)
  }

  it('should work', function() {
    var cmp = compound(cmpa, cmpb)
    var arr = [{a: 2, b: 1}, {a: 1, b: 2}, {a: 1, b: 3}]

    arr.sort(cmp)

    assert.equal(arr[0].a, 1)
    assert.equal(arr[1].a, 1)
    assert.equal(arr[2].a, 2)

    assert.equal(arr[0].b, 2)
    assert.equal(arr[1].b, 3)
    assert.equal(arr[2].b, 1)
  })
})