// bind
let dog = {
  sound: 'woof',
  talk: function() {
    console.log(this.sound)
  }
}

dog.talk() // woof

let talkFunction = dog.talk
talkFunction() // undefined 

// in this case this is the global object
let boundTalkFunction = talkFunction.bind(dog)
boundTalkFunction() // woof
