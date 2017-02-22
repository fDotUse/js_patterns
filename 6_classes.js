class Person {
  constructor(saying) {
    this.saying = saying
  }
  talk() {
    console.log(this.saying)
  }
}

let me = new Person("I'm Sergio")
me.talk()

// extending Person
class SuperPerson extends Person {
  constructor(saying) {
    super(saying)
  }
  yell() {
    console.log(`${this.saying.toUpperCase()}!!!`)
  }
}

let superMe = new SuperPerson("i'm Super Sergio")

superMe.talk()
superMe.yell()