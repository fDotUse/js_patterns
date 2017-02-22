// psudoclassical pattern inheritance 

function Person(saying) {
  this.saying = saying
}

Person.prototype.talk = function() {
  console.log(this.saying)
}

let me = new Person("I'm Sergio")
me.talk()

// prototypal inheritance

let AnotherPerson = function(saying) {
  let personInstance = Object.create(personMethods)
  personInstance.saying = saying
  return personInstance
}

let personMethods = {}
personMethods.talk = function () {
  console.log(this.saying)
}

let me2 = AnotherPerson("I'm a second Sergio")
me2.talk()