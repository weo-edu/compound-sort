# compound-sort

Create a compound sort / comparator function from one or more comparators

## Example

```javascript
function cmpa(a, b) {
  return a.a < b.a ? -1 : (a.a === b.a ? 0 : 1)
}

function cmpb(a, b) {
  return a.b < b.b ? -1 : (a.b === b.b ? 0 : 1)
}

//
// Returns a function that compares first by cmpa, then by cmpb
// for values that tie with respect to cmpa
//
compound(cmpa, cmpb)
```