// var, let, const
// *** var
var i = 8888
for (var i = 0; i < 10; i++) {
  console.log(i) // 1,2,3,4,5,6,7,8,9,10
}
console.log('after loop', i) // after loop 10
var j = 8888
function counter() {
  for (var j = 0; j < 10; j++) {
    console.log(j) // 1,2,3,4,5,6,7,8,9,10
  }
}
console.log('after loop', j) // after loop 8888

// *** let (respect the scope)
let k = 8888
for (let k = 0; k < 10; k++) {
  console.log(k) // 1,2,3,4,5,6,7,8,9,10
}
console.log('after loop', k) // after loop 8888

// const (can't be reasigned but allows mutability)
// const x = 1
// x = 2 // Error

const x = {
  y: 5
}
x.y = 2
console.log(x.y) // 2