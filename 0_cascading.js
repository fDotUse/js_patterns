// simple chaining
var obj = function() {
  this.i = 0;
  this.add = function(n) {
    this.i += n
    return this
  }
  this.substract = function(n) {
    this.i -= n
    return this
  }
  this.print = function() {
    console.log('the number is....', this.i)
    return this
  }
} 

var x = new obj()
console.log('x is....', x)
x.add(3).substract(2).print().add(3).print()

// chaining with clousures

var obj2 = function() {
  var i = 0;
  var add = function(n) {
    i += n
    return this
  }
  var substract = function(n) {
    i -= n
    return this
  }
  var print = function() {
    console.log('the number is....', i)
    return this
  }
  
  return {
    add:add, 
    substract:substract,
    print:print
  }
}

var y = obj2()
console.log('y is....', y)
y.add(3).substract(2).print().add(3).print()